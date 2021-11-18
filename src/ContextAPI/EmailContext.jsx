import { createContext ,useState } from "react";


export const EmailContext = createContext();

export const EmailContextProvider = (props)=>{

    const [email, setEmail] = useState();
    return<EmailContext.Provider value={[email,setEmail]}>
        {props.children}
    </EmailContext.Provider> 
}