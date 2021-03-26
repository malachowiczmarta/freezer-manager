import { combineEpics, Epic, ofType, StateObservable } from "redux-observable";
import { catchError, switchMap } from "rxjs/operators";
import { of } from "rxjs";
import { addAlert } from "../reducers/alerts";
import { AlertType } from "../../utils/types";

const deleteProductEpic: Epic = (action$, state$: StateObservable<any>) =>
  action$.pipe(
    ofType("products/DELETE_PRODUCT"),
    switchMap(() => {
      return of(addAlert({ message: "Product was removed." }));
    }),
    catchError((error: any) => {
      return of(
        addAlert({
          message: "Something went wrong, please try again later",
          type: AlertType.WARNING,
        })
      );
    })
  );

const addProductEpic: Epic = (action$, state$: StateObservable<any>) =>
  action$.pipe(
    ofType("products/ADD_PRODUCT"),
    switchMap(() => {
      return of(
        addAlert({
          message: "Success, product added to the list.",
          type: AlertType.SUCCESS,
        })
      );
    }),
    catchError((error: any) => {
      return of(
        addAlert({
          message: "Something went wrong, please try again later",
          type: AlertType.WARNING,
        })
      );
    })
  );

const productStateEpic = combineEpics(deleteProductEpic, addProductEpic);

export default productStateEpic;
