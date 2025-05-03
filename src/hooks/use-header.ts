import {useContext} from 'preact/hooks';
import {LayoutContext} from '~/context/layout-context';

export function useHeader() {
    const {header} = useContext(LayoutContext);
    // Some Preact oddity, if we store the ref in a context then instead of just having the HTMLDivElement it wraps it in another object
    return header.current ? (header.current as unknown as {base: HTMLDivElement}).base : null;
}