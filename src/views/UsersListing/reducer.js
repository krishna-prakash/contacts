import React from 'react';

export const UsersContext = React.createContext({})

export const initialState = {
    filteredUsers: []
};

const GET_USERS = "GET_USERS";
const SEARCH_USERS = "SEARCH_USERS";
const SORT_USERS = "SORT_USERS";

const _sortBy = (arr, key) => arr.sort((a, b) => a[key] < b[key] ? -1 : 1)  

export function userReducer(state, action) {
    console.log(state);
    switch (action.type) {
        case GET_USERS: {
            return {
                ...state,
                users: _sortBy(action.payload, "name"),
            };
        }
        case SORT_USERS: {
            return {
                ...state,
                users: _sortBy(state.users, action.payload),
            };
        }
        case SEARCH_USERS: {
            return {
                ...state,
                filteredUsers: state.users
                    .filter(f => f.name.toLowerCase().includes(action.payload) || f.email.toLowerCase().includes(action.payload) || f.username.toLowerCase().includes(action.payload))
            }
        }
        default:
            return state;
    }
}

export function getUsersData(dispatch) {
    return fetch("http://jsonplaceholder.typicode.com/users").then(d => d.json()).then(d => dispatch({ type: GET_USERS, payload: d }));

}

export function search(param, dispatch){
    dispatch({ type: SEARCH_USERS, payload: param })
}

export function sortByAction(sortKey, dispatch) {
    dispatch({ type: SORT_USERS, payload: sortKey })
}