import {createContext, RefObject} from 'preact';

interface ILayoutContext {
    header: RefObject<HTMLDivElement>;
}

export const LayoutContext = createContext<ILayoutContext>({header: {current: {base: null}} as unknown as RefObject<HTMLDivElement>})