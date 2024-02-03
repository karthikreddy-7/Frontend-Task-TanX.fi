import React, { useState } from "react";

const Signin = () => {
  const [signup, setsignup] = useState(false);
  const handleSignUp = () => {
    setsignup(!signup);
  };
  return (
    <div>
      {!signup && (
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content w-3/4 flex-col lg:flex-row-reverse">
            <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form class="card-body">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    class="input input-bordered"
                    required
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    class="input input-bordered"
                    required
                  />
                  <label class="label">
                    <a
                      href="#"
                      class="label-text-alt link link-hover mt-4"
                      onClick={handleSignUp}
                    >
                      Create an Account?
                    </a>
                  </label>
                </div>
                <div class="form-control mt-6">
                  <button class="btn btn-ghost bg-blue-400 text-white">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {signup && (
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content w-3/4 flex-col lg:flex-row-reverse">
            <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form class="card-body">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Enter your Email ID</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    class="input input-bordered"
                    required
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Create Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    class="input input-bordered"
                    required
                  />
                  <label class="label">
                    <a
                      href="#"
                      class="label-text-alt link link-hover mt-4"
                      onClick={handleSignUp}
                    >
                      Have an Account?
                    </a>
                  </label>
                </div>
                <div class="form-control mt-6">
                  <button class="btn btn-ghost bg-blue-400 text-white">
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signin;
