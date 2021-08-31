import React from 'react';
import { useParams, Link } from 'react-router-dom';

import { UsersContext, getUserById } from './reducer';
import UserInfo from '../../components/UserInfo';
import AddressInfo from '../../components/AddressInfo';
import CompanyInfo from '../../components/CompanyInfo';

const Details = () => {
    const { state, dispatch } = React.useContext(UsersContext);
    const { userId } = useParams();

    const { userDetail } = state;

    React.useEffect(() => {
        getUserById(userId, dispatch)
    }, [state?.users, userId])

    if (!state?.userDetail) {
        return "Loading";
    }
    return (
        <>
            <div className="flex justify-center pt-20">
                <Link to="/users"><p className="text-xl fond-extrabold pr-3 text-blue-500">Users</p></Link>
                <span>|</span>
                <p className="text-md font-semibold pl-3" >{userDetail?.name}</p>
            </div>
            <div className="flex flex-wrap justify-center mt-20 gap-5 h-screen">

                <UserInfo data={userDetail} />
                <AddressInfo data={userDetail?.address} />
                <CompanyInfo data={userDetail?.company} />
            </div>
        </>
    )
}

export default Details;