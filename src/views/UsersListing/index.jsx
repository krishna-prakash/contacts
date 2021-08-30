import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { userReducer, initialState, getUsersData, UsersContext } from './reducer';
import Listing from './Listing';

const UsersListing = () => {
    const [state, dispatch] = React.useReducer(userReducer, initialState);
    
    React.useEffect(() => {
        getUsersData(dispatch)
    }, [])

    return (
        <UsersContext.Provider value={{ state, dispatch }}>
            <Switch>
                <Route exact path="/users" component={Listing} />
                <Route exact path="/users/details" ><p>Test</p></Route>
            </Switch>
        </UsersContext.Provider>
    )
}

export default UsersListing;