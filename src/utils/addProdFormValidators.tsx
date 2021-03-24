export type AddProdFormType = {
  name?: string;
  date?: string;
  category?: string;
}


export default function validate(values: any) {
  console.log("-=-=-=-", values);
  let errors: AddProdFormType = {};
  console.log(values.name && values.name.length);
  console.log(values.name.length);

  if (!values.name) {
    (errors).name = "Product name is required!";
    return errors;
  } else if (values.name.length <= 4) {
    (errors).name = "Product name is too short.";
    return errors;
  }

  if (!values.date) {
    (errors).date = "Date is required!";
    return errors;
  }

  if (!values.category) {
    (errors).category = "Product category is required!";
    return errors;
  }

  console.log("****", errors);
  return null;
}
