import React from 'react';

const Komentars = ( { commentbody, name, email } ) =>
{
    return (
        <div className='border shadow p-3 m-3'>
            <h5 className='text-muted'>{ name }</h5>
            <p className='text-black'>{ commentbody }</p>
            <figcaption className="blockquote-footer">
                { email }
            </figcaption>
        </div >
    );
};

export default Komentars;
