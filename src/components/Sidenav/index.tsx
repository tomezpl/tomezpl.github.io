import {FunctionComponent} from "preact";
import styles from './style.module.css';
import Hamburger from "../Icons/Hamburger";
import {useRef} from "preact/hooks";

const Sidenav: FunctionComponent = () => {
    const menuRef = useRef<HTMLDivElement>(null);

    function onMenuClick() {
        if(menuRef.current) {
            if(menuRef.current.classList.contains(styles.open)) {
                menuRef.current.classList.remove(styles.open);
            } else {
                menuRef.current.classList.add(styles.open);
            }
        }
    }

    return <div ref={menuRef} className={styles.root}>
        <div onClick={onMenuClick} className={styles.menuToggle}>
            <Hamburger />
        </div>
    </div>
};

export default Sidenav;