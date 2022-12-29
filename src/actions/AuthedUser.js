import * as Constants from '../utils/Constants';

function setAuthedUser(user, id) {
    return {
        type: Constants.SET_AUTHED_USER,
        user,
        id
    }
}

export function removeAuthedUser() {
    return {
        type: Constants.REMOVE_AUTHED_USER,
    }
}

export function handleAuthedUser(user, id) {
    return (dispatch) => {
        dispatch(setAuthedUser(user, id));
    }
}
