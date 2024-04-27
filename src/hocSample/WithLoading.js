import { useEffect, useState } from "react"


export function WithLoading(WrappedComponent){
    return function(props){

        let isLoading = true
        // const [isLoading, setisLoading] = useState(true);

        // useEffect(() => {
        //     //API çağrısı
        //     setTimeout(() => {
        //         setisLoading(false)
        //     }, 2000);
        
        // }, [])

        if(isLoading){
            return <h1>loading...</h1>
        }


        return <WrappedComponent {...props} />
        


    }
}