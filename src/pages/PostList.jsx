import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import PostCard from '../components/PostCard';
import { Axios } from '../helpers/API';
import { dataUser } from '../store';

const PostList = () =>
{
    const [ post, setPost ] = useState( [] )
    const { user } = useRecoilValue( dataUser )
    let userData = user.data

    const Post = async () =>
    {
        Axios.get( '/posts' )
            .then( response =>
            {
                setPost( response.data )
            } )
            .catch( e => console.log( e.message ) )
    }
    useEffect( () =>
    {
        Post()
    }, [] );

    const dataPost = post.map( ( posts ) =>
    {
        let users = userData.find( ( userers ) => userers.id === posts.userId );
        return { ...posts, users }
    } )

    return (
        <div className='container my-3'>
            {
                dataPost.map( ( item, index ) =>
                    <NavLink to={ `/detailpost/${ item.id }` } key={ index }>
                        <PostCard username={ item.users.name } company={ item.users.company.name } body={ item.body } />
                    </NavLink> )
            }
        </div>
    );
};

export default PostList;
