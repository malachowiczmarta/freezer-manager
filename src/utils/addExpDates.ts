import moment from "moment";
import { ProductPayload } from "../store/reducers/products";
import { CategoryType } from "./types";

const addExpDate = (product: ProductPayload) => {
  let freezingDate = moment(product.date);
  let expDate;
  if (product.category === CategoryType.FRESH_MEAT) {
    expDate = freezingDate.add(12, "months").format("YYYY-MM-DD");
  } else if (product.category === CategoryType.SAUSAGE) {
    expDate = freezingDate.add(2, "months").format("YYYY-MM-DD");
  } else if (product.category === CategoryType.SOUPS_AND_STEWS) {
    expDate = freezingDate.add(12, "months").format("YYYY-MM-DD");
  } else if (product.category === CategoryType.COOKED_MEAT) {
    expDate = freezingDate.add(3, "months").format("YYYY-MM-DD");
  } else if (product.category === CategoryType.FRUITS) {
    expDate = freezingDate.add(6, "months").format("YYYY-MM-DD");
  } else if (product.category === CategoryType.VEGETABLES) {
    expDate = freezingDate.add(12, "months").format("YYYY-MM-DD");
  }

  return (product = {
    ...product,
    expDate: expDate,
  }) as ProductPayload;
};

const addExpDates = (products: ProductPayload[]) => {
  let productsWithExpDate = products.map((product: ProductPayload) =>
    addExpDate(product)
  );
  return productsWithExpDate;
};

export default addExpDates;
