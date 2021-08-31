import React from 'react';
import { useParams, Link } from 'react-router-dom';

import { UsersContext, getUserById, getPostByUser } from './reducer';
import UserInfo from '../../components/UserInfo';
import AddressInfo from '../../components/AddressInfo';
import CompanyInfo from '../../components/CompanyInfo';
import Post from '../../components/Post';

const Details = () => {
    const { state, dispatch } = React.useContext(UsersContext);
    const { userId } = useParams();

    const { userDetail } = state;

    /*disable-react-hooks/exhaustive-deps*/
    React.useEffect(() => {
        getUserById(userId, dispatch)
        getPostByUser(userId, dispatch)
    }, [state?.users, userId])

    if (!state?.userDetail) {
        return "Loading";
    }

    return (
        <div className="w-full p-5 lg:p-20 md:p-10">
            <div className="flex items-start">
                <Link to="/users"><p className="text-2xl fond-semibold pr-3 text-blue-500">Users</p></Link>
                <span className="pt-1">|</span>
                <p className="text-xl font-semibold ml-3 pt-1 border-b border-black" >{userDetail?.name}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5">
                <UserInfo data={userDetail} />
                <AddressInfo data={userDetail?.address} />
                <CompanyInfo data={userDetail?.company} />
            </div>
            <h2 className="pt-10 pb-5 text-xl font-semibold">Post By <span className="border-b border-black">{userDetail?.name}</span></h2>
            <div className="grid grid-cols-1 gap-5 mt-5">
                
                {state[userId].map(m => (<Post key={m.id} data={m} />))}
            </div>

        </div>
    )
}

export default Details;