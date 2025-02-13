import type {PropsWithChildren} from "react";
import style from './style.module.scss';

function MainLayout({children}: PropsWithChildren) {
    return <div className={`${style.mainContentBg} ${style.mainContent}`}>
        {children}
    </div>
}

export default MainLayout;