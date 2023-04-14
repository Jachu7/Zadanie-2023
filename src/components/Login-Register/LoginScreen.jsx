import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";

// import { MongoClient, ServerApiVersion } from "mongodb";
// const uri =
//   "mongodb+srv://jasiooy:K3DjzAY47NkJcqrQ@cluster0.nuk0clg.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

function LoginScreen() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const formTitle = isSignUp ? "Sign Up" : "Login";
  const formButton = isSignUp ? "Sign Up" : "Login";
  const formLinkText = isSignUp
    ? "Already have an account? Log In"
    : "Don't have an account? Sign Up";

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-dark text-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "400px" }}
          >
            <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">{formTitle}</h2>
              <p className="text-white-50 mb-5">
                {isSignUp
                  ? "Please create an account!"
                  : "Please enter your login and password!"}
              </p>

              {isSignUp && (
                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-white"
                  label="Full Name"
                  id="formControlLgFullName"
                  type="text"
                  size="lg"
                />
              )}

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Email address"
                id="formControlLgEmail"
                type="email"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Password"
                id="formControlLgPassword"
                type="password"
                size="lg"
              />

              {isSignUp && (
                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-white"
                  label="Confirm Password"
                  id="formControlLgConfirmPassword"
                  type="password"
                  size="lg"
                />
              )}

              {!isSignUp && (
                <p className="small mb-3 pb-lg-2">
                  <a className="text-white-50" href="#!">
                    Forgot password?
                  </a>
                </p>
              )}

              <MDBBtn outline className="mx-2 px-5" color="white" size="lg">
                {formButton}
              </MDBBtn>

              <div>
                <p className="mb-0">
                  {formLinkText}{" "}
                  <a
                    href="#!"
                    className="text-white-50 fw-bold"
                    onClick={toggleSignUp}
                  >
                    {isSignUp ? "Log In" : "Sign Up"}
                  </a>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default LoginScreen;
