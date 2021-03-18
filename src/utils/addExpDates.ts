import moment from "moment";
import { CategoryType } from "./types";

const addExpDate = (product: any) => {
  let freezingDate = moment(product.date);
  let expDate;
  if (product.category === CategoryType.FRESH_MEAT) {
    expDate = freezingDate.add(12, "months").format("YYYY-MM-DD");

    return (product = {
      ...product,
      expDate: expDate,
    });
  } else if (product.category === CategoryType.SAUSAGE) {
    expDate = freezingDate.add(2, "months").format("YYYY-MM-DD");

    return (product = {
      ...product,
      expDate: expDate,
    });
  } else if (product.category === CategoryType.SOUPS_AND_STEWS) {
    expDate = freezingDate.add(12, "months").format("YYYY-MM-DD");

    return (product = {
      ...product,
      expDate: expDate,
    });
  } else if (product.category === CategoryType.COOKED_MEAT) {
    expDate = freezingDate.add(3, "months").format("YYYY-MM-DD");

    return (product = {
      ...product,
      expDate: expDate,
    });
  } else if (product.category === CategoryType.FRUITS) {
    expDate = freezingDate.add(6, "months").format("YYYY-MM-DD");

    return (product = {
      ...product,
      expDate: expDate,
    });
  } else if (product.category === CategoryType.VEGETABLES) {
    expDate = freezingDate.add(12, "months").format("YYYY-MM-DD");

    return (product = {
      ...product,
      expDate: expDate,
    });
  }
};

const addExpDates = (products: any) => {
  let productsWithExpDate = products.map((product: any) => {
    let productWithExpDate = addExpDate(product);
    return productWithExpDate;
  });
  return productsWithExpDate;
};

export default addExpDates;
