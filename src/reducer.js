export const initialState = {
    user: null,
}
export const actionTypes = {
    SET_USER: "SET_USER",
    SET_LOGOUT: "SET_LOGOUT",
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };

        case actionTypes.SET_LOGOUT:
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;
    }
}


export default reducer;
