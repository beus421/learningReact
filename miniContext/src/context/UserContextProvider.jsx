import React from "react";
import UserContext from "./UserContext.js";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    const [pass, setPass] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;