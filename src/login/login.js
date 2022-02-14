import React, { useState } from "react";
import { useNavigate } from "react-router-dom/index";
import "./styles.scss";
import Input from "../_input/text/input";
import Button from "../_input/button/button";

const submitArrow = (
  <>
    Sign In{" "}
    <span aria-hidden="true" className="material-icons">
      arrow_forward
    </span>
  </>
);

const LoginPage = (props) => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [invalidPassword, setInvalidPassword] = useState();
  const navigate = useNavigate();

  function updateEmail(e) {
    const value = e.target.value;
    setUserName(value);
  }
  function updatePassword(e) {
    const value = e.target.value;
    setPassword(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email;
    const pass = event.target.password;

    if (userName === "robin@robinai.co.uk" && password === "batman") {
      console.log("correct details");
      props.setAuthenticated(true);
      localStorage.setItem("authenticated", true);
      navigate("/draft");
    } else {
      props.setAuthenticated(false);
      localStorage.setItem("authenticated", false);
      email.classList.add("error");
      pass.classList.add("error");
      setInvalidPassword(true);
    }
  };

  return (
    <div className="login-page">
      <aside className="gradient">
        <div className="statement">
          <p>
            We make
            <br />
            contracts
            <br />
            simple.
          </p>
        </div>
        <div className="bird-ledge">
          <svg
            width="81"
            height="41"
            viewBox="0 0 81 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_376_4586)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M66.2065 0.71257C60.8053 0.589006 55.7782 6.06699 55.7782 6.06699L24.2026 19.2058C24.2026 19.2058 33.7169 25.3429 44.2697 25.0546C54.8226 24.8075 65.3755 18.1762 65.3755 18.1762C63.6306 19.7414 61.7193 21.1417 59.7251 22.3774C56.4014 24.4367 51.4988 27.2375 45.3084 27.6082C40.4474 27.9789 35.5864 27.2375 31.0579 25.4252C27.9834 24.3956 26.9447 24.8075 26.9447 24.8075C26.9447 24.8075 1.68428 36.793 0.645609 37.2874C-0.39306 37.7816 -0.143779 39.7174 1.14417 39.0584C2.47367 38.4406 16.2257 32.7155 18.8016 31.8094C21.3775 30.9032 25.2413 30.7796 31.9304 33.5804C36.9159 35.4339 42.1508 36.5872 47.4688 37.0402L49.9201 40.5H52.2467C52.2467 40.5 51.6235 39.7175 50.7094 38.7289C49.7954 37.6992 50.9588 36.4224 50.9588 36.4224C50.9588 36.4224 66.248 31.9741 71.5244 26.6197C76.8009 21.2653 75.0144 14.7576 74.8481 11.9568C74.5989 8.90893 80 7.09668 80 7.09668L74.9728 4.79016C72.7292 2.2777 69.5717 0.836133 66.2065 0.71257ZM70.735 7.7145C69.6964 7.75569 68.8239 6.93192 68.8239 5.94342C68.8239 4.87254 69.6964 4.04878 70.735 4.04878C71.7737 4.04878 72.6461 4.91373 72.6461 5.94342C72.6046 6.97311 71.7737 7.75569 70.735 7.7145Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_376_4586">
                <rect
                  width="81"
                  height="39.7895"
                  fill="white"
                  transform="translate(0 0.71051)"
                />
              </clipPath>
            </defs>
          </svg>
          <hr />
        </div>
      </aside>
      <main>
        <div className="login">
          <div className="dummy-content">
            <div className="w-[540px] p-16">
              <h1>Log in to Project Wanda</h1>
              <p className="intro">
                Welcome! Please log in with the information that you entered
                during registration.
              </p>
              <p>
                If this is your first time here, please contact your account
                manager to get set up.
              </p>
              <div className="form-container">
                {/* <form onSubmit={() => navigate("/draft")}> */}
                <form onSubmit={handleSubmit}>
                  <Input
                    id="login-username"
                    label="Email Address"
                    type="email"
                    name="email"
                    placeholder="example@email.co.uk"
                    orientation="vertical"
                    onChange={updateEmail}
                  />
                  <Input
                    id="login-password"
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    orientation="vertical"
                    onChange={updatePassword}
                  />
                  <div className="remember-submit">
                    <div className="flex-1">
                      <label className="checkbox">
                        <input
                          name="rememberMe"
                          type="checkbox"
                          value="false"
                        />
                        <span className="a block">Remember me</span>
                      </label>
                    </div>
                    <div className="flex-1 text-right">
                      <a className="inline" href="/forgot-password">
                        Forgotten password
                      </a>
                    </div>
                  </div>

                  <Button variant="primary" type="submit" label={submitArrow} />
                  {invalidPassword ? (
                    <p>
                      The username or password you entered doesn’t match our
                      records. Please try again.
                    </p>
                  ) : null}
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bird-ledge">
          <svg
            width="81"
            height="41"
            viewBox="0 0 81 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_376_4586)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M66.2065 0.71257C60.8053 0.589006 55.7782 6.06699 55.7782 6.06699L24.2026 19.2058C24.2026 19.2058 33.7169 25.3429 44.2697 25.0546C54.8226 24.8075 65.3755 18.1762 65.3755 18.1762C63.6306 19.7414 61.7193 21.1417 59.7251 22.3774C56.4014 24.4367 51.4988 27.2375 45.3084 27.6082C40.4474 27.9789 35.5864 27.2375 31.0579 25.4252C27.9834 24.3956 26.9447 24.8075 26.9447 24.8075C26.9447 24.8075 1.68428 36.793 0.645609 37.2874C-0.39306 37.7816 -0.143779 39.7174 1.14417 39.0584C2.47367 38.4406 16.2257 32.7155 18.8016 31.8094C21.3775 30.9032 25.2413 30.7796 31.9304 33.5804C36.9159 35.4339 42.1508 36.5872 47.4688 37.0402L49.9201 40.5H52.2467C52.2467 40.5 51.6235 39.7175 50.7094 38.7289C49.7954 37.6992 50.9588 36.4224 50.9588 36.4224C50.9588 36.4224 66.248 31.9741 71.5244 26.6197C76.8009 21.2653 75.0144 14.7576 74.8481 11.9568C74.5989 8.90893 80 7.09668 80 7.09668L74.9728 4.79016C72.7292 2.2777 69.5717 0.836133 66.2065 0.71257ZM70.735 7.7145C69.6964 7.75569 68.8239 6.93192 68.8239 5.94342C68.8239 4.87254 69.6964 4.04878 70.735 4.04878C71.7737 4.04878 72.6461 4.91373 72.6461 5.94342C72.6046 6.97311 71.7737 7.75569 70.735 7.7145Z"
                fill="rgb(42, 52, 79)"
              />
            </g>
            <defs>
              <clipPath id="clip0_376_4586">
                <rect
                  width="81"
                  height="39.7895"
                  fill="rgb(42, 52, 79)"
                  transform="translate(0 0.71051)"
                />
              </clipPath>
            </defs>
          </svg>
          <hr />
        </div>
      </main>
    </div>
  );
};
export default LoginPage;
