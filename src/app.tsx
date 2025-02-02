import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import {useStore} from "./store.ts";
import {hydrate} from "preact-iso";

if(typeof window !== 'undefined') {
    debugger
    const btn = document.getElementById('countBtn');
        const evListener =  () => {
            useStore.getState().incrementCount();

            // Replace the pre-rendered button with a reactive one
            hydrate(<CounterButton id={'countBtn'} />, btn!)
            btn!.replaceWith(btn!.querySelector('#countBtn')!);
            if(btn) {
                btn.removeEventListener('click', evListener);
            }
        }

        btn?.addEventListener('click', evListener);
}

function CounterButton({id}: {id?: string}) {
    const {counter, incrementCount} = useStore();

    return <button id={id} onClick={incrementCount}>
        count is {counter}
    </button>
}

export function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <CounterButton id={'countBtn'} />
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Check out{' '}
        <a
          href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
          target="_blank"
        >
          create-preact
        </a>
        , the official Preact + Vite starter
      </p>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}
