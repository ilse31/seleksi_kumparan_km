import React from 'react';

const PostCard = ( { username, company, body } ) =>
{
    return (
        <div className="card container mb-2">
            <div className="card-body">
                <h5 className="card-title">{ username }</h5>
                <p className='text-muted'>{ company }</p>
                <p className="card-text">{ body }</p>
            </div>
        </div>
    );
};

export default PostCard;
