import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Komentars from '../components/Komentars';
import PostCard from '../components/PostCard'
import { Axios } from '../helpers/API';
import { dataUser } from '../store';
const DetailPost = () =>
{
    const { id } = useParams()
    const { user } = useRecoilValue( dataUser )
    let userData = user.data
    const [ post, setPost ] = useState( [] )
    const [ komentars, setKomentar ] = useState( [] )
    const Post = async () =>
    {
        await Axios.get( `posts/${ id }` )
            .then( response =>
            {
                setPost( response.data )
            } ).catch( err => console.log( err ) )
    }

    const Komentar = async () =>
    {
        await Axios.get( `/posts/${ id }/comments` ).then( response =>
        {
            setKomentar( response.data )
        } ).catch( err => console.log( err ) )
    }

    useEffect( () =>
    {
        Post()
        Komentar()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] );

    const Postdata = userData.filter( ( item ) => item.id === post.userId ).map( users => ( { ...users, ...post } ) )

    return (
        <div className='container my-3'>
            {
                Postdata.map( ( item, index ) =>
                    <div key={ index }>
                        <PostCard names={ item.userId } username={ item.name } company={ Postdata[ 0 ].company.name } title={ Postdata[ 0 ].title } body={ Postdata[ 0 ].body } />
                    </div> )
            }
            Comment
            {
                komentars.map( ( item, index ) =>
                    <div key={ index }>
                        <Komentars commentbody={ item.body } name={ item.name } email={ item.email } />
                    </div> )
            }
        </div>
    );
};

export default DetailPost;
