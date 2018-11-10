import {GET_ITEMS, DELETE_ITEM} from '../actions/types';
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
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }
        default:
            return state;
    }
}