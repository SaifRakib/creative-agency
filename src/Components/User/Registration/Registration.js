import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div>
      <div className="registration-form">
        <div className="container">
          <h2 className="text-center">Registration</h2>
          <div className="col-md-6 offset-3">
            <div className="registration-field">
              <form>
                <div class="form-group">
                  <label for="name">Email address</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder="Enter Name"
                  />
                </div>
                <div class="form-group">
                  <label for="email">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div class="form-group">
                  <label for="password2">Re-Enter Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password2"
                    placeholder="Re-Enter Password"
                  />
                </div>

                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
                <hr />
                <h2>
                  Have you account already? <Link to="/login">Login here</Link>
                </h2>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
