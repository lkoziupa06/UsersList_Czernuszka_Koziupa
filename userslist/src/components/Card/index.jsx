const Card = ({nombre, link, imagen}) =>{
    return(
        <>
            <div class="card" width={18}>
                <img class="card-img-top" src={imagen} alt="user"/>
                <div class="card-body">
                    <h5 class="card-title">{nombre}</h5>
                    <a href={link} class="btn btn-primary">Mas Info</a>
                </div>
            </div>
        </>
    )
}

export default Card