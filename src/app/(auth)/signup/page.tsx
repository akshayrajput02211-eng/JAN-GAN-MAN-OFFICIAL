import SignupHero from "@/components/auth/signup/SignupHero";
import SignupForm from "@/components/auth/signup/SignupForm";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-[#f4f8ff] dark:bg-[#07111f]">
      <div className="grid min-h-screen lg:grid-cols-2">
        <SignupHero />
        <SignupForm />
      </div>
    </main>
  );
}