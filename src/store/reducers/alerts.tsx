import { AlertType } from "../../utils/types";
import { v4 as uuidv4 } from "uuid";

const ADD_ALERT = "alert/ADD_ALERT";
const REMOVE_ALERT = "alert/REMOVE_ALERT";

export type IAlertState = {
  alerts: AlertObject[];
};

type AlertObject = {
  message: string;
  displayFor?: number;
  id?: string;
  type?: AlertType;
};

const INITIAL_STATE = {
  alerts: [],
};

export const addAlert = (data: IAlertState) => ({
  type: ADD_ALERT,
  payload: data,
});

export const removeAlert = (id: string) => ({
  type: REMOVE_ALERT,
  payload: id,
});

function reducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case ADD_ALERT:
      const alerts = [...state.alerts];
      if (!action.payload.alert.id) {
        action.payload.alert.id = uuidv4();
      }
      if (!action.payload.alert.displayFor) {
        action.payload.alert.displayFor = 5000;
      }
      if (!action.payload.alert.type) {
        action.payload.alert.displayFor = AlertType.INFO;
      }
      return {
        ...state,
        alerts: [...alerts, action.payload.alert],
      };
    case REMOVE_ALERT:
      return {
        ...state,
        alerts: state.alerts.filter((alert: any) => {
          return alert.id !== action.payload.id;
        }),
      };
    default:
      return state;
  }
}

export default reducer;
