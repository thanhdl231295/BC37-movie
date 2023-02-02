import { actionTypeLogin } from "./type";

const { default: produce } = require("immer")

const initailState = {
    profile: null,
}

const reduce = (state = initailState, { type, payload }) => {
    return produce(state, draft => {
        switch (type) {
            case actionTypeLogin.SET_LOGIN:
                draft.profile = payload
            default:
                break;
        }
    })
}
export default reduce;