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
            <div class="container-narrow my-5 mx-5 pt-4 px-3 px-lg-4">
                <div class="text-center mb-5">
                    <h1>Usuarios</h1>
                </div>
                <div className="row justify-content-center">
                    {users.map((user, index) => (
                        <div className="col-md-2" key={index}>
                            <Card 
                                nombre={`${user.name.first} ${user.name.last}`} 
                                link="" 
                                imagen={user.picture.large} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default UsersList