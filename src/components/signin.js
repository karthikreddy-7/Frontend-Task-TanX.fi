import React, { useEffect, useState } from "react";

const Signin = () => {
  const [signup, setsignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [credentials, setcredentials] = useState("");
  const [alert, setAlert] = useState(0);

  const apiUrl = process.env.REACT_APP_API_ENDPOINT || "http://localhost:8000";

  const handleSignUp = () => {
    setsignup(!signup);
  };
  useEffect(() => {
    fetch(`${apiUrl}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setcredentials(data);
        console.log(data);
      })
      .catch((error) => {});
  }, []);

  const createAccount = () => {
    const newUser = {
      email: email,
      password: password,
    };

    // Fetch existing users data
    fetch(`${apiUrl}/users`)
      .then((response) => response.json())
      .then((users) => {
        // Check if the email already exists
        if (users.some((user) => user.email === email)) {
          console.log("user id exists");
          setAlert(1);
          setTimeout(() => {
            setAlert(0);
          }, 1500);
          return alert("Email already exists. Please choose a different one.");
        }

        // If email is unique, proceed to add the user
        return fetch(`${apiUrl}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });
      })
      .then(async (response) => {
        console.log("User added successfully:", response);
        setAlert(4);
        setTimeout(() => {
          setAlert(0);
        }, 1500);
      })
      .catch((error) => {
        console.error("Error adding user:", error.message);
      });
  };

  const handleLogin = () => {
    const enteredCredentials = {
      email: email,
      password: password,
    };

    // Fetch the users data
    fetch(`${apiUrl}/users`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((userData) => {
        // Check if the entered credentials match any user
        const matchedUser = userData.find(
          (user) =>
            user.email === enteredCredentials.email &&
            user.password === enteredCredentials.password
        );

        if (matchedUser) {
          // Successful login, you can set some state or perform further actions
          console.log("Login successful!");
          setAlert(3);
          setTimeout(() => {
            setAlert(0);
          }, 1500);
        } else {
          setAlert(2);
          setTimeout(() => {
            setAlert(0);
          }, 1500);
          alert("Incorrect/Invalid Credentials");
        }
      })
      .catch((error) => {
        console.error("Error fetching users data:", error);
      });
  };

  return (
    <div>
      {!signup && (
        <div class="hero mt-2 min-h-screen bg-base-200">
          <div class="hero-content w-3/4 flex flex-col">
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
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
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
                  <button
                    class="btn btn-ghost bg-blue-400 text-white"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div>
              <div>
                {alert === 2 && (
                  <div role="alert" class="alert alert-error">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="stroke-current shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Invalid Credentials, Try Again !</span>
                  </div>
                )}
                {alert === 3 && (
                  <div role="alert" class="alert alert-success">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="stroke-current shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Login Successful redirecting to products Page!</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {signup && (
        <div class="hero mt-2 min-h-screen bg-base-200">
          <div class="hero-content w-3/4 flex flex-col">
            <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form class="card-body" onSubmit={(e) => e.preventDefault()}>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Enter your Email ID</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    class="input input-bordered"
                    required
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
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
                  <button
                    class="btn btn-ghost bg-blue-400 text-white"
                    onClick={createAccount}
                  >
                    Create Account
                  </button>
                </div>
              </form>
            </div>
            <div>
              <div>
                {alert === 1 && (
                  <div role="alert" class="alert alert-error">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="stroke-current shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Mail ID already exists !</span>
                  </div>
                )}
                {alert === 4 && (
                  <div role="alert" class="alert alert-success">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="stroke-current shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Account Created Successfully!</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signin;
