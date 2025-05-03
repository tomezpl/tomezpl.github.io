import {PortfolioEntry, SkillExperienceInfo} from './types.ts';
import dotNetCoreLogo from '~/assets/NET_Core_Logo.png';
import vueLogo from '~/assets/512px-Vue.js_Logo_2.png';
import bsLogo from '~/assets/Bootstrap_logo.png';
import azureLogo from '~/assets/azure.png';
import ueLogo from '~/assets/ue.png';
import unityLogo from '~/assets/unityLogo.png';
import openGlLogo from '~/assets/opengl.png';
import physxLogo from '~/assets/physx.png';
import navigateMe1 from '~/assets/portfolio/professional/navigateme.png';
import navigateMe2 from '~/assets/portfolio/professional/navigateme2.png';
import findAPc1 from '~/assets/portfolio/professional/findapc.png';
import findAPc2 from '~/assets/portfolio/professional/findapc2.png';
import jsxLogo from '~/assets/jsx.png';
import rgsDashboard1 from '~/assets/portfolio/professional/rgs-dashboard.webp';
import rgsDashboard2 from '~/assets/portfolio/professional/rgs-dashboard-home.webp';
import rgsDashboard3 from '~/assets/portfolio/professional/rgs-dashboard-home-2.webp';
import rgsDashboard4 from '~/assets/portfolio/professional/rgs-dashboard-charts.webp';
import tsLogo from '~/assets/ts-logo-128.svg';
import reactLogo from '~/assets/React.svg';
import muiLogo from '~/assets/mui.png';
import esbuildLogo from '~/assets/esbuild.svg';
import bpTournament1 from '~/assets/bp-tournament-enter.png';
import css3Logo from '~/assets/CSS3_logo_and_wordmark.svg';
import bpgCommonUi from '~/assets/portfolio/professional/common ui.jpg';
import bpgPanel from '~/assets/portfolio/professional/game-panel.webp';
import {BsListCheck, BsRobot} from 'react-icons/bs';
import {PortfolioProductDetails} from './PortfolioProductDetails.tsx';

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
        brief: '2 years\' experience writing manual tests, unit tests using Jest (TypeScript), NUnit/Xunit (C#), GoogleTest (C++) as well as automated Web UI tests using Playwright.',
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
        brief: '4 years of experience developing chat bots. Solid working knowledge of Microsoft\'s Bot Framework, Bot Builder SDK, Composer, as well as Natural Language Processing solutions such as Microsoft LUIS. Basic familiarity with machine learning concepts.',
        icon: BsRobot
    }
} as const;

const WebTechExperience: Record<keyof typeof webTechExperience, SkillExperienceInfo> = webTechExperience;
export {WebTechExperience as webTechExperience};

const gameTechExperience = {
  unreal: {
    title: 'Unreal Engine',
    brief:
      '1 year of using Unreal Engine 4 and 5 for small personal game projects. Familiar with both C++ and Blueprint programming, as well as basics of setting up scene lighting using Lumen.',
    icon: ueLogo,
  },
  unity: {
    title: 'Unity',
    brief: `Familiar with using the Unity engine, having used it on-and-off since 2013, including 1 year spent on developing a small multiplayer game to completion.
    Familiar with C# programming, Photon & Netcode for GameObjects, Universal Render Pipeline, Shader Graph and HLSL.`,
    icon: unityLogo,
  },
  opengl: {
    title: 'OpenGL',
    brief:
      'Familiar with creating basic 3D renderers using the modern OpenGL spec using C++ for host code, writing GLSL shaders for simple lighting models (Gouraud, Phong), and debugging using ImGui and RenderDoc.',
    icon: openGlLogo,
  },
  physx: {
    title: 'PhysX',
    brief:
      'Working knowledge of the NVIDIA PhysX C++ SDK. As part of University project, produced a small 3D pinball game making use of various collider types, different material properties (restitution/friction coefficients) to serve gameplay purposes, and integrated simulation with a basic OpenGL scene graph.',
    icon: physxLogo,
  },
} as const;

const GameTechExperience: Record<keyof typeof gameTechExperience, SkillExperienceInfo> = gameTechExperience;

export {GameTechExperience as gameTechExperience};

function alt(altText: string) {
    return {alt: altText, title: altText} as const;
}

const uolCwdStack = [<img {...alt('JSX')} src={jsxLogo} key={'jsx'} />, <img {...alt('Vue.js')} src={vueLogo} key={'vue'} />, <img {...alt('Bootstrap & BootstrapVue')} src={bsLogo} key={'bootstrap'} />,  <img {...alt('.NET Core')} src={dotNetCoreLogo} key={'dotnet'} />] as const;

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
    },
    {
        title: 'Blueprint Common Modules',
        subtitle: <PortfolioProductDetails company={'Blueprint Gaming'} dates={['2023', 'present']} />,
        technologies: [
            <img {...alt('TypeScript')} src={tsLogo} key={'typescript'} />, <img {...alt('TSX')} src={jsxLogo} key={'jsx'} />,
            <img {...alt('React')} src={reactLogo} key={'react'} />, <img {...alt('CSS3 (using Emotion.js)')} src={css3Logo} key={'css3'} />
        ],
        brief: [
            {
                text: () => <>
                    <p>
                        Working as part of Blueprint Gaming's Framework/Tools team, I've been tasked with developing and
                        maintaining "common" modules;
                        ie. libraries that were used in every game, developed separately to the game code itself. Key
                        amongst them was Common UI,
                        which provides practically all of the on-screen controls and house style in Blueprint's games.
                    </p>
                    <p>
                        Having a reusable UI library allows game developers at Blueprint to focus on building the game
                        client itself; the library provides callbacks for the client to subscribe to in order to respond to user input,
                        and it can configure and manipulate the UI state via an easy-to-use API.
                    </p>
                    <p>
                        The UI also takes care of responsive layouts and text scaling, and is continuously tested on a variety of devices,
                        including all major mobile browsers, resolutions and operating systems.
                    </p>
                </>,
                image: bpgCommonUi,
            },
            {
                text: () => <>
                    <p>
                        Aside from just displaying 2D elements and forwarding user input events, the UI also plays a big compliance role.
                        There are many requirements from gambling regulatory bodies as well as operators with regards how the interface needs to behave in certain markets,
                        so the library also adapts its logic based on settings received from the server and any integration-specific code.
                    </p>
                    <p>
                        Common UI is also responsible for translating and localising all text, currency, time and date displayed in the controls;
                        to achieve this goal it implements its own "default" translation set, but also supports loading custom translations at runtime.
                    </p>
                </>,
                image: bpgCommonUi,
            },
            {
                text: () => <>
                    <p>
                        Another shared library I worked on at Blueprint is the game panel. This is a UI component that's present on select games that feature progressive jackpots.
                        These are essentially supposed to act as a visually pleasing preview of the current pot state. As the player places a bet and spins the game,
                        their bet contributes to the progressive pots; the game panel's task is to animate the pot values with a "counting" effect whenever they update.
                    </p>
                    <p>
                        There are several variants of the game panel; each comes with its own distinct visuals. Those can also be customised on a per-operator basis.
                        Similarly to the common UI library itself, the panel handles all of the localisation, layout and text scaling - the latter two being major challenges
                        due to having to fit on the screen without obscuring any key elements from the game's canvas,
                        and also the need for supporting a range of currencies that result in varied text lengths.
                    </p>
                </>,
                image: bpgPanel,
                textWidth: '60%'
            }
        ]
    },
    {
        title: 'RGS Dashboard',
        subtitle: <PortfolioProductDetails company={'Blueprint Gaming'} dates={['2024']} />,
        brief: [
            {
                text: 'I was tasked with designing and developing an internal data visualisation site that would be featured on displays around the offices at Blueprint.',
                image: rgsDashboard2,
            },
            {
                text: () => <p>
                    The site was initially based off one of the templates the company had purchased in order to quickly
                    establish a visual direction and develop a presentable proof-of-concept, but over time I've rewritten
                    the majority of the components as they didn't entirely fit our requirements (lack of typing, theming support etc.)
                </p>,
                image: rgsDashboard1
            },
            {
                text: `A good amount of work has gone into developing dataviz widgets such bar/line/gauge charts from scratch using React & SVG, etc.
                        as many of the charts included with the template relied on an old library based on HTML5 Canvas, which made customisation difficult.`,
                image: rgsDashboard4
            },
            {
                text: `
                        In addition, I also developed a custom component for visualising Blueprint's top international markets.
                        This consisted of a 3D shaded globe that animated along a coordinate trail of countries from the top plays data,
                        procedurally bringing every country into view by rotating and zooming as needed, and highlighting the country with a flashing yellow fill.
                        This involved implementing bespoke pre-processing, GLSL shaders and 3D math, so I was very proud to see it come to life.
                        `,
                image: rgsDashboard3
            },
        ],
        technologies: [
            <img {...alt('TypeScript')} src={tsLogo} key={'typescript'} />, <img {...alt('TSX')} src={jsxLogo} key={'jsx'} />, <img {...alt('React')} src={reactLogo} key={'react'} />,
            <img {...alt('Material UI')} src={muiLogo} key={'mui'} />, <img {...alt('ESBuild')} src={esbuildLogo} key={'esbuild'} />
        ]
    },
    {
        title: 'Tournament Frontend',
        subtitle: <PortfolioProductDetails company={'Blueprint Gaming'} dates={['2024']} />,
        technologies: [
            <img {...alt('TypeScript')} src={tsLogo} key={'typescript'} />, <img {...alt('TSX')} src={jsxLogo} key={'jsx'} />, <img {...alt('React')} src={reactLogo} key={'react'} />,
            <img {...alt('Material UI')} src={muiLogo} key={'mui'} />
        ],
        brief: () => <>
            <p>
                Blueprint Gaming operate a "tournament" website both for internal use as well as for some customers, which allows users to enter limited-time promo games.
                This frontend includes a leaderboard which users can view to track their score, as these tournaments can include prizes.
            </p>
            <p>
                I was tasked with adapting this to a responsive web design, as the original implementation stored the entire layout in a bitmap image,
                with text elements placed using a flexbox that targeted the image's hard-coded resolution.
            </p>
            <p>
                I was able to replicate the individual elements from the artist's Photoshop design as HTML elements with CSS styling that matched the original.
                This enabled me to introduce support for a proper mobile-friendly layout, as well as crisper rendering on higher resolutions.
            </p>
        </>,
        image: bpTournament1,
        textWidth: '50%'
    }
]