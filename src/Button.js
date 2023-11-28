import PropTypes from "prop-types"
import styles from "./Button.module.css"


function Btn({text}){
    return <button className={styles.Btn}>{text}</button>   ;
}

Btn.protoTypes = {
    text: PropTypes.string.isRequired,

};

export default Btn;