import styles from './app.module.css'
import {ErrorBoundary, LocationProvider, Route, Router} from "preact-iso";
import Sidenav from "./components/Sidenav";
import Header from './components/Header';
import pages from './pages';
import {useRef} from "preact/hooks";
import {LayoutContext} from "./context/layout-context.ts";

export function App() {
    const headerRef = useRef<HTMLDivElement>(null);

    return (
    <div id={'app'} className={styles.app}>
        <LocationProvider>
            <Header ref={headerRef}/>
            <Sidenav />
            <LayoutContext.Provider value={{header: headerRef}}>
            <ErrorBoundary>
                <Router>
                    {pages.map(({route, component: PageComponent}) => <PageComponent {...{route}} key={`route ${route}`} />)}
                    <Route default component={() => <div/>} />
                </Router>
            </ErrorBoundary>
            </LayoutContext.Provider>
        </LocationProvider>
    </div>
  )
}
