import { WithAuthentication } from "./WithAuthentication"

function UserProfile({name}){
    return <h1>Welcome {name}</h1>
}



const AuthUserProfile = WithAuthentication(UserProfile)

export default AuthUserProfile
