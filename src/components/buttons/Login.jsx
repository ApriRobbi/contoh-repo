import React from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Too short!').required('Required')
});

const Login = () => {
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-outline-primary ms-auto"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
        <span className="fa fa-sign-in me-1"></span>
        Login
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Login
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Formik
                initialValues={{
                  email: '',
                  password: ''
                }}
                validationSchema={LoginSchema}
                onSubmit={values => {
                  // same shape as initial values
                  window.location.reload();
                  console.log("tested");
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="mb-3">
                      <label className="form-label">
                        Email
                      </label>
                      <Field name="email" className="form-control" placeholder="Input email"/>

                      {errors.email && touched.email ? (

                        <div>{errors.email}</div>

                      ) : null}
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Password
                      </label>
                      <Field type="password" name="password" className="form-control" placeholder="Input password"/>

                      {errors.password && touched.password ? (

                        <div>{errors.password}</div>

                      ) : null}
                    </div>
                    <button type="submit" className="btn btn-outline-primary w-100">Submit</button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
