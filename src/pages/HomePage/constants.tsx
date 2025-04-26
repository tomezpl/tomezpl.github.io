import {SkillExperienceInfo} from "./types.ts";
import dotNetCoreLogo from '../../assets/NET_Core_Logo.png';
import vueLogo from '../../assets/512px-Vue.js_Logo_2.png';
import bsLogo from '../../assets/Bootstrap_logo.png';
import azureLogo from '../../assets/azure.png';
import {BsListCheck, BsRobot} from "react-icons/bs";

const webTechExperience = {
    dotnet: {
        title: '.NET Core',
        brief: '',
        icon: dotNetCoreLogo
    },
    vue: {
        title: 'Vue.js',
        brief: '4 years using Vue.js in a professional capacity. Familiar with Vue 2.x, 3.x, JSX syntax, Vue CLI and TypeScript API.',
        icon: vueLogo
    },
    bootstrap: {
        title: 'Bootstrap',
        brief: '4 years using Bootstrap in a professional capacity. Solid working knowledge of the layout system and core components, as well as SCSS customization and extending functionality with custom code.',
        icon: bsLogo
    },
    'unit-testing': {
        title: 'Testing',
        brief: `2 years' experience writing manual tests, unit tests using Jest (TypeScript), NUnit/Xunit (C#), GoogleTest (C++) as well as automated Web UI tests using Playwright.`,
        icon: BsListCheck,
    },
    azure: {
        title: 'Azure',
        brief: `3 years' experience with using the Microsoft Azure platform. Knowledgeable about common tasks such as configuring & deploying app services, debugging deployed code, etc.
                Familiar with the Azure DevOps platform, Git workflow, Continuous Testing, Azure Pipelines and Azure Artifacts.`,
        icon: azureLogo
    },
    chatbot: {
        title: 'Conversational AI',
        brief: `4 years of experience developing conversational AI services (chat bots). Solid working knowledge of Microsoft's Bot Framework, Bot Builder SDK, Composer, as well as Natural Language Processing solutions such as Microsoft LUIS. Basic familiarity with machine learning concepts.`,
        icon: BsRobot
    }
} as const;

const WebTechExperience: Record<keyof typeof webTechExperience, SkillExperienceInfo> = webTechExperience;
export {WebTechExperience as webTechExperience};