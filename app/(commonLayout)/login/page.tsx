import LoginForm from "@/components/Form/LoginForm";
import CommonBanner from "@/components/shared/CommonBanner";
import RegisterForm from "./../../../components/Form/RegisterForm";

export default function LoginRegisterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Banner Section */}
      <CommonBanner page={"Login/ Register"} />

      {/* Main Form Section */}
      <div className="container mx-auto my-10 md:mb-20  py-12">
        <p className="text-center text-pink-600 font-medium mb-2">
          Login & Register
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Access Your Account To Get Everything
        </h2>

        <div className="flex flex-col md:flex-row  justify-center gap-6">
          {/* Login Card */}
          <LoginForm />

          {/* Register Card */}
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
