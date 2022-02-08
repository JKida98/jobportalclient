import * as types from '../../constants';

interface ShowSpinnerAction {
    type: typeof types.SHOW_SPINNER;
}

interface HideSpinnerAction {
    type: typeof types.HIDE_SPINNER;
}

export type LoadingActions = ShowSpinnerAction | HideSpinnerAction;
