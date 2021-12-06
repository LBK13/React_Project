import {createStore} from "redux";

const initialState = {
    products: [],
};



const rootReducer = (state = initialState , action) => {
    if(action.type === "GET_PRODUCT"){
        const newState = {...state};
        newState.products = action.payload;
        return newState;
    }
    return state
};

const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
