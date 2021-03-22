import React, { useState } from "react";
import { connect } from "react-redux";
// import fakeAuth from "fake-auth";
import authService from "../../../service/authService";
import { initAuthentication, setAuthError } from "../../../store/reducers/auth";
import {
  authLoadingSelector,
  authErrorSelector,
} from "../../../store/selectors/authSelectors";
import validate from "../../../utils/signInValidators";

import Button from "../../button/Button";
import FormField from "../../formField/FormField";
import styles from "./SignIn.module.scss";

const initialFormState = {
  email: "",
  password: "",
};

const initialErrorState = {
  email: "",
  password: "",
  message: "",
};

function SignIn(props: any) {
  const [formValues, setFormValues] = useState(initialFormState);
  const [error, setError] = useState(initialErrorState);

  const updateField = (e: any) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formValues);
    let formErrors: any = validate(formValues);
    if (formErrors) {
        setError({
        ...formErrors,
        formErrors,
      });
      return;
    }

    authService
      .signIn(formValues.email, formValues.password)
      .then((response) => {
        props.initAuthentication({
          isAuthenticated: true,
          email: response.user.email,
        });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        let errorMessage =
          error && error.message
            ? error.message
            : "Something went wrong. Please try again later";
        props.setAuthError({ error: errorMessage });
      });
  };

  return (
    <div className={styles.wrapper}>
      {error && <p>{error.message}</p>}

      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
        className={styles.formContainer}
      >
        <FormField
          id="signIn-email"
          name="email"
          placeholder="email"
          type="email"
          value={formValues.email}
          onChange={updateField}
          error={error.email}
        />
        <FormField
          id="signIn-password"
          name="password"
          placeholder="password"
          type="password"
          value={formValues.password}
          onChange={updateField}
          error={error.password}
        />
        <Button type="submit" label="Sign in" variant="signIn" />
      </form>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  isLoading: authLoadingSelector(state),
  error: authErrorSelector(state),
});

const mapDispatchToProps = {
  initAuthentication,
  setAuthError,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
