import React from 'react';

const UserCard = ({ users }) => {
    return (
        <>
            {users?.map(m => (
                <figure className="bg-white h-40 rounded-lg shadow-md pt-7 flex content-around cursor-pointer" key={m.id}>
                    <img src={`https://randomuser.me/api/portraits/men/${m.id}.jpg`} alt="users" className="w-24 h-24 rounded-full ml-5" />
                    <figcaption className="pl-5">
                        <p className="text-gray-700 font-semibold mb-2 text-xl">{m.name}</p>
                        <p className="text-gray-600">{m.username}</p>
                        <a href={`mailto:${m.email}`} className="text-gray-600 hover:text-blue-500">{m.email}</a>
                    </figcaption>
                </figure>
            ))}
        </>
    )
};

export default UserCard;