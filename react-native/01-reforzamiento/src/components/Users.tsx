// import { useEffect, useRef, useState } from "react";
// import { reqResApi } from "../api/reqRes";
import { useUsers } from "../hooks/useUsers";
import { /*ReqResUsers, */User } from "../interfaces/reqRes.interface";

export const Users = () => {

    // const [users, setUsers] = useState<User[]>([]);

    // const pageRef = useRef(1);

    // useEffect(() => {
    //     loadUsers();
    // }, []);

    // const loadUsers = async () => {
    //     const response = await reqResApi.get<ReqResUsers>('/users', {
    //         params: {
    //             page: pageRef.current
    //         }
    //     });

    //     if (response.data.data.length > 0) {
    //         setUsers(response.data.data);
    //         pageRef.current++;       
    //     } else {
    //         alert("No hay más usuarios");
    //     }
    // }
    
    // Custom hook para manejar la lógica
    const {users, nextPage, previousPage} = useUsers();

    // En caso de querer destructurar
    // const renderItem = ({id, first_name, avatar, email}}: User) => {
    const renderItem = (user: User) => {
        return(
            // Se convierte a string porque en react native es requerido como string
            <tr key={user.id.toString()}>
                <td><img className="img img-thumbnail" style={{width: 50, borderRadius: 100}} src={ user.avatar } alt={ user.first_name } /></td>
                <td>{ user.first_name }</td>
                <td>{ user.email }</td>
            </tr>
        );
    }

    return (
        <>
            <h3>Usuarios:</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => renderItem(user))
                    }
                </tbody>
            </table>
            <button className="btn btn-primary me-2" onClick={previousPage}>Anterior</button>
            <button className="btn btn-primary" onClick={nextPage}>Siguiente</button>
        </>
    )
}
