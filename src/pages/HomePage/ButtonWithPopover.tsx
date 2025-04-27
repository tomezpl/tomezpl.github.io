import {SkillExperienceInfo} from "./types.ts";
import styles from "./experience.module.scss";
import {SkillPopover} from "./SkillPopover.tsx";
import {Fragment} from "preact";

export function ButtonWithPopover({title, icon: Icon, ...rest}: SkillExperienceInfo) {
    return <Fragment>
        <button type={'button'} className={styles.skillExperienceInfo} title={title}>
            {typeof Icon === 'string' ? <img src={Icon} /> : <Icon size={'2em'} />}
        </button>
        <SkillPopover experienceInfo={{title, ...rest}} />
    </Fragment>
}