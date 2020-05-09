import React from 'react';
import FormHandler from '../formHandler';


import {
  requiredValidation,
  minimumLengthValidation,
  maxLengthValidation,
  EmailRegexValidation
} from '../validators';

const SignUpForm = () => {
  const FIELDS = {
    email: {
      value: '',
      validations: [requiredValidation, EmailRegexValidation],
    },
    name: {
      value: '',
      validations: [
        requiredValidation,
        minimumLengthValidation(5),
        maxLengthValidation(15),
      ],
    },
    password: {
      value: '',
      validations: [requiredValidation, minimumLengthValidation(8)],
    },
    confirmPassword: {
      value: '',
      validations: [requiredValidation],
    },
  };

  const {
    fields,
    isSubmitting,
    isSubmittable,
    handleChange,
    handleBlur,
    handleSubmit,
  } = FormHandler(FIELDS);

  

  return (
    <>
      <div className=" container">
        <div className="row justify-content-center">
          <form
            noValidate
            onSubmit={handleSubmit}
            className="col-sm-6 col-md-4 col-lg-4"
          >
            <div className="form-group  ">
              <label for="name">Username</label>
              <input
                aria-describedby="nameHelp"
                autoComplete="off"
                className="form-control"
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={fields.name.value}
                placeholder="Enter Username"
              />
              <small id="nameHelp" className="form-text text-muted" />
              <small id="nameErrors" className="form-text text-danger">
                {fields.name.errors &&
                  fields.name.errors.map((error) => (
                    <span>
                      {error}
                      <br />
                    </span>
                  ))}
              </small>

              <label for="email" className="">
                Email address
              </label>
              <input
                aria-describedby="emailHelp"
                autoComplete="off"
                className="form-control"
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={fields.email.value}
                placeholder="Enter Email"
              />
              <small id="emailHelp" className="form-text text-muted" />
              <small id="emailErrors" className="form-text text-danger">
                {fields.email.errors &&
                  fields.email.errors.map((error) => (
                    <span>
                      {error}
                      <br />
                    </span>
                  ))}
              </small>
              <label for="password" className="">
                Password
              </label>
              <input
                aria-describedby="passwordHelp"
                autoComplete="off"
                className="form-control"
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={fields.password.value}
                placeholder="Enter Password"
              />
              <small id="passwordHelp" className="form-text text-muted" />
              <small id="passwordErrors" className="form-text text-danger">
                {fields.password.errors &&
                  fields.password.errors.map((error) => (
                    <span>
                      {error}
                      <br />
                    </span>
                  ))}
              </small>
              <label for="confirmPassword" className="">
                Confirm Password
              </label>
              <input
                aria-describedby="confirmPasswordHelp"
                autoComplete="off"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={fields.confirmPassword.value}
                placeholder="Confirm Password"
              />
              <small id="passwordHelp" className="form-text text-muted" />
              <small id="passwordErrors" className="form-text text-danger">
                {fields.confirmPassword.errors &&
                  fields.confirmPassword.errors.map((error) => (
                    <span>
                      {error}
                      <br />
                    </span>
                  ))}
              </small>
            </div>
            <button
              className="btn btn-primary"
              type="submit"
              disabled={isSubmitting || !isSubmittable}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
