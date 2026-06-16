import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import LoginForm from "./LoginForm";

export const metadata = {
  title: "Sign In | La Damai Resort",
};

export default function LoginPage() {
  return (
    <>
      <Sidebar />
      <section className="bg-coffee min-h-screen flex items-center justify-center pt-32 pb-20 px-6">
        <div className="max-w-md w-full">
          <div className="text-center mb-10">
            <p className="text-vanilla text-xs tracking-[0.4em] uppercase mb-4">
              Member Access
            </p>
            <h1 className="font-display text-3xl md:text-4xl text-porcelain">
              Welcome Back
            </h1>
          </div>
          <LoginForm />
        </div>
      </section>
      <Footer />
    </>
  );
}
