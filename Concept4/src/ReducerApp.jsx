export const initialState = {count: 0, theme: "light"};
export const reducer = (state, action)=> {
switch(action.type) {
    case "incriment":
        return {...state, count: state.count + 1};
    case "decrement":
        return {...state, count: state.count - 1};
    case "reset":
        return {...state, count: state.count === 0};
    case "toggleTheme":
        return {...state, theme: state.theme === "light" ? "dark" : "light"};  
    default:
        return state              
}
}
