import {GET_ITEMS} from '../actions/types';
import uuid from 'uuid';
const initialState = {
    items: [
        {
                id: uuid(),
                name: 'Debug code'
            },
            {
                id: uuid(),
                name: 'learn js'
            },
            {
                id: uuid(),
                name: 'learn python'
            },
            {
                id: uuid(),
                name: 'practice react'
            }
    ]
};

export default function(state=initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state
            }  
        default:
            return state;
    }
}