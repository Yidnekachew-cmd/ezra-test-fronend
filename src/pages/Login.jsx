import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import "./LoginAndSignup.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <div className="flex w-[70%] rounded-xl border-2 border-accent-6 mx-auto my-20">
      <div className="flex flex-col bg-coming-soon bg-cover w-[60%] font-nokia-bold p-7 justify-between text-white rounded-xl" style={{backgroundPositionX:"-80px"}}>
      <div className="flex space-x-3 cursor-pointer text-white ">
          <img src="src/assets/ezra-logo.svg" alt="" />
          <h3 className="self-center text-2xl font-Lato-Regular">
            <span className="font-Lato-Bold">EZRA</span> Seminary
          </h3>
        </div>
        <p className="text-3xl">
        መጽሃፍ ቅዱስ እግዚአብሔርን<br/>
        <span className="text-4xl text-accent-6">በግላችን የምናውቅበት</span><br/>
        ዋነኛው መንገድ ነው።<br/>
        </p>
      </div>
    <form className="flex flex-col font-nokia-bold px-7 py-5 text-accent-6" onSubmit={handleSubmit}>
      <h3 className="text-3xl"><span className="text-secondary-6">Log</span>in</h3>
      <div className="mt-4 flex flex-col gap-2 text-xs">
      <label>Email</label>
      <input
        type="email"
        className="border-2 border-accent-6 text-accent-3 text-xs1 p-2 w-80"
        placeholder="abc@gmail.com"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        className="border-2 border-accent-6 text-accent-3 text-xs1 p-2 w-80"
        placeholder="********"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>
      <button disabled={isLoading}>Login</button>
      {error && <div className="error">{error}</div>}
    </form>
    </div>
  );
};

export default Login;
