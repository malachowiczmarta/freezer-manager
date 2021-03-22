import React, { useState } from "react";
// import fakeAuth from "fake-auth";
import FormField from "../../formField/FormField";
import styles from "./SignIn.module.scss";

const initialFormState = {
  email: "",
  password: "",
};

function SignIn() {
  const [formValues, setFormValues] = useState(initialFormState);
  const [error, setError] = useState(initialFormState);

  const updateField = (e: any) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    // const [email, pass] = e.target.children;
    e.preventDefault();
    console.log(formValues);

    // fakeAuth
    //   .signin(email.value, pass.value)
    //   .then((response) => {
    //     props.initAuthentication({
    //       isAuthenticated: true,
    //       email: response.user.email,
    //     });
    //     props.setModal();
    //   })
    //   .catch((error) => {
    //     setError(error);
    //     let errorMessage =
    //       error && error.message
    //         ? error.message
    //         : "Something went wrong. Please try again later";
    //     props.setAuthError({ error: errorMessage });
    //   });
  };

  return (
    <div className={styles.wrapper}>
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
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
