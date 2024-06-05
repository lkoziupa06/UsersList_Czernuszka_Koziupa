import {useState} from "react"
import Modal from "../../views/Modal";

const Card = ({nombre, imagen}) =>{
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleCardClick = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedUser(null);
    };

    return(
        <>
            <Modal show={showModal} handleClose={handleClose} user={selectedUser} />

            <div class="card mb-3" style={{ width: '18rem' }}>
                <img class="card-img-top " src={imagen} alt="user"/>
                <div class="card-body">
                    <h5 class="card-title">{nombre}</h5>
                    <a class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => handleCardClick()}>Mas Info</a>
                </div>
            </div>

        </>
    )
}

export default Card