import type {PropsWithChildren} from 'react';
import style from './style.module.scss';
import Header from '~/components/Header';
import Sidenav from "~/components/Sidenav";
import {useContext} from "preact/hooks";
import {LayoutContext} from "~/context/layout-context.ts";

type MainLayoutProps = {
    skipDummyHeader?: boolean;
}

function MainLayout({skipDummyHeader, children}: PropsWithChildren<MainLayoutProps>) {
    const {header: headerRef} = useContext(LayoutContext);

    return <>
        <Header ref={headerRef}/>
        <Sidenav />
        <div className={`${style.mainContentBg} ${style.mainContent}`}>
            {!skipDummyHeader && <Header className={style.dummyHeader} />}
            {children}
        </div>
    </>
}

export default MainLayout;