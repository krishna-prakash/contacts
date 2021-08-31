import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChrom } from '@fortawesome/free-solid-svg-icons'

const UserInfo = ({ data }) => {
    return (
        <div className="h-48 w-80 bg-white rounded-md shadow-md p-5">
            <h2 className="text-lg font-semibold pb-2">ContactInfo</h2>
            <p>Uername: {data.username}</p>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            <a className="flex text-blue-500 font-semibold" href={data.website} target="_blank"> {data.website}</a>
        </div>
    )
}

export default UserInfo;