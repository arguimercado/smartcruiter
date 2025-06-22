export const ROUTES = {
   DASHBOARD: '/dashboard',
   SIGNUP: '/sign-up',
   SIGNIN: '/sign-in',
   FEEDBACK: (id:string) => `/interview/${id}/feedback`,
   INTERVIEW: '/interview',
   INTERVIEW_CREATE: '/interview/create',
   INTERVIEW_BY_ID: (id:string) => `/interview/${id}`,
   INTERVIEW_GENERATOR: '/interview/generator',
}