import moment from "moment";
import { CategoryType } from "./types";

const addExpDate = (product: any) => {
  if (product.category === CategoryType.FRESH_MEAT) {
    let newDate = moment(product.date).add(12, "months");

    return (product = {
      ...product,
      expDate: newDate,
    });
  } else if (product.category === CategoryType.SAUSAGE) {
    let newDate = moment(product.date).add(2, "months");

    return (product = {
      ...product,
      expDate: newDate,
    });
  } else if (product.category === CategoryType.SOUPS_AND_STEWS) {
    let newDate = moment(product.date).add(12, "months");

    return (product = {
      ...product,
      expDate: newDate,
    });
  } else if (product.category === CategoryType.COOKED_MEAT) {
    let newDate = moment(product.date).add(3, "months");

    return (product = {
      ...product,
      expDate: newDate,
    });
  } else if (product.category === CategoryType.FRUITS) {
    let newDate = moment(product.date).add(6, "months");

    return (product = {
      ...product,
      expDate: newDate,
    });
  } else if (product.category === CategoryType.VEGETABLES) {
    let newDate = moment(product.date).add(12, "months");

    return (product = {
      ...product,
      expDate: newDate,
    });
  }
};

export default addExpDate;
