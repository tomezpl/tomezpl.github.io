import type {PropsWithChildren} from 'react';
import style from './style.module.scss';
import Header from '~/components/Header';

type MainLayoutProps = {
    skipDummyHeader?: boolean;
}

function MainLayout({skipDummyHeader, children}: PropsWithChildren<MainLayoutProps>) {
    return <div className={`${style.mainContentBg} ${style.mainContent}`}>
        {!skipDummyHeader && <Header className={style.dummyHeader} />}
        {children}
    </div>
}

export default MainLayout;