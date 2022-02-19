import {FC} from "react";

interface Profile {
    userName: string
}

const Profile:FC<Profile> = ({userName}) => {
    return (
        <div>
            Hello, {userName}
        </div>
    )
}

export default Profile