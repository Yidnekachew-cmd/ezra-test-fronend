import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { GoogleLogo, FacebookLogo } from "@phosphor-icons/react";
import "./LoginAndSignup.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = await login(email, password);
    if (user.role === "Admin") {
      navigate("/admin");
    }
  };

  return (
    <div className="flex w-[90%] md:w-[70%] rounded-xl md:border-2 md:border-accent-6 mx-auto my-20">
      <div
        className="md:flex flex-col bg-coming-soon bg-cover hidden lg:w-[58%] font-nokia-bold p-7 justify-between text-white rounded-xl gap-64"
        style={{ backgroundPositionX: "-80px" }}
      >
        <div className="flex space-x-3 cursor-pointer text-white ">
          <img src="src/assets/ezra-logo.svg" alt="" />
          <h3 className="self-center text-2xl font-Lato-Regular">
            <span className="font-Lato-Bold">EZRA</span> Seminary
          </h3>
        </div>
        <p className="text-3xl">
          መጽሃፍ ቅዱስ እግዚአብሔርን
          <br />
          <span className="text-4xl text-accent-6">በግላችን የምናውቅበት</span>
          <br />
          ዋነኛው መንገድ ነው።
          <br />
        </p>
      </div>
      <form
        className="flex flex-col font-nokia-bold px-7 py-16 text-accent-6 w-[100%] sm:w-[10em] md:w-[20em] lg:w-[35em]"
        onSubmit={handleSubmit}
      >
        <h3 className="text-3xl">
          <span className="text-secondary-6">Log</span>in
        </h3>
        <div className="mt-4 flex flex-col gap-2 text-xs">
          <label>Email</label>
          <input
            type="email"
            className="border rounded-lg border-accent-6 placeholder:text-accent-3 text-xs1 p-2 mb-2 md:w-168"
            placeholder="abc@gmail.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            className="border rounded-lg border-accent-6  placeholder:text-accent-3 text-xs1 p-2 "
            placeholder="********"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="self-end">Forgot Password?</p>
          <div className="flex gap-2">
            <input
              type="checkbox"
              className="appearance-none border-2 border-accent-6 rounded-md w-5 h-5 checked:bg-accent-6 checked:border-transparent text-white"
            />
            <label className="text-xs">Remember me</label>
          </div>
        </div>
        <div className="w-[100%] mt-4 flex gap-2">
          <button
            disabled={isLoading}
            className="md:w-[40%] lg:w-[69%] bg-accent-6 text-white px-16 py-1 rounded-sm hover:bg-accent-7 hover:cursor-pointer transition-all"
          >
            Log In
          </button>
          <Link
            className="border border-accent-6 rounded-sm px-8 flex justify-center items-center hover:bg-secondary-6 hover:text-primary-1 hover:border-secondary-6 transition-all"
            to="/signup"
          >
            <p>Sign Up</p>
          </Link>
        </div>
        {error && <div className="error">{error}</div>}
        <div className="text-xs mt-4">
          <p>Or signup with</p>
          <div className="flex mt-2 text-2xl text-white gap-2 ">
            <GoogleLogo className="bg-accent-6 rounded-full hover:bg-accent-7 hover:cursor-pointer  transition-all"></GoogleLogo>
            <FacebookLogo className="bg-accent-6 rounded-full  hover:bg-accent-7  hover:cursor-pointer  transition-all"></FacebookLogo>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
