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
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerWithEmailAndPassword } from "../../register";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    registerWithEmailAndPassword(email, password);
    navigate("/home");
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
                Register
              </h2>
              <p className="text-white-50 mb-5 text-center">
                Please enter your details to create an account.
              </p>

              <form
                onSubmit={handleRegister}
                className="d-flex flex-column align-items-center"
              >
                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-white"
                  label="Email address"
                  id="Email"
                  type="email"
                  size="lg"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-white"
                  label="Password"
                  id="Password"
                  type="password"
                  size="lg"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </form>
              <p className="small mb-3 pb-lg-2">
                <Link className="text-white-50" to="/login">
                  Already have an account? Login here!
                </Link>
              </p>

              <MDBBtn
                className="mx-2 px-5 border border-light text-light"
                color="white"
                size="lg"
                onClick={handleRegister}
              >
                Register
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Register;
