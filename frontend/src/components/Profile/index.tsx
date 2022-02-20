import {FC} from "react";

interface IProfile {
    userName: string
}

const Profile:FC<IProfile> = ({userName}) => {
    return (
        <div>
            Hello, {userName}
        </div>
    )
}

export default Profile