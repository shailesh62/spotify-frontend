import { Icon } from "@iconify-icon/react";
import { Link } from "react-router-dom";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";

const SignupComponent = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="logo p-5 border-b border-solid border-grey-300 w-full flex flex-col items-center justify-center">
        <Icon icon="logos:spotify" width="150" />
      </div>
      <div className="inputRegion w-1/3 py-10 flex  flex-col items-center justify-center">
        {/* I will have my 2 inputs (email and password) ans I will have my sign up instead button*/}
        <div className="font-bold mb-6 text-2xl">
          Sign up for free to start listening.
        </div>
        <TextInput
          label="Email address or Username"
          placeholder="Enter your email"
          className="my-6"
        />
        <TextInput
          label="Confirm Email Address"
          placeholder="Enter your email again"
          className="mb-6"
        />
        <PasswordInput
          label="Create Password"
          placeholder="Enter a strong password here"
        />
        <TextInput
          label="What should we call you?"
          placeholder="Enter a profile name"
          className="my-6"
        />
        <div className="w-full flex items-center justify-center my-8 ">
          <button className="bg-green-600 font-semibold p-3 px-10 rounded-full">
            SIGN UP
          </button>
        </div>
        <div className="w-full border border-solid border-grey-300"></div>
        <div className="my-6 font-bold text-lg">Already have an account?</div>
        <div className="border border-gray-500 text-gray-500 font-bold w-full flex justify-center items-center py-4 rounded-full ">
          <Link to="/login">LOG IN INSTEAD</Link>
        </div>
      </div>
    </div>
  );
};
export default SignupComponent;
 