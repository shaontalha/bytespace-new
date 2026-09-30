import AuthPage from "@/components/sections/AuthPage";
import { authPages } from "@/lib/data";

export const metadata = { title: "Sign Up | ByteSpace" };

export default function SignupPage() {
  return <AuthPage content={authPages.signup} />;
}