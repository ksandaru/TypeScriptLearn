import {useState} from "react";

type AuthUser = {
    name: string
    email: string
}
export const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null);
    //or (but can not logout)
    //const [user, setUser] = useState<AuthUser>({} as AuthUser);
    const handleLogin = () => {
        setUser({
            name: 'kanishka',
            email: 'awsfilmora@gmail.com',
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <h1>Username:{user?.name}</h1>
            <h1>Email:{user?.email} </h1>
            {/*<h1>Username:{user.name}</h1>*/}
            {/*<h1>Email:{user.email} </h1>*/}
        </div>
    )
}