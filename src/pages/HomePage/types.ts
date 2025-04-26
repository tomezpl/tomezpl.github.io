import type {FunctionComponent} from "preact";

export type SkillExperienceInfo = {
    title: string;
    brief: string | FunctionComponent;
    icon: string | FunctionComponent<{size?: string}>;

}