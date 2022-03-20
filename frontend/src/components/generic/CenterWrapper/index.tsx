import {FC} from "react";
import Grid from "@mui/material/Grid";
import styles from "./style.module.scss";

const CenterWrapper:FC = ({children}) => {
    return (
        <Grid className={styles.wrapper} justifyContent="center" container>
            {children}
        </Grid>
    )
}

export default CenterWrapper