
import React, { createContext , useState } from "react";


export const AddedProductContext = createContext();

export const AddedProductContextProvider = ({children})=>{

     const [addedProduct, setAddedProduct] = useState([]);

    return <AddedProductContext.Provider value={[addedProduct, setAddedProduct]}>
        {children}
    </AddedProductContext.Provider>

}