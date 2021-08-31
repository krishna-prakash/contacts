import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { userReducer, initialState, getUsersData, UsersContext } from './reducer';
import Listing from './Listing';
import Details from './Details';

const UsersListing = () => {

    const [state, dispatch] = React.useReducer(userReducer, initialState);

    React.useEffect(() => {
        getUsersData(dispatch)
    }, [])

    return (
        <UsersContext.Provider value={{ state, dispatch }}>
            <div className="">
            <Switch>
                <Route exact path="/users" component={Listing} />
                <Route exact path="/users/:userId" component={Details} ></Route>
            </Switch>
            </div>
        </UsersContext.Provider>
    )
}

export default UsersListing;