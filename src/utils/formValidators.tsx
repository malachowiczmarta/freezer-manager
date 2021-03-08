export default function validate(values: any) {
  console.log("-=-=-=-", values);
  let errors = {};
  console.log(values.name && values.name.length);
  console.log(values.name.length);

  if (!values.name) {
    (errors as any).name = "Product name is required!";
    return errors;
  } else if (values.name.length <= 4) {
    (errors as any).name = "Product name is too short.";
    return errors;
  }

  if (!values.date) {
    (errors as any).date = "Date is required!";
    return errors;
  }

  if (!values.category) {
    (errors as any).category = "Product category is required!";
    return errors;
  }

  console.log("****", errors);
  return null;
}
