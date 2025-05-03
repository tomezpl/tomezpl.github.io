import type {PropsWithChildren} from 'react';

type SectionBaseProps = {
    title?: string;
}

export function SectionBase({title, children}: PropsWithChildren<SectionBaseProps>) {
    return <>
        {title && <h1>{title}</h1>}
        {children}
    </>
}