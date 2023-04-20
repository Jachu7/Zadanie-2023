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
import mongoose from "mongoose";

mongoose
    .connect(
        "mongodb+srv://jasiooy:<password>@cluster0.nuk0clg.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
        }
    )
    .then(() => console.log("Connected to database"))
    .catch((error) => console.error("Error connecting to database:", error));

function Register() {
    return (
        <MDBContainer fluid>
            <MDBRow className="d-flex justify-content-center align-items-center h-100">
                <MDBCol col="12">
                    <MDBCard
                        className="bg-dark text-white my-5 mx-auto"
                        style={{ borderRadius: "1rem", maxWidth: "400px" }}
                    >
                        <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                            <h2 className="fw-bold mb-2 text-uppercase">
                                Register
                            </h2>
                            <p className="text-white-50 mb-5 text-center">
                                Please enter your details to create an account.
                            </p>

                            <MDBInput
                                wrapperClass="mb-4 mx-5 w-100"
                                labelClass="text-white"
                                label="Email address"
                                id="Email"
                                type="email"
                                size="lg"
                                required
                            />
                            <MDBInput
                                wrapperClass="mb-4 mx-5 w-100"
                                labelClass="text-white"
                                label="Password"
                                id="Password"
                                type="password"
                                size="lg"
                                required
                            />
                            <MDBInput
                                wrapperClass="mb-4 mx-5 w-100"
                                labelClass="text-white"
                                label="Confirm password"
                                id="ConfirmPassword"
                                type="password"
                                size="lg"
                                required
                            />
                            <p className="small mb-3 pb-lg-2">
                                <Link className="text-white-50" to="/login">
                                    Already have an account? Login here!
                                </Link>
                            </p>

                            <MDBBtn
                                className="mx-2 px-5 border border-light text-light"
                                color="white"
                                size="lg"
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
