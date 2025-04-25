import {FunctionComponent} from "preact";
import './style.scss';
import styles from './style.module.scss';
import MainLayout from "../../layouts/MainLayout";
import {Cover} from "./Cover.tsx";
import {useMemo} from "preact/hooks";
import {Experience} from "./Experience.tsx";

export const HomePageIds = {
    CoverBrief: 'homeIntroCoverBrief'
} as const;

const HomePage: FunctionComponent = () => {
    const sections = useMemo<ReadonlyArray<[string, FunctionComponent]>>(() => [
        ['experience', Experience]
    ], []);

    return <MainLayout skipDummyHeader>
        <Cover />
        <div>
        {
            sections.map(([sectionName, SectionComponent]) => <div className={styles.mainPageContent} key={sectionName}><SectionComponent /></div> )
        }
        </div>
        <div style={{height: '1000px'}}></div>
    </MainLayout>
}

export default HomePage;