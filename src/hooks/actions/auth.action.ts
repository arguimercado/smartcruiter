'use server';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth as clientAuth } from "../../lib/firebase/client"
import { auth as serverAuth, db } from "../../lib/firebase/admin";
import { cookies } from "next/headers";


const ONE_WEEK = 60 * 60 * 24 * 7 * 1000;

export async function signUp(params: SignUpParams) {

   const { email, password, name } = params;

   try {

      const userCredential = await createUserWithEmailAndPassword(clientAuth, email, password);
      const uid = userCredential.user.uid;
      const userRecord = await db.collection('users').doc(uid).get();

      if (userRecord.exists) {
         return {
            sucess: false,
            error: "User already exists. Please sign-in. "
         }
      }

      await db.collection("users").doc(uid).set({
         name,
         email,
         password,
         createdAt: new Date().toISOString(),
         updatedAt: new Date().toISOString()
      })

      return { success: true };
   }
   catch (error: any) {

      console.error("Signup failed:", error);
      if (error.code === 'auth/email-already-in-use') {
         return {
            success: false,
            error: "Email already in use"
         };
      }
      return {
         success: false,
         error: error
      }
   }
}

export async function signIn(params: SignInParams) {

   const {email,password} = params;

   try {

      const userRecord = serverAuth.getUserByEmail(email);
      if(!userRecord){
          return { 
            success: false, 
            message: "User not found" };
      }

      const userCredential = await signInWithEmailAndPassword(clientAuth, email, password);
      const idToken = await userCredential.user.getIdToken(true);

       if(!idToken) {
         return { 
            success: false, 
            message: "Invalid credentials" 
         };
      }

      await setSessionCookie(idToken);

      return {success: true, message: "Sign-in successful"};

   }
   catch(error: any) {
      return { success: false, message: error.message };
   }
}


export async function getCurrentUser() : Promise<User | null> {
   
   const cookieStore = await cookies();
   const sessionCookie = cookieStore.get("session")?.value;

   if(!sessionCookie) {
      return null;
   }

   try {
      
      const decodedClaims = await serverAuth.verifySessionCookie(sessionCookie, true);

      const userRecord = await db
            .collection("users")
            .doc(decodedClaims.uid)
            .get();

      if(!userRecord) {
         return null;
      }


      return {
         ...userRecord.data(),
         id: decodedClaims.uid,
      } as User;


   } catch (error) {
      console.error("Error verifying session cookie:", error);
      return null;
   }
}



export async function setSessionCookie(idToken: string) {
   const cookieStore = await cookies();
   const sessionCookie = await serverAuth.createSessionCookie(idToken, {
      expiresIn: ONE_WEEK
   });

   cookieStore.set("session", sessionCookie, {
      maxAge: ONE_WEEK,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "lax",
   });

}
