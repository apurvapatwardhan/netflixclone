const user = {
    email:"",
    password:""
}

const loginReducer = (state=user, action) => {
    switch(action.type) {
        case "SET_LOGIN_CRED":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default loginReducer;