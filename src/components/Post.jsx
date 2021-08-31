import React from 'react';

const Post = ({ data }) => {
    return (
        <div className="h-auto w-auto md:w-full bg-white rounded-md shadow-md p-5 overflow-ellipsis">
            <h2 className="text-lg font-semibold">{data.title}</h2>
            <p className="pt-2">{data?.body}</p>
        </div>
    )
}

export default Post;