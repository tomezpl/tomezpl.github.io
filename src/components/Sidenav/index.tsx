import {FunctionComponent} from 'preact';
import styles from './style.module.scss';
import Hamburger from '~/components/Icons/Hamburger';
import {useRef} from 'preact/hooks';
import {useLocation} from 'preact-iso';
import pages from '~/pages';

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

    const {path} = useLocation();
    console.log(`path is ${JSON.stringify(path)}`);

    return <div ref={menuRef} className={[styles.root, 'tz-brand-gradient-sidebar'].join(' ')}>
        <div onClick={onMenuClick} className={styles.menuToggle}>
            <Hamburger />
        </div>
        <ul className={styles.buttons}>
            {pages.map(({title, route}) => <li
                key={`link for ${route} (${title})`}
                className={styles.navItem}>
                <a href={route} className={[styles.button, route === path ? 'active' : ''].join(' ')}><span>{title}</span></a>
            </li>)}
        </ul>
        <div className={styles.footerRoot}>
            <p>Version {VERSION}</p>
            <p>
                Built with <a target={'_blank'} href='https://preactjs.com/'>Preact</a>, <a target={'_blank'} href={'https://www.typescriptlang.org/'}>TypeScript</a>,
                <a target={'_blank'} href={'https://sass-lang.com/'}>Sass</a>, <a target={'_blank'} href={'https://zustand.docs.pmnd.rs/getting-started/introduction'}>Zustand</a> and <a target={'_blank'} href={'https://vite.dev/'}>Vite</a>.
            </p>
        </div>
    </div>
};

export default Sidenav;