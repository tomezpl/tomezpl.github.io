import {FunctionComponent} from 'preact';
import pages from '~/pages';
import styles from './style.module.scss';
import tzLogo from '~/assets/tz_logo.png';
import {useMemo} from 'preact/hooks';
import {useRoute} from 'preact-iso';

type HeaderProps = {
    className?: string;
}

export const HeaderClasses = {
    Root: 'header-root',
}

const Header: FunctionComponent<HeaderProps> = ({className, ref}) => {
    const currentRoute = useRoute();
    const pageTitle = useMemo(() => {
        const matchingPage = pages.find(({route}) => route === (currentRoute as unknown as ({route: string} | undefined))?.route);
        return matchingPage?.title ?? null;
    }, [currentRoute, pages]);

    return <div ref={ref} className={['tz-brand-gradient', HeaderClasses.Root, styles.root, className ?? ''].join(' ')}>
        <img src={tzLogo} className={styles.tzLogo} />
        <h1 className={styles.pageTitle}>{pageTitle}</h1>
    </div>
}

export default Header;