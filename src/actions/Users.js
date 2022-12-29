import * as Constants from '../utils/Constants';

export function receiveUsers(users) {
    return {
        type: Constants.RECEIVE_USERS,
        users,
    }
}