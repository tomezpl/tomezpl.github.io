import {FunctionComponent} from 'preact';
import { lazy } from 'preact-iso';

const pages: ReadonlyArray<{route: string, title: string, component: FunctionComponent}> = [
    {route: '/', title: 'Home', component: lazy(() => import('./HomePage'))},
    {route: '/blog', title: 'Blog', component: lazy(() => import('./HomePage'))},
    {route: '/showcase', title: 'Showcase', component: lazy(() => import('./HomePage'))},
    {route: '/about', title: 'About', component: lazy(() => import('./HomePage'))}
];

export default pages;