import { Action } from "redux";

export enum SpinnerActionTypes {
    PENDING = 'SPINNER_PENDING',
    COMPLETED = 'SPINNER_COMPLETED'
}

export interface SpinnerAction extends Action<SpinnerActionTypes> {
}

export const spinnerPending = (): SpinnerAction => {
    return ({
        type: SpinnerActionTypes.PENDING
    });
}

export const spinnerComplete = (): SpinnerAction => {
    return ({
        type: SpinnerActionTypes.COMPLETED
    });
}