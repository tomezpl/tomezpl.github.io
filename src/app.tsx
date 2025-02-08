import styles from './app.module.css'
import {ErrorBoundary, lazy, LocationProvider, Route, Router} from "preact-iso";
import Sidenav from "./components/Sidenav";

if(typeof window !== 'undefined') {

}

const HomePage = lazy(() => import('./pages/HomePage'));

export function App() {
    return (
    <div id={'app'} className={styles.app}>
        <LocationProvider>
            <Sidenav />
            <ErrorBoundary>
                <Router>
                    <HomePage path={'/'} />
                    <Route component={() => <div/>} />
                </Router>
            </ErrorBoundary>
        </LocationProvider>
    </div>
  )
}
