import {styled} from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";

const StyledDrawer = styled(MuiDrawer)( ({ open }) => ({
    ...(open ? {
        '& .MuiDrawer-paper': {
            width: 230,
            transition: 'width 0.3s',
            // TODO future media query
            // ['@media (max-width:780px)']: {
            //
            // }
        },
    } : {
        '& .MuiDrawer-paper': {
            width: 56,
            transition: 'width 0.3s'
        },
    }),
}) );

export default StyledDrawer