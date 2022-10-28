import React from "react";
import GLogin from "./GLogin";
import "./login.css";
import {Link} from "react-router-dom";

function Login() {
  return (
    <div className="signup">
        <div className="imgs">
            <img className="img1" src="img/Sign up-cuate (3) 1.png" alt="" />
            <img className="img2" src="img/Sign up-cuate (6) 1 (1).png" alt="" />
        </div>
      <div className="main">
        <h1>Join Kuizlo</h1>
        <h5>The fastest homework helping company.</h5>
        <div className="toggle">
          <body class="white-preview">
            <div class="btn-container">
              <i class="fa fa-sun-o" aria-hidden="true"></i>
              <label class="switch btn-color-mode-switch">
                <input
                  type="checkbox"
                  name="color_mode"
                  id="color_mode"
                  value="1"
                />
                <label
                  for="color_mode"
                  data-on="Educator"
                  data-off="Student"
                  class="btn-color-mode-switch-inner"
                ></label>
              </label>
              <i class="fa fa-moon-o" aria-hidden="true"></i>
            </div>
          </body>
        </div>

        <div className="Lbuttons">
          <Link to="/GLogin"><GLogin/></Link>
          <button>Sign up with Email</button>
          <button className="Applebtn">Sign up with Apple</button>
        </div>
        <h6>Already have an account ? Sign in</h6>
        <p>
          By creating an account you agree to kuizlo's terms of use and honor
          code, and Acknowledge that your personal information will be processed
          in accordance with our private policy.
        </p>
      </div>
    </div>
  );
}

export default Login;
