import React from 'react';

const Profile = ( { username, userEmail, userAdress, userCompany } ) =>
{
    return (
        <div className="card mb-3" style={ { maxWidth: '540px' } }>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="..." className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{ username }</h5>
                        <p className="card-text">{ userEmail }</p>
                        <p className="card-text">{ userAdress }</p>
                        <p className="card-text">{ userCompany }</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
