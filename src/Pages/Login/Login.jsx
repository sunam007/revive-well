import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="h-[600px] flex justify-center items-center">
      <div className="card w-96 bg-base-100 rounded-md shadow-xl ">
        <form className="card-body">
          <h2 className="card-title text-center">Login</h2>

          <div className="divider"></div>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered input-accent w-full max-w-xs"
          />
          <input
            type="password"
            placeholder="password"
            className="input input-bordered input-accent w-full max-w-xs"
          />
          <input
            type="submit"
            value="Login"
            className="btn bg-green-300 hover:bg-green-400 text-green-950 "
          />
          <p className="mt-4 font-medium">
            New to Revive-Well? Please{" "}
            <Link to="/register" className="text-orange-400">
              Register
            </Link>
          </p>
          <div className="divider"></div>
          <input
            type="submit"
            value="Sign In With Google"
            className="btn btn-outline btn-accent"
          />
        </form>
      </div>
    </section>
  );
};

export default Login;
