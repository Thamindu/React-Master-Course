import { SignUpForm } from "./signup-form";

export default function SignUpPage() {
  return (
     <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-6">
       <div className="w-full max-w-sm">
         <SignUpForm />
       </div>
     </div>
   );
}
