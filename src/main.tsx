import { hydrate, prerender as ssr } from 'preact-iso'
import './shared.scss'
import 'normalize.css';
import { App } from './app.tsx'

if(typeof window !== 'undefined' && !document.getElementById("app")) {
    hydrate(<App/>, document.body)
}

export async function prerender(data?: Record<string, unknown>) {
    return await ssr(<App {...data} />)
}