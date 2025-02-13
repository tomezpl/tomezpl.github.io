import {FunctionComponent} from "preact";
import styles from "./style.module.scss";

const Header: FunctionComponent = () => {
    return <div className={['tz-brand-gradient', styles.root].join(' ')}>
    </div>
}

export default Header;