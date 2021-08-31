import React from 'react';

const CompanyInfo = ({ data }) => {
    return (
        <div className="h-48 w-80 bg-white rounded-md shadow-md p-5">
            <h2 className="text-lg font-semibold pb-2">Company</h2>
            <p>{data?.name}</p>
            <p>{data?.bs}</p>
            <p>{data?.catchPhrase}</p>
        </div>
    )
}

export default CompanyInfo;