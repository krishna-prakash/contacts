import React from 'react';

const UserCard = ({ users, onClickAction }) => {
    return (
        <>
            {users?.map(m => (
                <figure className="bg-white h-72 md:h-40 rounded-lg shadow-md flex flex-col justify-center items-center md:flex-row md:justify-start md:content-around cursor-pointer" key={m.id} onClick={() => onClickAction(m.id)}>
                    <img src={`https://randomuser.me/api/portraits/men/${m.id}.jpg`} alt="users" className="w-32 h-32 md:w-24 md:h-24 rounded-full ml-5" />
                    <figcaption className="md:pl-5 flex flex-col justify-center pt-5 md:pt-0">
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