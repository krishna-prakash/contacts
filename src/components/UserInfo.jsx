import React from 'react';

const UserInfo = ({ data }) => {
    return (
        <div className="h-48 w-80 bg-white rounded-md shadow-md p-5">
            <h2 className="text-lg font-semibold">ContactInfo</h2>
            <p>Uername: {data.username}</p>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            <p className="flex"><img className="w-4 h-4 mt-1 pr-2" src="https://img.icons8.com/pastel-glyph/64/000000/website--v2.png"/> {data.website}</p>
        </div>
    )
}

export default UserInfo;