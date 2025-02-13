import styles from './app.module.css'
import {ErrorBoundary, LocationProvider, Route, Router} from "preact-iso";
import Sidenav from "./components/Sidenav";
import Header from './components/Header';
import pages from './pages';

if(typeof window !== 'undefined') {

}

export function App() {
    return (
    <div id={'app'} className={styles.app}>
        <LocationProvider>
            <Header/>
            <Sidenav />
            <ErrorBoundary>
                <Router>
                    {pages.map(({route, component: PageComponent}) => <PageComponent {...{route}} key={`route ${route}`} />)}
                    <Route component={() => <div/>} />
                </Router>
            </ErrorBoundary>
        </LocationProvider>
    </div>
  )
}
