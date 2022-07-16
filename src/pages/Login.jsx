import React from "react";

const Login = () => {
  return (
    <div class="hero min-h-screen bg-base ">
      <div class="hero-content flex-col lg:flex-col">
        <div class="flex flex-col align-middle justify-center text-center lg:text-left max-w-[600px]">
          <h1 class="text-5xl font-bold text-center">Login now!</h1>
          <p class="py-6 text-center">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                class="input input-bordered"
              />
              <label class="label"></label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
