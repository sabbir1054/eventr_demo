import { Button } from "../ui/button";
import { Input } from "../ui/input";

const RegisterForm = () => {
  return (
    <>
      <div className="border rounded-lg p-6 py-10 md:min-w-[450px] shadow-sm bg-white max-w-[600px]">
        <h3 className="text-2xl font-bold border-b mb-10 border-gray-200 pb-2 ">
          Register
        </h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Email address <span className="text-red-500">*</span>
            </label>
            <Input
              type="email"
              className="h-12"
              placeholder="Enter email address"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              User name <span className="text-red-500">*</span>
            </label>
            <Input type="text" className="h-12" placeholder="Enter user name" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <Input
              type="password"
              className="h-12"
              placeholder="Enter password"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Confirm password <span className="text-red-500">*</span>
            </label>
            <Input
              type="password"
              className="h-12"
              placeholder="Enter password"
            />
          </div>

          <Button className="w-full h-12 bg-pink-500 hover:bg-pink-600 text-white">
            Register now
          </Button>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
