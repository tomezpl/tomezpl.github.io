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
// import bpTournament1 from '~/assets/bp-tournament-enter.png';
import css3Logo from '~/assets/CSS3_logo_and_wordmark.svg';
import bpgCommonUi from '~/assets/portfolio/professional/common ui.jpg';
import bpgPanel from '~/assets/portfolio/professional/game-panel.webp';
import roombaRumble from '~/assets/portfolio/hobby/roombarumble1.gif';
import blenderLogo from '~/assets/blender.svg';
import carPhysics from '~/assets/portfolio/hobby/driving-physics.webp';
import godotLogo from '~/assets/godot.svg';
import sthShort from '~/assets/portfolio/hobby/sth-trailer-30.webp';
import csharpLogo from '~/assets/logo_Csharp.svg';
import vkLogo from '~/assets/vulkan.svg';
import cppLogo from '~/assets/cpplogo.svg';
import lepusDemoApp from '~/assets/portfolio/hobby/lepus-demo-app.webp';
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
    react: {
        title: 'React',
        brief: '2 years using React in a professional capacity. Solid working knowledge of the concepts (virtual DOM, hooks, portals, passing props), experience with debugging and optimisation.',
        icon: reactLogo
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
    /*{
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
    }*/
];

export const hobbyProjectEntries: ReadonlyArray<PortfolioEntry> = [
    {
        title: 'Roomba Rumble',
        subtitle: <PortfolioProductDetails link={'https://github.com/tomezpl/7DFPS-2020'} company={'7DFPS Game Jam'} dates={['2020']} />,
        brief: () => <>
            <p>
                For the 7DFPS game jam in 2020, I developed a multiplayer shooter game where players control weaponised cleaning robots.
            </p>
            <p>
                For playability's sake, a concession had to be made and technically the camera placement is more similar to a third person perspective.
            </p>
            <p>
                I've decided to continue with the game's development after the game jam had ended. As a result, I believe I have learned quite a lot about all facets of game development,
                from design, programming, time management, and so on. While the game was clearly far from a technical accomplishment, it served as a good introduction to learning
                gameplay programming, networking (using Photon initially, and porting to Unity MLAPI later on), shaders (using Shader Graph), as well as generally the Unity engine itself.
            </p>
        </>,
        technologies: [<img src={unityLogo} {...alt('Unity')} />, <img src={blenderLogo} {...alt('Blender')} />],
        image: roombaRumble
    },
    {
        title: 'Driving physics',
        subtitle: <PortfolioProductDetails link={'https://github.com/tomezpl/VehicleDemo'} company={'Self learning'} dates={['2022']} />,
        brief: () => <>
            <p>
                I've always found vehicle physics in video games to be an interesting problem,
                which prompted me to make small experiments in my free time trying to implement my own solution.
            </p>
            <p>
                Having studied the well-known Marco Monster paper on car physics, I began toying with an implementation using the Godot engine.
                Within a few weeks I had a basic demo with a simple weight transfer that responds to changes in acceleration, raycast-driven wheel suspension,
                cornering that adapts to velocity and tyre friction.
            </p>
            <p>
                It is by no means a complete solution, but it's been eye-opening in just how complex this topic - which many outsiders consider trivial - actually is.
                I'm planning on revisiting it at some point again; I believe the main issue I've faced is an over reliance on built-in rigidbody physics and collision detection;
                what I've learned is that vehicle physics, especially for wheeled vehicles such as cars, mandate that all interactions with the physics world are performed using bespoke mechanisms and approximations
                instead of the main rigidbody solver and triangle geometry (e.g. how raycasts and distance functions offer a smoother collision response for wheels than using the general physics hit event).
            </p>
        </>,
        image: carPhysics,
        textWidth: '45%',
        technologies: [<img src={godotLogo} {...alt('Godot Engine')} />, <img src={blenderLogo} {...alt('Blender')} />],
    },
    {
        title: 'Survive the Hunt',
        subtitle: <PortfolioProductDetails link={'https://github.com/tomezpl/sth-gamemode'} company={'Video game modding'} dates={['2021', 'present']} />,
        brief: [
            {
                text: () => <>
                    <p>
                        Survive the Hunt is a custom gamemode I've built in FiveM, the community-made multiplayer client for Grand Theft Auto V.
                    </p>
                    <p>
                        The idea came from watching the YouTube channel "FailRace", who popularised this mode while playing GTA Online on console.
                        However, I felt that this would be difficult for ordinary gamers to enjoy without a coordinated group, as there was no guarantee players would follow the rules (whereas the FailRace group were tight-knit and therefore could agree on fair play for content creation purposes).
                        Hence, the goal was to implement the ruleset as a FiveM script, adding the constraints and restrictions needed to guarantee a fair experience for all players.
                    </p>
                    <p>
                        At its core, the script implements the basic ruleset: a "hunted" player is picked at random. They're hidden from the hunters' radar and given a one minute headstart to establish an initial position and strategy.
                        During that prep phase, "hunters" are prevented from leaving the starting area. After that, the hunted player needs to survive 24 minutes (12 in-game hours) in the city while their approximate location is broadcast to the hunters every minute.
                    </p>
                </>,
                image: sthShort,
                textWidth: '45%'
            },
            {
                text: () => <>
                    <p>
                        I don't necessarily consider this project critical to my career in any way, and it was born more out of my own interest in trying the gamemode with my friends,
                        but despite that I still found I gained some knowledge and skill from developing it over the years.
                    </p>
                    <p>
                        For one, working on the project I had the opportunity to delve deeper into the game design side of things, specifically balancing in a competitive multiplayer context.
                        It's not something I get to do a lot, and it's not something I see myself working in, but I feel like it provided me with a perspective on how to gauge player satisfaction,
                        how feedback affects future iterations of a product, timescales, the QA process, and so on. In fact, in some areas I began to slightly deviate from the original concept
                        and added or adjusted features/rules as necessary based on playtesting feedback.
                    </p>
                    <p>
                        From the technical side of things, most of the code boils down to calling functions from the game's executable in my C# code in order to update the player, world or HUD state as needed,
                        so it was more analogous to tasks performed by mission scripters (with the added caveat of having to interface with the game from external code).
                    </p>
                </>,
                image: sthShort,
                textWidth: '45%'
            }
        ],
        technologies: [<img src={csharpLogo} {...alt('C#')} />]
    },
    {
        title: 'LepusEngine',
        subtitle: <PortfolioProductDetails link={'https://github.com/tomezpl/LepusEngine'} company={'Self learning'} dates={['2023', 'present']} />,
        technologies: [<img src={cppLogo} {...alt('C/C++')} />, <img src={vkLogo} {...alt('Vulkan')} />, <img src={openGlLogo} {...alt('OpenGL & GLSL')} />],
        brief: () => <>
            <p>
                This is a toy 3D engine I've been writing in my spare time for the purposes of learning C++ and graphics programming.
            </p>
            <p>
                I've initially started tinkering with OpenGL around 2017 and got a basic OpenGL renderer working, but unfortunately it suffered from tech debt due to my lacking C++ knowledge.
                In 2023 I revisited the project and decided to rewrite it from scratch.
            </p>
            <p>
                Currently, the engine can render a demo app with basic animated primitives, and it can use either of the two backends (OpenGL or Vulkan) with only minimal dependencies.
                I've been using this project as an opportunity to brush up on my understanding of low-level programming and architectures.
            </p>
            <p>
                I try to limit the project's reliance on the standard library and math helpers to a minimum, implementing utility code on my own until I feel that it's becoming unfeasible.
            </p>
            <p>
                By far the biggest challenge in the project was getting to grips with resource management, synchronisation and overall API design in Vulkan, but graphics programming has always been an area
                I wanted to explore, so learning about those topics bit by bit has been fascinating.
            </p>
        </>,
        textWidth: '50%',
        image: lepusDemoApp
    }
];