import { Icon } from "@iconify-icon/react";
import { Link } from "react-router-dom";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";

const LoginComponent = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="logo p-5 border-b border-solid border-grey-300 w-full flex flex-col items-center justify-center">
        <Icon icon="logos:spotify" width="150" />
      </div>
      <div className="inputRegion w-1/3 py-10 flex  flex-col items-center justify-center">
        {/* I will have my 2 inputs (email and password) ans I will have my sign up instead button*/}
        <div className="font-bold mb-6">To continue, log in to Spotify.</div>
        <TextInput
          label="Email address or Username"
          placeholder="Email address or Username"
          className="my-6"
        />
        <PasswordInput label="Password" placeholder="Password" />
        <div className="w-full flex items-center justify-end my-8 ">
          <button className="bg-green-600 font-semibold p-3 px-10 rounded-full">
            LOG IN
          </button>
        </div>
        <div className="w-full border border-solid border-grey-300"></div>
        <div className="my-6 font-bold text-lg">Don't have an account?</div>
        <div className="border border-gray-500 text-gray-500 font-bold w-full flex justify-center items-center py-4 rounded-full ">
          <Link to="/signup">SIGN UP FOR SPOTIFY</Link>
        </div>
      </div>
    </div>
  );
};
export default LoginComponent;
