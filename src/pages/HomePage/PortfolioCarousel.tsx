import {PortfolioEntry} from './types.ts';
import {useCallback, useEffect, useMemo, useState} from 'preact/hooks';
import {FunctionComponent, ReactNode} from 'react';
import styles from './portfolio-carousel.module.scss';
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io';
import type {VNode} from 'preact';

type PortfolioCarouselProps = {
    entries: ReadonlyArray<PortfolioEntry>;
    idBase?: string;
}

function wrapIndex(newIndex: number, {length}: Pick<ReadonlyArray<unknown>, 'length'>) {
    return newIndex < 0 ? (length - 1) : (newIndex % length);
}

export function PortfolioCarousel({entries, idBase}: PortfolioCarouselProps) {
    const flatSlides = useMemo<ReadonlyArray<{title: string, textWidth?: string, subtitle?: ReactNode, technologies?: ReadonlyArray<ReactNode>, text: ReactNode, image: string}>>(() => {
        return entries.flatMap((entry) => {
            const BriefComponent = typeof entry.brief === 'function' ? entry.brief : null;
            return Array.isArray(entry.brief)
                ? (entry.brief as {text: string | FunctionComponent, image: string, textWidth?: string}[]).map(({text: Text, image, textWidth}) => ({title: entry.title, textWidth, subtitle: entry.subtitle, technologies: entry.technologies, text: typeof Text === 'string' ? Text : <Text />, image}))
                : [{title: entry.title, textWidth: (entry as {textWidth?: string}).textWidth, subtitle: entry.subtitle, technologies: entry.technologies, text: (BriefComponent ? <BriefComponent /> : entry.brief), image: (entry as {image: string}).image}];
            });
    }, [entries]);

    const getId = useCallback((index: number) => idBase ? `${idBase}-${index}` : null, [idBase]);
    const getHref = useCallback((index: number) => {
        const id = getId(index);
        return id ? `#${id}` : '';
    }, [getId]);

    const [currentlyActiveSlide, setSlide] = useState<number | null>(null);

    const cycleSlide = useCallback((direction: number) => {
        setSlide(wrapIndex((currentlyActiveSlide ?? 0) + direction, flatSlides));
    }, [flatSlides, currentlyActiveSlide]);

    // With JS enabled, allow cycling the slides via JS, blocking the HTMLAnchorElement default event handler
    // as it scrolls to the element which is kinda confusing (but the only way to handle this logic without JS)
    const onPrevSlide = useCallback((event: Event) => {
        cycleSlide(-1);
        event.preventDefault();
    }, [cycleSlide]);

    const onNextSlide = useCallback((event: Event) => {
        cycleSlide(1);
        event.preventDefault();
    }, [cycleSlide]);

    const [canUseJs, setCanUseJs] = useState(false);

    useEffect(() => {
        setCanUseJs(typeof window !== 'undefined');
    }, []);

    const slidesToHide = useMemo(() => {
        if(!canUseJs || typeof currentlyActiveSlide !== 'number') {
            return [];
        }

        return flatSlides.reduce((indices, _slide, index) => {
            if(![wrapIndex(currentlyActiveSlide - 1, flatSlides), currentlyActiveSlide, wrapIndex(currentlyActiveSlide + 1, flatSlides)].includes(index)) {
                indices.push(index);
            }

            return indices;
        }, new Array<number>());
    }, [canUseJs, currentlyActiveSlide, flatSlides]);

    return <div className={styles.root}>
        {flatSlides.map(({title, textWidth, subtitle, technologies, text, image}, i, {length: total}) => <div
            data-iscurrentslide={currentlyActiveSlide === i ? 'true' : 'false'}
            className={styles.slideRoot} {...(getId(i) ? {id: getId(i)!} : {})}
            style={textWidth ? {'--text-width': textWidth} : {}}
            key={`${title} ${text} ${i}`}>
            <div className={styles.textContainer}>
                <h1>{title}</h1>
                <h2>{subtitle ?? null}</h2>
                {typeof text === 'string' ? <p>{text}</p> : text}
                {(technologies?.length ?? 0) > 0 ? <><hr /><div className={styles.technologies}>{technologies?.map((tech, j) => <><div key={`dummydiv tech ${j} ${title} ${i}`}>{tech}<span className={styles.techDummy} >{((tech as VNode).props as {alt?: string}).alt}</span></div></>)}</div></> : null}
            </div>
            <div draggable={false} className={styles.imageContainer} style={{'--image-src': `url(${image})`}}>
                {image.endsWith('mp4') ? <video disableremoteplayback disablePictureInPicture playsinline muted loop className={styles.imageBg} preload={'auto'} autoplay><source src={image} /></video> : (slidesToHide.includes(i) ? null : <img decoding={'async'} fetchPriority={'high'} draggable={false} loading={ 'lazy'} className={styles.imageBg} src={image} />)}
                {image.endsWith('mp4') ? <video disableremoteplayback playsinline muted loop  className={styles.image} preload={'auto'} autoplay><source src={image} /></video> : (slidesToHide.includes(i) ? null : <img decoding={'async'} fetchPriority={'high'} draggable={false} loading={i === 0 ? 'eager' : 'lazy'} className={styles.image} src={image} />)}
                <a draggable={false} onClick={onPrevSlide} className={styles.prevBtn} href={getHref((i === 0 ? total : i) - 1)}><IoIosArrowDropleftCircle size={'100%'} /></a>
                <a draggable={false} onClick={onNextSlide} className={styles.nextBtn} href={getHref((i + 1) % total)}><IoIosArrowDroprightCircle size={'100%'} /></a>
            </div>
        </div>)}
    </div>
}