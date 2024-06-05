import { useEffect, useState } from "react"
import Card from "../../components/Card"
 
const UsersList = () => {
    const urlApi = "https://randomuser.me/api/?results=5"
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(urlApi)
        .then(response => response.json())
        .then(data => setUsers(data.results))
        .then(data => console.log())
        .catch(error => console.log('Hubo un error ' + error))
    }, [])

    return(
        <>
            <div className="container-narrow mx-5">
            <h1>Usuarios</h1>
            {users.map((user, index) => (
                <Card 
                    key={index} 
                    nombre={`${user.name.first} ${user.name.last}`} 
                    link="" 
                    imagen={user.picture.thumbnail} 
                />
            ))}
        </div>
        </>
    )
}

export default UsersList