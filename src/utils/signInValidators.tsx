export default function validate(values: any) {
  console.log("-=-=-=-", values);
  let errors = {};

  if (!values.email) {
    (errors as any).email = "Email address is required!";
    return errors;
  } else if (!/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(values.email)) {
    (errors as any).email = "Please include '@' in email address";
    return errors;
  }

  console.log("****", errors);
  return null;
}
