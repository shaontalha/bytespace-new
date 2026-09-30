import AuthPage from "@/components/sections/AuthPage";
import { authPages } from "@/lib/data";

export const metadata = { title: "Sign In | ByteSpace" };

export default function LoginPage() {
  return <AuthPage content={authPages.login} />;
}