import styles from './app.module.css'
import {ErrorBoundary, LocationProvider, Route, Router} from 'preact-iso';
import pages from './pages';
import {useRef} from 'preact/hooks';
import {LayoutContext} from './context/layout-context.ts';
import { PageTitleContext } from './context/page-title-context.ts';

export function App() {
    const headerRef = useRef<HTMLDivElement>(null);

    return (
    <div id={'app'} className={styles.app}>
        <LocationProvider>
            <PageTitleContext.Provider value={pages.find(({route}) => typeof window !== 'undefined' && route === window.location.pathname)?.title}>
                <LayoutContext.Provider value={{header: headerRef}}>
                    <ErrorBoundary>
                        <Router>
                            {pages.map(({route, component: PageComponent}) => <PageComponent {...{route}} key={`route ${route}`} />)}
                            <Route default component={() => <div/>} />
                        </Router>
                    </ErrorBoundary>
                </LayoutContext.Provider>
            </PageTitleContext.Provider>
        </LocationProvider>
    </div>
  )
}
