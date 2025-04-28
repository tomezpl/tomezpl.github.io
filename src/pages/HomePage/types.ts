import type {FunctionComponent, VNode} from "preact";

export type SkillExperienceInfo = {
    title: string;
    brief: string | FunctionComponent;
    icon: string | FunctionComponent<{size?: string}>;
}

export type PortfolioEntry = {
    title: string;
    subtitle?: VNode;
} & ({
    brief: string | FunctionComponent;
    image: ReadonlyArray<string> | string;
} | {
    /**
     * An array used to store separate text for each image
     */
    brief: ReadonlyArray<{image: string; text: string | FunctionComponent}>;
});