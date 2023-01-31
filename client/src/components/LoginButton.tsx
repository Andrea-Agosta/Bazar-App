import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button
    onClick={() => loginWithRedirect()}
    className='text-[#027782] border border-[#027782] p-3 p-lg-1 px-3 rounded bg-white hover:text-white hover:bg-[#027782] text:xl lg:text-xs w-11/12 my-5 mx-3 lg:my-0'
  >Sign up | Log In</button>;
};

export default LoginButton;