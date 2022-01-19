import React from 'react';

const ListAlbum = ( { title, src } ) =>
{
    return (
        <div>
            <ul>
                <li>{ title }</li>
                <img className='img-thumnail' src={ src } alt="" />
            </ul>
        </div>
    );
};

export default ListAlbum;
