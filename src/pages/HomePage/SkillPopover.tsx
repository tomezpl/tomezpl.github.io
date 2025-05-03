import {SkillExperienceInfo} from './types.ts';
import styles from './skill-popover.module.scss';

type SkillPopoverProps = {
    experienceInfo: Pick<SkillExperienceInfo, 'title' | 'brief'>;
    align: 'left' | 'right';
};

export function SkillPopover({experienceInfo, align}: SkillPopoverProps) {
    return <div className={[styles.root, 'skill-popover-root', align === 'left' ? styles.leftAlign : ''].join(' ')}>
        <div className={styles.header}>
            {experienceInfo.title}
        </div>
        <div className={styles.body}>
            {experienceInfo.brief}
        </div>
    </div>
}