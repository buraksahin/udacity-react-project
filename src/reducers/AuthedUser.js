import * as Constants from '../utils/Constants';

export default function authedUser(state = null, action) {
    switch (action.type) {
        case Constants.SET_AUTHED_USER:
            let name = null
            const author = action.user
            const id = action.id
            if (action.user !== null && action.user !== undefined) {
                return name = {author, id}
            }
            return name
        case Constants.REMOVE_AUTHED_USER:
            return null
        default:
            return state
    }
}