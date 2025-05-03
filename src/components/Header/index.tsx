import {FunctionComponent} from 'preact';
import styles from './style.module.scss';
import tzLogo from '~/assets/tz_logo.png';
import {useContext} from 'preact/hooks';
import {PageTitleContext} from '~/context/page-title-context';

type HeaderProps = {
    className?: string;
}

export const HeaderClasses = {
    Root: 'header-root',
}

const Header: FunctionComponent<HeaderProps> = ({className, ref}) => {
    const pageTitle = useContext(PageTitleContext);

    return <div ref={ref} className={['tz-brand-gradient', HeaderClasses.Root, styles.root, className ?? ''].join(' ')}>
        <img src={tzLogo} className={styles.tzLogo} />
        <h1 className={styles.pageTitle}>{pageTitle}</h1>
    </div>
}

export default Header;