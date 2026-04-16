
import { createContext, useState } from "react";

export const typeContext = createContext(null)

export default function TypeContextProvider({ children }) {

    const [type, setType] = useState(null)

    return (
        <typeContext.Provider value={{ type, setType }}>
            {children}
        </typeContext.Provider>
    )

}




/*

<TypeContextProvider>

    <p> blablalgla</p>
    <article> 
        <h1>overskrift</h1>
    </article>

</TypeContextProvider>



*/