import React from 'react';
import Select from 'react-select';
import { useHistory } from 'react-router-dom';

import UserCard from '../../components/UserCards';
import { UsersContext, search, sortByAction } from './reducer';

const opts = [
    { value: "name", label: "Name" },
    { value: "username", label: "Username" },
    { value: "email", label: "Email" },
]

const Listing = () => {
    const { state, dispatch } = React.useContext(UsersContext);
    const history = useHistory();

    const initSearch = (e) => {
        search(e.target.value, dispatch);
    }

    const initSort = (inp) => {
        sortByAction(inp.value, dispatch)
    }

    const clickAction = (v) => {
        console.log(v);
        history.push(`/users/${v}`);
    }

    return (
        <div className="w-auto mx-auto">
            <section className="md:flex ">
                <h2 className="text-lg font-bold">Users</h2>
                <div>
                <div className="md:flex md:gap-5">
                    <input onChange={(e) => initSearch(e)} type="text" placeholder="Search here" className="rounded-md p-2" />
                    <Select className="w-80 rounded-md" options={opts} onChange={(e) => initSort(e)} />
                </div>
                </div>
            </section>
            <section className="p-5 md:p-20 flex flex-col gap-5">
                {state?.filteredUsers.length === 0 ? <UserCard users={state?.users} onClickAction={(v) => clickAction(v)} /> : <UserCard users={state?.filteredUsers} onClickAction={(v) => clickAction(v)} />}
            </section>
        </div>
    )
}

export default Listing;