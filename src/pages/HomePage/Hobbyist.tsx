import {SectionBase} from './SectionBase.tsx';
import {useMemo} from 'preact/hooks';
import {gameTechExperience, hobbyProjectEntries} from './constants.tsx';
import {ButtonWithPopover} from './ButtonWithPopover.tsx';
import experienceStyles from './experience.module.scss';
import styles from './hobbyist.module.scss';
import {PortfolioCarousel} from '~/pages/HomePage/PortfolioCarousel';

export function Hobbyist() {
    const skillExperience = useMemo(() => Object.entries(gameTechExperience).map(([key, experienceInfo]) => <ButtonWithPopover align={'left'} key={key} {...experienceInfo} />), [gameTechExperience]);

    return <SectionBase title={'Personal projects & hobbyist development'}>
        <p>In my free time, however, I often challenge myself to learning
            completely different areas, such as graphics rendering and physics
            simulation in a game programming context.
        </p>
        <div className={[experienceStyles.experienceRoot, styles.hobbyistRoot].join(' ')}>
            <p>
                I have working knowledge of industry-standard game engines Unity,
                Unreal and Godot, as well as graphics and physics middleware including
                OpenGL, PhysX and Bullet. I am familiar with many math concepts
                commonly used for rendering and lighting (algebra, vector math,
                calculus), as well as basic Newtonian mechanics required for physics
                and gameplay programming.
            </p>
            <div className={[experienceStyles.skillExperienceInfoGroupRoot, styles.gameTechExperienceInfo].join(' ')}>
                {skillExperience}
            </div>
        </div>
        <div className={'portfolio-root hobbyist-portfolio-root'}>
            <h1>Side-projects</h1>
            <PortfolioCarousel entries={hobbyProjectEntries} />
        </div>
    </SectionBase>
}