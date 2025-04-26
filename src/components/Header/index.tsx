import {FunctionComponent} from "preact";
import styles from "./style.module.scss";
import tzLogo from '../../assets/tz_logo.png';

type HeaderProps = {
    className?: string;
}

export const HeaderClasses = {
    Root: 'header-root',
}

const Header: FunctionComponent<HeaderProps> = ({className, ref}) => {
    return <div ref={ref} className={['tz-brand-gradient', HeaderClasses.Root, styles.root, className ?? ''].join(' ')}>
        <img src={tzLogo} className={styles.tzLogo} />
    </div>
}

export default Header;