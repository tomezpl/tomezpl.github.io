import {SectionBase} from "./SectionBase.tsx";

import styles from './experience.module.scss';
import {useMemo} from "preact/hooks";
import {webTechExperience} from "./constants.tsx";

export function Experience() {
    const skillExperienceInfo = useMemo(() => Object.entries(webTechExperience).map(([key, {title, icon: Icon}]) => (
        <div className={styles.skillExperienceInfo} key={key} title={title}>
            {typeof Icon === 'string' ? <img src={Icon} /> : <Icon size={'2em'} />}
        </div>)
    ), [webTechExperience]);

    return <SectionBase title={'Professional experience'}>
        <p>Due to programming being both my hobby and an integral part of my job, I have delved into a multitude of languages and domains.</p>
        <div className={styles.webExperienceRoot}>
            <p>My current professional background comes from a Web development
                perspective, which entails full-stack development using modern,
                open-source technologies, while also interfacing with
                proprietary/enterprise infrastructure to deliver services.
            </p>
            <p>
                In my career, I have been responsible for not only developing new,
                innovative solutions, such as conversational chatbots and
                interactive navigation guides, but also maintaining legacy systems
                supporting key business operations and developing processes scalable
                to large volumes of data.
            </p>
            <div className={styles.skillExperienceInfoGroupRoot}>
                {skillExperienceInfo}
            </div>
        </div>
    </SectionBase>
}