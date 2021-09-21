import { SpinnerState } from "..";
import { SpinnerAction, SpinnerActionTypes } from "../actions/spinner.action";

const spinnerReducer = (state = initialState, action: SpinnerAction): SpinnerState => {
    switch (action.type) {
        case SpinnerActionTypes.PENDING:
            return ({
                pending: true
            });
        case SpinnerActionTypes.COMPLETED:
            return ({
                pending: false
            });
        default:
            return state;
    }
}

const initialState: SpinnerState = {
    pending: false
}

export { spinnerReducer };