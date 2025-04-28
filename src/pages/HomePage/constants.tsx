import {PortfolioEntry, SkillExperienceInfo} from "./types.ts";
import dotNetCoreLogo from '../../assets/NET_Core_Logo.png';
import vueLogo from '../../assets/512px-Vue.js_Logo_2.png';
import bsLogo from '../../assets/Bootstrap_logo.png';
import azureLogo from '../../assets/azure.png';
import ueLogo from '../../assets/ue.png';
import unityLogo from '../../assets/unityLogo.png';
import openGlLogo from '../../assets/opengl.png';
import physxLogo from '../../assets/physx.png';
import navigateMe1 from '../../assets/portfolio/professional/navigateme.png';
import navigateMe2 from '../../assets/portfolio/professional/navigateme2.png';
import findAPc1 from '../../assets/portfolio/professional/findapc.png';
import findAPc2 from '../../assets/portfolio/professional/findapc2.png';
import jsxLogo from '../../assets/jsx.png';
import {BsListCheck, BsRobot} from "react-icons/bs";
import {PortfolioProductDetails} from "./PortfolioProductDetails.tsx";

const webTechExperience = {
    dotnet: {
        title: '.NET Core',
        brief: '4 years using .NET Core in a professional capacity',
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
        brief: `3 years' experience with using the platform. Knowledge of common tasks, e.g. configuring & deploying app services, debugging deployed code, etc.
                Familiar with Azure DevOps, Git workflow, Continuous Testing, Pipelines and Artifacts.`,
        icon: azureLogo
    },
    chatbot: {
        title: 'Conversational AI',
        brief: `4 years of experience developing chat bots. Solid working knowledge of Microsoft's Bot Framework, Bot Builder SDK, Composer, as well as Natural Language Processing solutions such as Microsoft LUIS. Basic familiarity with machine learning concepts.`,
        icon: BsRobot
    }
} as const;

const WebTechExperience: Record<keyof typeof webTechExperience, SkillExperienceInfo> = webTechExperience;
export {WebTechExperience as webTechExperience};

const gameTechExperience = {
  unreal: {
    title: "Unreal Engine",
    brief:
      "1 year of using Unreal Engine 4 and 5 for small personal game projects. Familiar with both C++ and Blueprint programming, as well as basics of setting up scene lighting using Lumen.",
    icon: ueLogo,
  },
  unity: {
    title: "Unity",
    brief: `Familiar with using the Unity engine, having used it on-and-off since 2013, including 1 year spent on developing a small multiplayer game to completion.
    Familiar with C# programming, Photon & Netcode for GameObjects, Universal Render Pipeline, Shader Graph and HLSL.`,
    icon: unityLogo,
  },
  opengl: {
    title: "OpenGL",
    brief:
      "Familiar with creating basic 3D renderers using the modern OpenGL spec using C++ for host code, writing GLSL shaders for simple lighting models (Gouraud, Phong), and debugging using ImGui and RenderDoc.",
    icon: openGlLogo,
  },
  physx: {
    title: "PhysX",
    brief:
      "Working knowledge of the NVIDIA PhysX C++ SDK. As part of University project, produced a small 3D pinball game making use of various collider types, different material properties (restitution/friction coefficients) to serve gameplay purposes, and integrated simulation with a basic OpenGL scene graph.",
    icon: physxLogo,
  },
} as const;

const GameTechExperience: Record<keyof typeof gameTechExperience, SkillExperienceInfo> = gameTechExperience;

export {GameTechExperience as gameTechExperience};

const uolCwdStack = [<img alt={'JSX'} src={jsxLogo} key={'jsx'} />, <img alt={'Vue.js'} src={vueLogo} key={'vue'} />, <img alt={'Bootstrap & BootstrapVue'} src={bsLogo} key={'bootstrap'} />,  <img alt={'.NET Core'} src={dotNetCoreLogo} key={'dotnet'} />] as const;

export const portfolioEntries: ReadonlyArray<PortfolioEntry> = [
    {
        title: 'Navigate-Me',
        subtitle: <PortfolioProductDetails company={'University of Lincoln'} dates={['2018', '2022']} link={'https://navigateme.lincoln.ac.uk'} />,
        brief: [
            {
                text: () => <>
                    <p>
                        Navigate-Me is a campus navigation system I helped develop and maintain for over 4 years. Users can choose a starting point (or use geolocation) and destination, and the service will render a path, complete with text instructions for each segment.
                    </p>
                    <p>
                        I have joined the project close to its release, so my involvement was primarily to keep the system's maps up to date and adapt to new requirements over time (e.g. special maps to support social distancing measures during the COVID-19 outbreak).
                    </p>
                </>,
                image: navigateMe1,
            },
            {
                text: 'In addition to maintaining and improving the project\'s codebase, I was tasked with creating map data for the University campus.',
                image: navigateMe2
            }
        ],
        technologies: uolCwdStack
    },
    {
        title: 'Find-A-PC',
        subtitle: <PortfolioProductDetails company={'University of Lincoln'} dates={['2018', '2022']} link={'https://findapc.lincoln.ac.uk'} />,
        brief: [
            {
                text: 'Find-A-PC is University of Lincoln\'s Web service designed to help students & staff locate nearest available workspaces. Select buildings & rooms can be viewed as maps populated with live tracked machine availability data, labelling each machine on the map with its availability status using a different colour for each state.',
                image: findAPc1
            },
            {
                text: 'I have joined the team once the service was already in operation, and was later responsible for introducing new features as well as long-term maintenance. Part of the challenge was implementing and maintaining the backend code which needed to use different strategies for polling machine availability data depending on their environment (Windows host/thin client/Mac OS)',
                image: findAPc2
            }
        ],
        technologies: uolCwdStack
    }
]