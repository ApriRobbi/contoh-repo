import React from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  username: Yup.string().min(8, 'Too short!').max(50, 'Too long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Too short!').required('Required')
});

const Signup = () => {
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-outline-primary ms-2"
        data-bs-toggle="modal"
        data-bs-target="#signupModal"
      >
        <span className="fa fa-user-plus me-1"></span>
        Register
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="signupModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Register
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
                  username: '',
                  email: '',
                  password: ''
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                  // same shape as initial values
                  window.location.reload();
                  console.log(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="mb-3">
                      <label className="form-label">
                        Username
                      </label>
                      <Field name="username" className="form-control" placeholder="Input username"/>
                      {errors.username && touched.username ? (
                        <div>{errors.username}</div>
                      ) : null}
                    </div>
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
                    <button type="submit" className="btn btn-outline-primary w-100">Register</button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
