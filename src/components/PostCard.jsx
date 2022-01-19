import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const PostCard = ( { username, company, body, title } ) =>
{
    return (
        <div className="card container mb-2">
            <div className="card-body">
                <h5 className="card-title"><NavLink to={ '/profile' }>{ username }</NavLink></h5>
                <p className='text-muted'>{ company }</p>
                <h3>{ title }</h3>
                <p className="card-text">{ body }</p>
            </div>
        </div >
    );
};

export default PostCard;
