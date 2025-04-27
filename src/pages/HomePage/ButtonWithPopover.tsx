import {SkillExperienceInfo} from "./types.ts";
import styles from "./experience.module.scss";
import {SkillPopover} from "./SkillPopover.tsx";
import {Fragment} from "preact";

type ButtonWithPopoverProps = {
    align?: 'left' | 'right';
} & SkillExperienceInfo;

export function ButtonWithPopover({align = 'right', title, icon: Icon, ...rest}: ButtonWithPopoverProps) {
    return <Fragment>
        <button type={'button'} className={styles.skillExperienceInfo} title={title}>
            {typeof Icon === 'string' ? <img src={Icon} /> : <Icon size={'2em'} />}
        </button>
        <SkillPopover align={align} experienceInfo={{title, ...rest}} />
    </Fragment>
}