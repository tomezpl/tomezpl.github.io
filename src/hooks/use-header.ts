import {useContext, useEffect, useState} from 'preact/hooks';
import {LayoutContext} from '~/context/layout-context';

type HeaderRef = {current: {base?: HTMLDivElement} | null};

export function useHeader() {
    const header = useContext(LayoutContext).header as HeaderRef;
    const [headerDiv, setHeaderDiv] = useState<HTMLDivElement | null>(null);
    useEffect(() => {
        if(header.current?.base) {
            setHeaderDiv(header.current.base);
        }
    }, [header.current?.base])
    // Some Preact oddity, if we store the ref in a context then instead of just having the HTMLDivElement it wraps it in another object
    return headerDiv;
}