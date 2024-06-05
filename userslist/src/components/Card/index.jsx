import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const Card = ({user, modalAbierto}) =>{
    
    return(
        <>
            <div class="card mb-3 mx-4" style={{ width: '18rem' }}>
                <img class="card-img-top " src={user.picture.large} alt="user"/>
                <div class="card-body">
                    <h5 class="card-title">{`${user.name.first} ${user.name.last}`}</h5>
                    {
                        modalAbierto &&
                        (
                            <>
                                <div className="modal-content">
                                    <div className="modal-item">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} /> {`${user.location.city}, ${user.location.country}`}
                                    </div>
                                    <div className="modal-item">
                                        <FontAwesomeIcon icon={faEnvelope} /> {user.email}
                                    </div>
                                    <div className="modal-item">
                                        <FontAwesomeIcon icon={faUser}/> {user.login.username}
                                    </div>
                                </div>
                            </> 
                        )
                    }
                </div>
            </div>

        </>
    )
}

export default Card