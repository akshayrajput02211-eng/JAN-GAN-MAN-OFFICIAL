import LoginHero from "@/components/auth/login/LoginHero";
import LoginForm from "@/components/auth/login/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#f4f8ff] dark:bg-[#07111f]">
      <div className="grid min-h-screen lg:grid-cols-2">
        <LoginHero />
        <LoginForm />
      </div>
    </main>
  );
}