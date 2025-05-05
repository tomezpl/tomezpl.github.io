import type {PropsWithChildren} from 'react';
import style from './style.module.scss';
import Header from '~/components/Header';
import Sidenav from '~/components/Sidenav';
import {useContext, useEffect, useState} from 'preact/hooks';
import {LayoutContext} from '~/context/layout-context';
import {useHeader} from '~/hooks/use-header';

type MainLayoutProps = {
    skipDummyHeader?: boolean;
}

function MainLayout({skipDummyHeader, children}: PropsWithChildren<MainLayoutProps>) {
    const {header: headerRef} = useContext(LayoutContext);

    const [wasHeaderAlphaInit, setWasHeaderAlphaInit] = useState<boolean>(false);
    const headerEl = useHeader();
    useEffect(() => {
        if(!wasHeaderAlphaInit && headerEl) {
            setWasHeaderAlphaInit(true);
            headerEl.style.setProperty('--gradient-alpha', '1');
            headerEl.style.setProperty('--border-alpha', '1');
        }
    }, [headerEl, wasHeaderAlphaInit]);

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