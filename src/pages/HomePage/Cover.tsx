import {useCallback, useEffect, useRef} from 'preact/hooks';
import {useHeader} from '~/hooks/use-header';
import styles from './style.module.scss';
import Header from '~/components/Header';
import githubLogo from '~/assets/GitHub-Mark-Light-64px.png';
import resumePdf from '~/assets/Tomasz Zając - CV Public.pdf';
import {BsFileEarmarkPersonFill} from 'react-icons/bs';
import linkedinLogo from '~/assets/linkedin.png';
import {HomePageIds} from './index.tsx';

export function Cover({className, style}: {className?: string, style?: Record<string, string>}) {
    const homeIntroCoverBriefRef = useRef<HTMLDivElement>(null);
    const header = useHeader();
    const rootRef = useRef<HTMLDivElement>(null);

    const updateHeaderAlpha = useCallback((alpha: number) => {
        if(header) {
            header.style.setProperty('--gradient-alpha', alpha.toString());
            header.style.setProperty('--border-alpha', alpha.toString());
        }
        if(rootRef.current) {
            rootRef.current.style.setProperty('--border-alpha', (alpha >= 1 ? 0 : 1).toString());
        }
    }, [header, rootRef.current])


    // Fade the header out as we scroll
    useEffect(() => {
        let listener : (() => void) | undefined;
        if(typeof window !== 'undefined') {
            listener = () => {
                if (homeIntroCoverBriefRef.current) {
                    const {top, height} = homeIntroCoverBriefRef.current.getBoundingClientRect();

                    updateHeaderAlpha(Math.max(0, -top) / height);

                    if (header) {
                        const {height: headerHeight} = header.getBoundingClientRect();
                        const borderOverlapped = (Math.max(0, -top) + headerHeight) >= height;
                        homeIntroCoverBriefRef.current.style.setProperty('--border-alpha', (+(!borderOverlapped)).toString());
                    }
                }
            };
            window.addEventListener('scroll', listener);
        }

        return () => {
            if(listener) {
                window.removeEventListener('scroll', listener);
            }
        }
    }, [homeIntroCoverBriefRef.current, updateHeaderAlpha, header]);

    useEffect(() => {
        if(typeof window !== 'undefined' && header instanceof HTMLDivElement) {
            header.style.setProperty('--border-alpha', '0');
            header.style.setProperty('--gradient-alpha', '0');
        }
    }, [header]);

    return <div style={style ?? {}} className={['tz-brand-gradient', styles.coverRoot, className ?? ''].join(' ')}>
        <Header className={styles.dummyHeader} />
        <div className={styles.coverText}>
            <div ref={homeIntroCoverBriefRef} id={HomePageIds.CoverBrief} className={styles.homeIntroCoverBrief}>
                <h1 className={styles.bigText}>Tomasz Zając</h1>
                <h2>An experienced, self-motivated software developer</h2>
                <hr className={styles.homeHeaderDivider} />
                <p>
                    5 years of professional experience developing, maintaining and
                    providing support on a variety of enterprise-grade Web services and apps.
                </p>
                <p>
                    Passionate about working on small videogame projects in my free time.
                </p>

                <div className={styles.socialLinksContainer}>
                    <a target="_blank" href="https://github.com/tomezpl">
                        <img src={githubLogo}/>
                    </a>
                    <a className={styles.resumeLink} target="_blank" href={resumePdf}>
                        <BsFileEarmarkPersonFill size={'80%'} />
                        <i className="bi bi-file-earmark-person-fill"
                           style="font-size: 55px; transform: translate(0, -3px); height: 80px;"></i>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/tomzajac/">
                        <img src={linkedinLogo}/>
                    </a>
                </div>
            </div>
        </div>
    </div>
}