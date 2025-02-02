import { hydrate, prerender as ssr } from 'preact-iso'
import './index.css'
import { App } from './app.tsx'

if(typeof window !== 'undefined' && !document.getElementById("app")) {
    const appRoot = document.createElement("div");
    appRoot.id = "app";
    document.body.appendChild(appRoot);
    hydrate(<App/>, appRoot)
}

export async function prerender(data?: Record<string, unknown>) {
    return await ssr(<div id="app"><App {...data} /></div>)
}