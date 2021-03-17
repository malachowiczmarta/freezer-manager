import { addAlert } from '../store/reducers/alerts';
import {AlertType} from "../utils/types";
import store from "../store/store";


export interface IAlertService {
    handleApiError(error?: any, type?: AlertType): void;
    addSuccessAlert(message: string): void;
    addErrorAlert(): void;
    addAlert(message: string, type?: AlertType | null, displayFor?: number | null): void;
}


class AlertService implements IAlertService {
    public handleApiError(error: any = null, type: AlertType = AlertType.WARNING) {
        let message = error ? error : 'Something went wrong';

        this.addAlert(message, type);
    };

    public addSuccessAlert(message: string) {
        this.addAlert(message, AlertType.SUCCESS);
    };

    public addErrorAlert() {
        this.addAlert('Something went wrong, please try again later', AlertType.WARNING);
    };


    public addAlert(
        message: string,
        type: AlertType | undefined = AlertType.INFO,
        displayFor: number | undefined = 5000) {
        const alert = {
            message: message,
            type: type,
            displayFor: displayFor
        };
        store.dispatch(addAlert(alert));
    }
}

export default AlertService;
