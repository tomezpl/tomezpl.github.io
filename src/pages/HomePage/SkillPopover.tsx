import {SkillExperienceInfo} from "./types.ts";
import styles from './skill-popover.module.scss';

type SkillPopoverProps = {
    experienceInfo: Pick<SkillExperienceInfo, 'title' | 'brief'>;
};

export function SkillPopover({experienceInfo}: SkillPopoverProps) {
    return <div className={[styles.root, 'skill-popover-root'].join(' ')}>
        <div className={styles.header}>
            {experienceInfo.title}
        </div>
        <div className={styles.body}>
            {experienceInfo.brief}
        </div>
    </div>
}