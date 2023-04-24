import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { loginWithEmailAndPassword } from "../../login";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginWithEmailAndPassword(email, password);
  };

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-dark text-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "400px" }}
          >
            <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2
                className="fw-bold mb-2 text-uppercase"
                style={{ letterSpacing: "2px" }}
              >
                Login
              </h2>
              <p className="text-white-50 mb-5">
                Please enter your email and password!
              </p>
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Email address"
                id="Email"
                type="email"
                size="lg"
                onChange={handleEmailChange}
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Password"
                id="Password"
                type="password"
                size="lg"
                onChange={handlePasswordChange}
              />
              <p className="small mb-3 pb-lg-2">
                <Link className="text-white-50" to="/register">
                  Don't have an account? Register here!
                </Link>
              </p>
              <p className="small mb-3 pb-lg-2 text-center">
                <a
                  className="text-white-50"
                  href="https://youtu.be/dQw4w9WgXcQ"
                  target="_blank"
                >
                  Forgot password? Create new account then🤡 <br /> I didn't
                  create this feature...
                </a>
              </p>{" "}
              <MDBBtn
                className="mx-2 px-5 border border-light text-light"
                color="white"
                onClick={handleSubmit}
              >
                Login
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
