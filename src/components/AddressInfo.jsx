import React from 'react';

const AddressInfo = ({ data }) => {
    return (
        <div className="h-48 w-80 bg-white rounded-md shadow-md p-5">
            <h2 className="text-lg font-semibold pb-2">Address</h2>
            <p>{data?.suite}</p>
            <p>{data?.street}</p>
            <p>{data?.city}</p>
            <p>{data?.zipcode}</p>
        </div>
    )
}

export default AddressInfo;