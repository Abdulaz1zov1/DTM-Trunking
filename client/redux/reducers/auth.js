const name = 'auth'

const types = {
    AUTH: `AUTH_${name}`
}
const initialState = {
    access: false
}
export default (state = initialState, action) => {
    switch (action.type) {
        case types.AUTH: {
            return {
                ...state, access: action.payload
            }
        }
        default:
            return {
                state
            }
    }
}
export const authentication = (message) => dispatch => {
    dispatch({type: types.AUTH, payload:message});
}