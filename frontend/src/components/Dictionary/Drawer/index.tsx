import {FC, useState} from "react";
import styles from "./style.module.scss";
import StyledDrawer from "./styledDrawer";
import DictionariesList from "./DictionariesList";
import {Divider, IconButton, Grid} from "@mui/material";

const Drawer:FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true)
    const handleDrawerToggle = () => setIsDrawerOpen(!isDrawerOpen)

    return (
        <StyledDrawer variant="permanent" open={isDrawerOpen} className={styles.drawer}>
            <Grid container justifyContent="right">
                <IconButton onClick={handleDrawerToggle} className={styles.drawerButton}>
                    <span className={`${styles.drawerButtonIcon} ${isDrawerOpen ? styles.active : ""}`} />
                </IconButton>
            </Grid>
            <Divider />
            <DictionariesList defaultOpen={true} isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}/>
        </StyledDrawer>
    )
}

export default Drawer