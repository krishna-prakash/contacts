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
        <div className="w-auto  p-5 flex flex-col gap-5 md:p-20">
            <section className="md:flex md:gap-5 space-y-3 md:space-y-0">
                <h2 className="text-2xl font-extrabold ml-1 align-middle">Users</h2>
                <div className="md:w-full flex flex-col gap-5 md:flex-row md:justify-end md:gap-5">
                    <div className="flex flex-col">
                        <label className="text-lg ml-2">Search</label>
                        <input onChange={(e) => initSearch(e)} type="text" placeholder="Search here" className="w-full md:w-64 rounded-md p-2" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg ml-2">Sort</label>
                        <Select className="w-full md:w-64 rounded-md" options={opts} defaultValue={opts[0]} onChange={(e) => initSort(e)} />
                    </div>
                </div>
            </section>
            <section className="flex flex-col gap-5">
                {state?.filteredUsers.length === 0 ? <UserCard users={state?.users} onClickAction={(v) => clickAction(v)} /> : <UserCard users={state?.filteredUsers} onClickAction={(v) => clickAction(v)} />}
            </section>
        </div>
    )
}

export default Listing;