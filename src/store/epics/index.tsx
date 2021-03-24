import { combineEpics } from "redux-observable";
import productStateEpic from "./productStateEpic";

export const rootEpic = combineEpics(
   productStateEpic,
);
