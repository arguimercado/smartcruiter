

interface SignUpParams {
  uid?: string;
  name: string;
  email: string;
  password: string;
}

interface SignInParams {
  email: string;
  password: string;
}


interface User {
  name: string;
  email: string;
  id: string;
}
