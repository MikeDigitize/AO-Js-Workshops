import { createStore } from "redux";
import { INCREMENTCOUNT, SETCOUNT } from "../actions/count-actions";

var initialState = {
	count : 0
};

function countReducer(state = initialState, action = {}) {

	switch(action.type) {
        case INCREMENTCOUNT :
            return Object.assign({}, state, {
                count : state.count +1;
            });

        case SETCOUNT :
            return Object.assign({}, state, {
                count : action.value;
            });
        default :
        	return state;
    }

}


function StoreReducer(state = {}, action = {}) {
    return {
        countData : countReducer(state.countdata, action),
        countDuplicateData : countReducer(state.countdata, action)
    }
}

let CountStore = createStore(StoreReducer);
export default CountStore;