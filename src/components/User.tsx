import { useCallback, useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import APIService from "../utils/APIService";


const User = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState<User|null>(null);
    
    const fetchData =  useCallback(async () => {          
        const user = await APIService.fetchUsers();
        setUser(user);
        setIsLoaded(true);
    },[]);

    useEffect( () => {
        try {
            fetchData();
        } catch(error:any) {
            setIsLoaded(true);
            setError(error);
        }
    }, [fetchData]);

    
    if (error) {
        return <div>Error: {'Error fetching data !'}</div>;
    }
    if (!isLoaded) {
        return <ScaleLoader />
    }  
    
    if (user) {
        return (
            <div className="user">
                <h1>{user.name}</h1>
                <div>
                    Email: {user.email}
                </div>
                <div>
                    Phone: {user.phone}
                </div>
                <div>
                    Website: {user.website}
                </div>
            </div>
        );
    } else {
        return <div>No users found!</div>
    }
}
export default User;