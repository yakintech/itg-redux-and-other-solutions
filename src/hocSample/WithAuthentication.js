import LoginForm from "./LoginForm"



export function WithAuthentication(WrappedComponent){

    return function(props){

        const isLoggedIn = false // bu değerin dinamik olarak bir yerden geldiğini varsayalım.

        if(!isLoggedIn){
            return <LoginForm/>
        }


        //eğer giriş yapılmışsa sarmallanan bileşeni orjinal prop ile birlikte render ediyorum
        return <WrappedComponent {...props} />

    }

}




