import {combineEpics, Epic, ofType, StateObservable} from "redux-observable";
import { catchError, switchMap } from "rxjs/operators";
import { of } from "rxjs";
import {addAlert} from "../reducers/alerts";

const deleteProductEpic: Epic = (action$, state$: StateObservable<any>) =>
    action$.pipe(
    ofType('products/DELETE_PRODUCT'),
    switchMap(() => {
        return of(
        addAlert({message: 'Product was removed.'}),
      );
    }),
    catchError((error: any) => {
        return of(
        addAlert({message: "Something went wrong, please try again later"})
        )
    })
    );


const productStateEpic = combineEpics(
  deleteProductEpic
);

export default productStateEpic;
