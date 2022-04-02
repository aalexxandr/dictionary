import {useState, FC} from "react";
import styles from "./style.module.scss";
import {ExpandMore} from "@mui/icons-material";
import SchoolIcon from "@mui/icons-material/School";
import ListItemText from "@mui/material/ListItemText";
import {DictionariesListProps} from "../../../../types/DictionariesList";
import {Collapse, List, ListItemButton, ListItemIcon} from "@mui/material";

const DictionariesList:FC<DictionariesListProps> = ({defaultOpen = false, isDrawerOpen, setIsDrawerOpen}) => {
    const [isListOpen, setIsListOpen] = useState(defaultOpen);

    const handleListItemButtonClick = () => {
        setIsListOpen(!isListOpen)
        if (!isDrawerOpen) {
            setIsDrawerOpen(true)
            setIsListOpen(true)
        }
    }

    return (
        <List disablePadding className={styles.dictionariesList}>
            <ListItemButton onClick={handleListItemButtonClick}>
                <ListItemIcon >
                    <SchoolIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" className={`${styles.visibilityTransition} ${
                    !isDrawerOpen ? styles.hidden : ""}`}/>
                <ExpandMore className={`${styles.expand} ${styles.visibilityTransition} ${
                    isListOpen ? styles.opened : ""} ${!isDrawerOpen ? styles.hidden : ""}`}/>
            </ListItemButton>
            <Collapse in={isListOpen && isDrawerOpen} timeout={300} unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Starred" />
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    )
}

export default DictionariesList