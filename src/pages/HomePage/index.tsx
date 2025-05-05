import {FunctionComponent} from 'preact';
import './style.scss';
import styles from './style.module.scss';
import MainLayout from '~/layouts/MainLayout';
import {Cover} from './Cover.tsx';
import {useMemo} from 'preact/hooks';
import {Experience} from './Experience.tsx';
import {Hobbyist} from './Hobbyist.tsx';
import {TeamPlayer} from './TeamPlayer.tsx';
import {animOrder} from '~/utils/anim-order';

export const HomePageIds = {
    CoverBrief: 'homeIntroCoverBrief'
} as const;

const HomePage: FunctionComponent = () => {
    const sections = useMemo<ReadonlyArray<[string, FunctionComponent]>>(() => [
        ['experience', Experience],
        ['hobbyist', Hobbyist],
        ['team-player', TeamPlayer]
    ], []);

    return <MainLayout skipDummyHeader>
        <Cover {...animOrder()} className={styles.introFade} />
        <div {...animOrder(1)} className={[styles.homePageRoot, styles.introFade].join(' ')}>
        {
            sections.map(([sectionName, SectionComponent]) => <div className={styles.mainPageContent} key={sectionName}><SectionComponent /></div> )
        }
        </div>
    </MainLayout>
}

export default HomePage;