import {FC} from "react";
import {Row, } from "antd";
import style from "./style.module.scss";

const CenterWrapper:FC = ({children}) => {
    return (
        <Row justify="center" align="middle" className={style.wrapper}>
            {children}
        </Row>
    )
}

export default CenterWrapper