import {SectionBase} from "./SectionBase.tsx";

import styles from './experience.module.scss';
import {useMemo} from "preact/hooks";
import {webTechExperience, portfolioEntries} from "./constants.tsx";
import {ButtonWithPopover} from "./ButtonWithPopover.tsx";
import {PortfolioCarousel} from "./PortfolioCarousel.tsx";

export function Experience() {
    // Skill-specific logos and descriptions of my experience with them.
    // We're using HTML buttons here instead of divs because we get access to a focused state which basically means free on-click without JS
    const skillExperienceInfo = useMemo(() => Object.entries(webTechExperience).map(([key, experienceInfo]) => <ButtonWithPopover key={key} {...experienceInfo} />), [webTechExperience]);

    return <SectionBase title={'Professional experience'}>
        <p>Due to programming being both my hobby and an integral part of my job, I have delved into a multitude of languages and domains.</p>
        <div className={[styles.experienceRoot, styles.webExperienceRoot].join(' ')}>
            <p>My current professional background comes from a Web development
                perspective, which entails full-stack development using modern,
                open-source technologies, while also interfacing with
                proprietary/enterprise infrastructure to deliver services.
            </p>
            <p>
                In my career, I have been responsible for not only developing new,
                innovative solutions, such as conversational AI (chatbots) and
                interactive navigation guides, but also maintaining legacy systems
                supporting key business operations and developing processes scalable
                to large volumes of data.
            </p>
            <div className={styles.skillExperienceInfoGroupRoot}>
                {skillExperienceInfo}
            </div>
        </div>
        <div className={styles.portfolioRoot}>
            <h1>Portfolio</h1>
            <PortfolioCarousel idBase={'professionalPortfolio'} entries={portfolioEntries} />
        </div>
    </SectionBase>
}