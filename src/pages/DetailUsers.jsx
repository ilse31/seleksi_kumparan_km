import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ListAlbum from '../components/listAlbum';
import Profile from '../components/Profile';
import { Axios } from '../helpers/API';

const DetailUsers = () =>
{
    const { names } = useParams()
    const [ users, setUsers ] = useState( [] )
    const [ thumbnail, setThumbnail ] = useState( [] )
    const [ isLoading, setIsLoading ] = useState( true )
    const getUser = async () =>
    {
        await Axios.get( `/users/${ names }` )
            .then( resp =>
            {
                setUsers( resp.data )
                setIsLoading( false )
            } )
            .catch( err => console.log( err ) )
    }



    const getThumbnail = async () =>
    {
        await Axios.get( `/albums/${ names }/photos` ).then( reesp =>
        {
            setThumbnail( reesp.data )
        } ).catch()
    }

    useEffect( () =>
    {
        getUser()
        getThumbnail()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] );


    return (
        <div className='container my-5'>
            {
                isLoading ? "loading" :
                    <div>
                        <Profile username={ users.name } userEmail={ users.email } userAdress={ `street ${ users.address.street } in city ${ users.address.city }` } userCompany={ users.company.name } />
                        list album
                        {
                            thumbnail.map( ( item, index ) =>
                                <div key={ index }>
                                    <ListAlbum title={ item.title } src={ item.thumbnailUrl } />
                                </div> )
                        }
                    </div>
            }
        </div>
    );
};

export default DetailUsers;
