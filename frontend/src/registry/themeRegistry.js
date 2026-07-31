/**
 * Theme Registry
 * Maps theme ID → { component, config, preview }
 * Every theme consumes the same `data` prop — pluggable architecture
 */

import AuroraTheme           from "../components/themes/AuroraTheme";
import MinimalistTheme       from "../components/themes/MinimalistTheme";
import EditorialTheme        from "../components/themes/EditorialTheme";
import NeonTerminalTheme     from "../components/themes/NeonTerminalTheme";
import BrutalistTheme        from "../components/themes/BrutalistTheme";
import NeumorphicTheme       from "../components/themes/NeumorphicTheme";
import KineticTheme          from "../components/themes/KineticTheme";
import ExecutiveTheme        from "../components/themes/ExecutiveTheme";
import RetroWaveTheme        from "../components/themes/RetroWaveTheme";
import OrganicTheme          from "../components/themes/OrganicTheme";
import BentoTheme            from "../components/themes/BentoTheme";
import DarkLuxeTheme         from "../components/themes/DarkLuxeTheme";
import AppleVisionTheme      from "../components/themes/AppleVisionTheme";
import BlueprintTheme        from "../components/themes/BlueprintTheme";
import Cyberpunk2077Theme    from "../components/themes/Cyberpunk2077Theme";
import AIAssistantTheme      from "../components/themes/AIAssistantTheme";
import Interactive3DTheme    from "../components/themes/Interactive3DTheme";
import TimelineJourneyTheme  from "../components/themes/TimelineJourneyTheme";
import DashboardPortfolioTheme from "../components/themes/DashboardPortfolioTheme";
import SpaceExplorerTheme    from "../components/themes/SpaceExplorerTheme";
import InfiniteCanvasTheme   from "../components/themes/InfiniteCanvasTheme";
import StorybookTheme        from "../components/themes/StorybookTheme";
import SpotifyWrappedTheme   from "../components/themes/SpotifyWrappedTheme";
import NetflixPortfolioTheme from "../components/themes/NetflixPortfolioTheme";
import GoogleMapsPortfolioTheme from "../components/themes/GoogleMapsPortfolioTheme";
import ComicBookTheme        from "../components/themes/ComicBookTheme";
import TerminalOSTheme       from "../components/themes/TerminalOSTheme";
import NewspaperTheme        from "../components/themes/NewspaperTheme";
import MuseumTheme           from "../components/themes/MuseumTheme";
import HackerMatrixTheme     from "../components/themes/HackerMatrixTheme";

const THEME_REGISTRY = {
  aurora: {
    id: "aurora",
    name: "Aurora",
    persona: "Creative generalist",
    description: "Glassmorphism, animated gradient mesh, dreamy layers",
    colors: { bg: "#0D0D1A", accent: "#A78BFA", text: "#E8E8FF" },
    tags: ["Creative", "Visual", "Artistic"],
    component: AuroraTheme,
    preview: {
      bg: "linear-gradient(135deg, #0D0D1A 0%, #1A0D2E 50%, #0D1A2E 100%)",
      accent: "#A78BFA",
    },
  },
  minimalist: {
    id: "minimalist",
    name: "Minimalist",
    persona: "Senior developer / PM",
    description: "Extreme whitespace, Swiss typography, pure clarity",
    colors: { bg: "#FAFAFA", accent: "#111111", text: "#111111" },
    tags: ["Clean", "Professional", "Focused"],
    component: MinimalistTheme,
    preview: {
      bg: "#FAFAFA",
      accent: "#111111",
    },
  },
  editorial: {
    id: "editorial",
    name: "Editorial",
    persona: "Designer / writer",
    description: "Magazine layout, asymmetric grid, bold serif headlines",
    colors: { bg: "#F5F0E8", accent: "#C84B31", text: "#1A1A1A" },
    tags: ["Design", "Editorial", "Print"],
    component: EditorialTheme,
    preview: {
      bg: "#F5F0E8",
      accent: "#C84B31",
    },
  },
  "neon-terminal": {
    id: "neon-terminal",
    name: "Neon Terminal",
    persona: "Developer / hacker",
    description: "Code editor aesthetic, syntax highlighting, CLI vibes",
    colors: { bg: "#0C0C0C", accent: "#00FF41", text: "#00FF41" },
    tags: ["Developer", "Terminal", "Hacker"],
    component: NeonTerminalTheme,
    preview: {
      bg: "#0C0C0C",
      accent: "#00FF41",
    },
  },
  brutalist: {
    id: "brutalist",
    name: "Brutalist",
    persona: "Bold creative / artist",
    description: "Raw, high-contrast, oversized type, deliberate anti-design",
    colors: { bg: "#F5F5F5", accent: "#FF0000", text: "#000000" },
    tags: ["Bold", "Creative", "Provocative"],
    component: BrutalistTheme,
    preview: {
      bg: "#F5F5F5",
      accent: "#FF2D00",
    },
  },
  neumorphic: {
    id: "neumorphic",
    name: "Neumorphic",
    persona: "Product / UI designer",
    description: "Soft shadows, embossed surfaces, tactile depth",
    colors: { bg: "#E8EAF0", accent: "#6366F1", text: "#2D2F36" },
    tags: ["Design", "Soft UI", "Tactile"],
    component: NeumorphicTheme,
    preview: {
      bg: "#E8EAF0",
      accent: "#6366F1",
    },
  },
  kinetic: {
    id: "kinetic",
    name: "Kinetic",
    persona: "Motion designer / frontend",
    description: "Bold color blocks, scroll-driven reveals, magnetic energy",
    colors: { bg: "#050505", accent: "#FFE500", text: "#FFFFFF" },
    tags: ["Motion", "Energy", "Frontend"],
    component: KineticTheme,
    preview: {
      bg: "#050505",
      accent: "#FFE500",
    },
  },
  executive: {
    id: "executive",
    name: "Executive",
    persona: "Consultant / business",
    description: "Navy + gold, corporate gravitas, structured layout",
    colors: { bg: "#0A1628", accent: "#C9A84C", text: "#E8EAF0" },
    tags: ["Business", "Formal", "Professional"],
    component: ExecutiveTheme,
    preview: {
      bg: "#0A1628",
      accent: "#C9A84C",
    },
  },
  "retro-wave": {
    id: "retro-wave",
    name: "Retro Wave",
    persona: "Game dev / creative coder",
    description: "80s synthwave, neon grid, chrome text, perspective grid",
    colors: { bg: "#0A001F", accent: "#FF006E", text: "#FFFFFF" },
    tags: ["Retro", "Gaming", "80s"],
    component: RetroWaveTheme,
    preview: {
      bg: "linear-gradient(180deg, #0A001F 0%, #1A0040 100%)",
      accent: "#FF006E",
    },
  },
  organic: {
    id: "organic",
    name: "Organic",
    persona: "Photographer / wellness",
    description: "Earthy tones, soft curves, big imagery, natural flow",
    colors: { bg: "#F5F0E8", accent: "#6B7C5E", text: "#2C2416" },
    tags: ["Nature", "Wellness", "Photography"],
    component: OrganicTheme,
    preview: {
      bg: "#F5F0E8",
      accent: "#6B7C5E",
    },
  },
  bento: {
    id: "bento",
    name: "Bento Grid",
    persona: "Modern SaaS / startup dev",
    description: "Apple-style modular bento boxes, micro-interactions",
    colors: { bg: "#000000", accent: "#2997FF", text: "#FFFFFF" },
    tags: ["Modern", "SaaS", "Startup"],
    component: BentoTheme,
    preview: {
      bg: "#000000",
      accent: "#2997FF",
    },
  },
  "dark-luxe": {
    id: "dark-luxe",
    name: "Dark Luxe",
    persona: "Freelancer / agency",
    description: "Deep black, gold accents, cinematic, premium feel",
    colors: { bg: "#080808", accent: "#C9A84C", text: "#FFFFFF" },
    tags: ["Luxury", "Cinematic", "Agency"],
    component: DarkLuxeTheme,
    preview: {
      bg: "#080808",
      accent: "#C9A84C",
    },
  },
  "apple-vision": {
    id: "apple-vision",
    name: "Apple Vision",
    persona: "Product Engineer / Apple Enthusiast",
    description: "Frosted glass, floating cards, blur, huge rounded corners",
    colors: { bg: "#0A0A0A", accent: "#E07A9E", text: "#FFFFFF" },
    tags: ["Premium", "Glass", "Elegant"],
    component: AppleVisionTheme,
    preview: {
      bg: "linear-gradient(135deg, #0A0A0A 0%, #1A1A2E 100%)",
      accent: "#E07A9E",
    },
  },
  blueprint: {
    id: "blueprint",
    name: "Blueprint",
    persona: "Mechanical / Civil / Architecture",
    description: "Engineering blueprints, grid overlays, wireframe lines",
    colors: { bg: "#0A1628", accent: "#4FC3F7", text: "#E3F2FD" },
    tags: ["Technical", "Engineering", "Architecture"],
    component: BlueprintTheme,
    preview: {
      bg: "#0A1628",
      accent: "#4FC3F7",
    },
  },
  "cyberpunk-2077": {
    id: "cyberpunk-2077",
    name: "Cyberpunk 2077",
    persona: "AI Engineer / ML Engineer / Robotics",
    description: "Yellow + black, neon, HUD, scanlines, glitch effects",
    colors: { bg: "#0A0A0A", accent: "#FFD700", text: "#FFFFFF" },
    tags: ["Cyberpunk", "Neon", "Hacker"],
    component: Cyberpunk2077Theme,
    preview: {
      bg: "linear-gradient(135deg, #0A0A0A 0%, #1A0A00 100%)",
      accent: "#FFD700",
    },
  },
  "ai-assistant": {
    id: "ai-assistant",
    name: "AI Assistant",
    persona: "Anyone (viral-friendly)",
    description: "ChatGPT-style chat interface, conversational bubbles",
    colors: { bg: "#131314", accent: "#10A37F", text: "#ECECF1" },
    tags: ["Chat", "AI", "Conversational"],
    component: AIAssistantTheme,
    preview: {
      bg: "#131314",
      accent: "#10A37F",
    },
  },
  "interactive-3d": {
    id: "interactive-3d",
    name: "Interactive 3D",
    persona: "3D artist / creative developer",
    description: "Spline/Three.js inspired, floating cards, CSS 3D transforms",
    colors: { bg: "#0A0A0F", accent: "#6C5CE7", text: "#DFE6E9" },
    tags: ["3D", "Interactive", "Creative"],
    component: Interactive3DTheme,
    preview: {
      bg: "linear-gradient(135deg, #0A0A0F 0%, #1A0A2E 100%)",
      accent: "#6C5CE7",
    },
  },
  "timeline-journey": {
    id: "timeline-journey",
    name: "Timeline Journey",
    persona: "Student / career changer",
    description: "Vertical timeline with year markers, scrolly design",
    colors: { bg: "#0F0F1A", accent: "#6366F1", text: "#E8E8F0" },
    tags: ["Timeline", "Student", "Story"],
    component: TimelineJourneyTheme,
    preview: {
      bg: "linear-gradient(180deg, #0F0F1A 0%, #1A0F2E 100%)",
      accent: "#6366F1",
    },
  },
  "dashboard-portfolio": {
    id: "dashboard-portfolio",
    name: "Dashboard Portfolio",
    persona: "Developer / PM",
    description: "GitHub/Linear/Notion style, widgets, stats, data",
    colors: { bg: "#0D1117", accent: "#58A6FF", text: "#C9D1D9" },
    tags: ["Dashboard", "Widgets", "Data"],
    component: DashboardPortfolioTheme,
    preview: {
      bg: "#0D1117",
      accent: "#58A6FF",
    },
  },
  "space-explorer": {
    id: "space-explorer",
    name: "Space Explorer",
    persona: "Dreamer / storyteller",
    description: "Stars, constellations, planets as skills, galaxies as projects",
    colors: { bg: "#05050A", accent: "#7C3AED", text: "#E8E8FF" },
    tags: ["Space", "Visual", "Storytelling"],
    component: SpaceExplorerTheme,
    preview: {
      bg: "#05050A",
      accent: "#7C3AED",
    },
  },
  "infinite-canvas": {
    id: "infinite-canvas",
    name: "Infinite Canvas",
    persona: "Designer / creative thinker",
    description: "Figma/Miro whiteboard style, freely placed rotated notes",
    colors: { bg: "#F0F0F0", accent: "#FF6B6B", text: "#1A1A1A" },
    tags: ["Canvas", "Whiteboard", "Creative"],
    component: InfiniteCanvasTheme,
    preview: {
      bg: "#F0F0F0",
      accent: "#FF6B6B",
    },
  },
  storybook: {
    id: "storybook",
    name: "Storybook",
    persona: "Writer / filmmaker",
    description: "Book aesthetic, page turning, illustrated sections",
    colors: { bg: "#1A1423", accent: "#E8A87C", text: "#F5F0E8" },
    tags: ["Story", "Book", "Cinematic"],
    component: StorybookTheme,
    preview: {
      bg: "linear-gradient(135deg, #1A1423 0%, #2A1A3E 100%)",
      accent: "#E8A87C",
    },
  },
  "spotify-wrapped": {
    id: "spotify-wrapped",
    name: "Spotify Wrapped",
    persona: "Music lover / social sharer",
    description: "Dark + green, animated slides, music-inspired cards",
    colors: { bg: "#121212", accent: "#1DB954", text: "#FFFFFF" },
    tags: ["Music", "Viral", "Animated"],
    component: SpotifyWrappedTheme,
    preview: {
      bg: "#121212",
      accent: "#1DB954",
    },
  },
  "netflix-portfolio": {
    id: "netflix-portfolio",
    name: "Netflix Portfolio",
    persona: "Entertainer / media creator",
    description: "Netflix-style browsing, movie cards, hover scale, rows",
    colors: { bg: "#141414", accent: "#E50914", text: "#FFFFFF" },
    tags: ["Entertainment", "Video", "Cards"],
    component: NetflixPortfolioTheme,
    preview: {
      bg: "#141414",
      accent: "#E50914",
    },
  },
  "google-maps-portfolio": {
    id: "google-maps-portfolio",
    name: "Google Maps Portfolio",
    persona: "Traveler / global professional",
    description: "Google Maps inspired, projects pinned as map locations",
    colors: { bg: "#1A2332", accent: "#EA4335", text: "#E8EAED" },
    tags: ["Maps", "Travel", "Journey"],
    component: GoogleMapsPortfolioTheme,
    preview: {
      bg: "#1A2332",
      accent: "#EA4335",
    },
  },
  "comic-book": {
    id: "comic-book",
    name: "Comic Book",
    persona: "Illustrator / storyteller",
    description: "Comic panels, speech bubbles, halftone dots, onomatopoeia",
    colors: { bg: "#FFF8E7", accent: "#FF3333", text: "#1A1A1A" },
    tags: ["Comic", "Illustration", "Playful"],
    component: ComicBookTheme,
    preview: {
      bg: "#FFF8E7",
      accent: "#FF3333",
    },
  },
  "terminal-os": {
    id: "terminal-os",
    name: "Terminal OS",
    persona: "DevOps / sysadmin / Linux enthusiast",
    description: "Linux terminal, split panes, file explorer, interactive shell",
    colors: { bg: "#0C0C0C", accent: "#00FF41", text: "#00FF41" },
    tags: ["Terminal", "Linux", "DevOps"],
    component: TerminalOSTheme,
    preview: {
      bg: "#0C0C0C",
      accent: "#00FF41",
    },
  },
  newspaper: {
    id: "newspaper",
    name: "Newspaper",
    persona: "Journalist / publisher",
    description: "Vintage newspaper, columns, serif, masthead, BREAKING",
    colors: { bg: "#F5F0E0", accent: "#1A1A1A", text: "#1A1A1A" },
    tags: ["Newspaper", "Vintage", "Print"],
    component: NewspaperTheme,
    preview: {
      bg: "#F5F0E0",
      accent: "#1A1A1A",
    },
  },
  museum: {
    id: "museum",
    name: "Museum",
    persona: "Artist / curator",
    description: "Art gallery, projects in frames, gallery walk, spotlights",
    colors: { bg: "#1A1A1A", accent: "#C9A84C", text: "#FFF8E7" },
    tags: ["Museum", "Art", "Gallery"],
    component: MuseumTheme,
    preview: {
      bg: "linear-gradient(135deg, #1A1A1A 0%, #2A1A1A 100%)",
      accent: "#C9A84C",
    },
  },
  "hacker-matrix": {
    id: "hacker-matrix",
    name: "Hacker Matrix",
    persona: "Cybersecurity / hacker",
    description: "Matrix rain, green on black, nodes, network graph, glitch",
    colors: { bg: "#000000", accent: "#00FF41", text: "#00FF41" },
    tags: ["Matrix", "Hacker", "Cyber"],
    component: HackerMatrixTheme,
    preview: {
      bg: "#000000",
      accent: "#00FF41",
    },
  },
};

export const THEME_GROUPS = {
  "All": [
    "aurora", "minimalist", "editorial", "neon-terminal", "brutalist",
    "neumorphic", "kinetic", "executive", "retro-wave", "organic", "bento",
    "dark-luxe", "apple-vision", "blueprint", "cyberpunk-2077", "ai-assistant",
    "interactive-3d", "timeline-journey", "dashboard-portfolio", "space-explorer",
    "infinite-canvas", "storybook", "spotify-wrapped", "netflix-portfolio",
    "google-maps-portfolio", "comic-book", "terminal-os", "newspaper",
    "museum", "hacker-matrix"
  ],
  "Minimal": ["minimalist", "organic"],
  "Bold": ["brutalist", "kinetic", "retro-wave", "cyberpunk-2077", "comic-book"],
  "Creative": ["aurora", "editorial", "dark-luxe", "interactive-3d", "space-explorer", "infinite-canvas", "storybook"],
  "Professional": ["executive", "neumorphic", "bento", "apple-vision", "blueprint", "dashboard-portfolio"],
  "Developer": ["neon-terminal", "terminal-os", "hacker-matrix", "ai-assistant", "timeline-journey"],
  "Social": ["spotify-wrapped", "netflix-portfolio", "google-maps-portfolio", "newspaper", "museum"],
};

export const getTheme = (id) => THEME_REGISTRY[id] || THEME_REGISTRY["minimalist"];
export const getAllThemes = () => Object.values(THEME_REGISTRY);
export default THEME_REGISTRY;
