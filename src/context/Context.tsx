import { createContext, useState } from "react";

interface Context{
    filename: any
    setfilename(item:any):void
}

export const Context = createContext<Context>({
    filename:'',
    setfilename:()=>{}
})

export const CartProvider = ({children}:any) =>{
    
    const [filename, setfilename] = useState('')

    const values: Context = {
        filename,
        setfilename,
    }

    return(
        <Context.Provider value={values}>
            {children}
        </Context.Provider>

    );

};
