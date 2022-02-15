import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResUsers, User } from '../interfaces/reqRes.interface';

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);

    const pageRef = useRef(1);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const response = await reqResApi.get<ReqResUsers>('/users', {
            params: {
                page: pageRef.current
            }
        });

        if (response.data.data.length > 0 && pageRef.current > 0) {
            setUsers(response.data.data);
        } else {
            pageRef.current = pageRef.current <= 0 ? 1 : pageRef.current - 1;
            alert("No hay más usuarios");
        }
    }

    const nextPage = () => {
        pageRef.current++;       
        loadUsers();
    }

    const previousPage = () => {
        pageRef.current--;       
        loadUsers();
    }

    return {
        users,
        nextPage,
        previousPage
    }

}
