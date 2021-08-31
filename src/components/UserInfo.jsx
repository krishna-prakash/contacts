import React from 'react';

const UserInfo = ({ data }) => {
    return (
        <div className="h-48 w-80 bg-white rounded-md shadow-md p-5">
            <h2 className="text-lg font-semibold pb-2">ContactInfo</h2>
            <p>Uername: {data.username}</p>
            <p className="flex">Email: <a className="flex text-blue-500 font-semibold" href={`mailto:${data.email}`}>{data.email}</a></p>
            <p className="flex">Phone: <a className="flex text-blue-500 font-semibold" href={data?.phone}>{data.phone}</a></p>
            <p className="flex">Website: <a className="flex text-blue-500 font-semibold" href={data.website} rel="noreferrer" target="_blank"> {data.website}</a></p>
        </div>
    )
}

export default UserInfo;