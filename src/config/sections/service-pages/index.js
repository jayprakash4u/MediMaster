import {
  appDevelopmentHero,
  contentWritingHero,
  digitalMarketingHero,
  ecommerceHero,
  graphicDesignHero,
  itOutsourcingHero,
  seoHero,
  serverManagementHero,
  smmHero,
  systemSoftwareHero,
  uiUxHero,
  websiteDevHero,
  websiteMaintenanceHero,
} from "@/config/heroes/service";
import {
  appDevelopmentFloatingIcons,
  contentWritingFloatingIcons,
  digitalMarketingFloatingIcons,
  ecommerceFloatingIcons,
  graphicDesignFloatingIcons,
  itOutsourcingFloatingIcons,
  seoFloatingIcons,
  serverManagementFloatingIcons,
  smmFloatingIcons,
  systemSoftwareFloatingIcons,
  uiUxFloatingIcons,
  websiteDevFloatingIcons,
  websiteMaintenanceFloatingIcons,
} from "@/config/heroes/floating-icons";
import {
  WEB_DEV_HIGHLIGHTS,
  WEB_DEV_PROCESS,
  WEB_DEV_STATS,
  WEBSITE_DEV_DETAIL,
  WEBSITE_TYPES,
} from "@/config/sections/website-development";
import { appTypes } from "@/components/pages/services/app-development/AppDevelopmentTypesSection";
import { seoTypes } from "@/components/pages/services/seo/SEOTypesSection";
import { smmTypes } from "@/components/pages/services/smm/SMMTypesSection";
import { uiuxTypes } from "@/components/pages/services/ui-ux/UIUXTypesSection";
import { contentTypes } from "@/components/pages/services/content-writing/ContentTypesSection";
import { softwareTypes } from "@/components/pages/services/system-software-development/SystemSoftwareTypesSection";
import { digitalMarketingServices } from "@/components/pages/services/digital-marketing/DigitalMarketingTypesSection";
import { ecommerceTypes } from "@/components/pages/services/ecommerce-solution/EcommerceTypesSection";
import { itOutsourcingServices } from "@/components/pages/services/it-outsourcing/ITOutsourcingTypesSection";
import { serverServices } from "@/components/pages/services/server-management/ServerTypesSection";
import { maintenanceServices } from "@/components/pages/services/website-maintenance/MaintenanceTypesSection";
import { designTypes } from "@/components/pages/services/graphic-design/DesignServicesSection";
import { APP_DEVELOPMENT_PROCESS } from "@/components/pages/services/app-development/AppDevRoadmap";
import { SEO_PROCESS } from "@/components/pages/services/seo/SEORoadmap";
import { SMM_PROCESS } from "@/components/pages/services/smm/SMMRoadmap";
import { UI_UX_PROCESS } from "@/components/pages/services/ui-ux/UIUXRoadmap";
import { CONTENT_WRITING_PROCESS } from "@/components/pages/services/content-writing/ContentWritingRoadmap";
import { GRAPHIC_DESIGN_PROCESS } from "@/components/pages/services/graphic-design/GraphicDesignRoadmap";
import { SYSTEM_SOFTWARE_PROCESS } from "@/components/pages/services/system-software-development/SystemSoftwareRoadmap";
import {
  DIGITAL_MARKETING_PROCESS,
  ECOMMERCE_PROCESS,
  IT_OUTSOURCING_PROCESS,
  SERVER_MANAGEMENT_PROCESS,
  WEBSITE_MAINTENANCE_PROCESS,
} from "./process-defaults";
import { DEFAULT_CTA, DEFAULT_ROADMAP_HEADER, DEFAULT_STATS } from "./shared";

function pageConfig({
  hero,
  floatingIcons,
  activeHref,
  detail,
  highlights,
  stats = DEFAULT_STATS,
  types,
  process,
  cta = DEFAULT_CTA,
  roadmapHeader = DEFAULT_ROADMAP_HEADER,
}) {
  return {
    hero,
    floatingIcons,
    intro: { activeHref, detail, highlights, stats },
    types,
    process,
    cta,
    roadmapHeader,
  };
}

export const websiteDevelopmentPage = pageConfig({
  hero: websiteDevHero,
  floatingIcons: websiteDevFloatingIcons,
  activeHref: "/services/website-development",
  detail: WEBSITE_DEV_DETAIL,
  highlights: WEB_DEV_HIGHLIGHTS,
  stats: WEB_DEV_STATS,
  types: {
    eyebrow: "Website types",
    title: "Solutions we",
    highlight: "craft",
    types: WEBSITE_TYPES,
  },
  process: WEB_DEV_PROCESS,
  cta: {
    ...DEFAULT_CTA,
    title: "Ready to launch a website that works?",
  },
});

export const appDevelopmentPage = pageConfig({
  hero: appDevelopmentHero,
  floatingIcons: appDevelopmentFloatingIcons,
  activeHref: "/services/app-development",
  detail: {
    title: "App Development Services",
    description:
      "Build powerful, scalable mobile applications that engage users and drive business growth. From concept to deployment across iOS and Android platforms, we create seamless, high-performance apps tailored to your unique requirements.",
    imageSrc: "/services/shared/web development.png",
    imageAlt: "App Development",
  },
  highlights: [
    "Native and cross-platform apps for iOS and Android",
    "Scalable architecture with modern frameworks",
    "App Store and Play Store deployment support",
    "Post-launch updates and performance monitoring",
  ],
  types: {
    eyebrow: "App types",
    title: "Mobile apps we",
    highlight: "build",
    types: appTypes,
  },
  process: APP_DEVELOPMENT_PROCESS,
  cta: {
    ...DEFAULT_CTA,
    title: "Ready to build your mobile app?",
  },
});

export const seoPage = pageConfig({
  hero: seoHero,
  floatingIcons: seoFloatingIcons,
  activeHref: "/services/seo",
  detail: {
    title: "Search Engine Optimization",
    description:
      "Boost your website's visibility in search results with our comprehensive SEO strategies. From keyword research and content optimization to technical SEO audits and link building, we help you rank higher and drive organic traffic.",
    imageSrc: "/services/shared/Search Engine Optimization (SEO).png",
    imageAlt: "SEO",
  },
  highlights: [
    "Technical SEO audits and on-page optimization",
    "Keyword research and content strategy",
    "Link building and authority growth",
    "Monthly reporting with actionable insights",
  ],
  types: {
    eyebrow: "SEO services",
    title: "Strategies we",
    highlight: "implement",
    types: seoTypes,
  },
  process: SEO_PROCESS,
  cta: {
    ...DEFAULT_CTA,
    title: "Ready to rank higher in search?",
  },
});

export const smmPage = pageConfig({
  hero: smmHero,
  floatingIcons: smmFloatingIcons,
  activeHref: "/services/smm",
  detail: {
    title: "Social Media Marketing",
    description:
      "Build your brand presence and engage with your audience across social platforms. From content creation and community management to paid advertising campaigns, we drive growth and meaningful connections for your business.",
    imageSrc: "/services/smm/social media m.jpg",
    imageAlt: "Social Media Marketing",
  },
  highlights: [
    "Platform-specific content and campaigns",
    "Community management and engagement",
    "Paid social advertising and retargeting",
    "Analytics and performance reporting",
  ],
  types: {
    eyebrow: "SMM services",
    title: "Channels we",
    highlight: "manage",
    types: smmTypes,
  },
  process: SMM_PROCESS,
  cta: {
    ...DEFAULT_CTA,
    title: "Ready to grow your social presence?",
  },
});

export const uiUxPage = pageConfig({
  hero: uiUxHero,
  floatingIcons: uiUxFloatingIcons,
  activeHref: "/services/ui-ux",
  detail: {
    title: "UI/UX Design Services",
    description:
      "Design intuitive, engaging, and user-centered digital experiences that drive conversions and delight users. From wireframes to interactive prototypes, we craft seamless interfaces that align with your business goals.",
    imageSrc: "/brand/ui-ux.jpg",
    imageAlt: "UI/UX Design",
  },
  highlights: [
    "User research and journey mapping",
    "Wireframes, prototypes, and design systems",
    "Accessibility and responsive design",
    "Developer-ready handoff and specs",
  ],
  types: {
    eyebrow: "Design services",
    title: "Experiences we",
    highlight: "design",
    types: uiuxTypes,
  },
  process: UI_UX_PROCESS,
  cta: {
    ...DEFAULT_CTA,
    title: "Ready to improve your user experience?",
  },
});

export const contentWritingPage = pageConfig({
  hero: contentWritingHero,
  floatingIcons: contentWritingFloatingIcons,
  activeHref: "/services/content-writing",
  detail: {
    title: "Content Writing Services",
    description:
      "Engage your audience with compelling, high-quality content that drives results. From blog posts and web copy to technical documentation and marketing materials, our expert writers craft content that converts.",
    imageSrc: "/services/shared/content writing.png",
    imageAlt: "Content Writing",
  },
  highlights: [
    "SEO-optimized web copy and blog content",
    "Technical and product documentation",
    "Brand voice and tone consistency",
    "Editing, proofreading, and content strategy",
  ],
  types: {
    eyebrow: "Content types",
    title: "Writing we",
    highlight: "deliver",
    types: contentTypes,
  },
  process: CONTENT_WRITING_PROCESS,
  cta: {
    ...DEFAULT_CTA,
    title: "Ready for content that converts?",
  },
});

export const systemSoftwarePage = pageConfig({
  hero: systemSoftwareHero,
  floatingIcons: systemSoftwareFloatingIcons,
  activeHref: "/services/system-software-development",
  detail: {
    title: "System / Software Development",
    description:
      "We engineer robust, scalable, and high-performance software systems tailored to your business needs — from desktop applications and backend services to enterprise-grade platforms and embedded solutions.",
    imageSrc: "/services/system-software/softwaredeveloplayout.jpg",
    imageAlt: "System Software Development",
  },
  highlights: [
    "Custom software and enterprise systems",
    "API development and system integration",
    "Scalable backend and cloud architecture",
    "Security, testing, and long-term support",
  ],
  types: {
    eyebrow: "Software types",
    title: "Systems we",
    highlight: "engineer",
    types: softwareTypes,
  },
  process: SYSTEM_SOFTWARE_PROCESS,
  cta: {
    ...DEFAULT_CTA,
    title: "Ready to build your software system?",
  },
});

export const graphicDesignPage = pageConfig({
  hero: graphicDesignHero,
  floatingIcons: graphicDesignFloatingIcons,
  activeHref: "/services/graphic-design",
  detail: {
    title: "Graphic Design Services",
    description:
      "Create stunning visuals that communicate your brand story — from logos, brand identities, and marketing materials to UI mockups, illustrations, and print-ready designs crafted with precision and creativity.",
    imageSrc: "/brand/graphic-design.png",
    imageAlt: "Graphic Design",
  },
  highlights: [
    "Logo design and brand identity systems",
    "Marketing collateral and social graphics",
    "Print-ready and digital asset delivery",
    "Consistent visual language across channels",
  ],
  types: {
    eyebrow: "Design services",
    title: "Visuals we",
    highlight: "create",
    types: designTypes,
  },
  process: GRAPHIC_DESIGN_PROCESS,
  roadmapHeader: {
    ...DEFAULT_ROADMAP_HEADER,
    phase1Label: "Phase 1 — Discovery",
    phase2Label: "Phase 2 — Production",
  },
  cta: {
    ...DEFAULT_CTA,
    title: "Ready to elevate your brand visuals?",
  },
});

export const digitalMarketingPage = pageConfig({
  hero: digitalMarketingHero,
  floatingIcons: digitalMarketingFloatingIcons,
  activeHref: "/services/digital-marketing",
  detail: {
    title: "Digital Marketing Services",
    description:
      "Drive growth and maximize your online presence with our full-spectrum digital marketing services. From SEO and social media to paid ads, email campaigns, and analytics, we build data-driven strategies that deliver measurable results.",
    imageSrc: "/services/digital-marketing/d1.jpg",
    imageAlt: "Digital Marketing",
  },
  highlights: [
    "Integrated multi-channel marketing strategies",
    "SEO, PPC, social, and email campaigns",
    "Data-driven targeting and optimization",
    "Transparent reporting and ROI tracking",
  ],
  types: {
    eyebrow: "Marketing services",
    title: "Campaigns we",
    highlight: "run",
    types: digitalMarketingServices,
  },
  process: DIGITAL_MARKETING_PROCESS,
  cta: {
    ...DEFAULT_CTA,
    title: "Ready to grow your online presence?",
  },
});

export const ecommercePage = pageConfig({
  hero: ecommerceHero,
  floatingIcons: ecommerceFloatingIcons,
  activeHref: "/services/ecommerce-solution",
  detail: {
    title: "E-Commerce Solution Services",
    description:
      "Build and scale your online store with our comprehensive e-commerce solutions. From custom development to multi-vendor marketplaces, we deliver secure, scalable platforms that drive sales and growth.",
    imageSrc: "/services/Ecommerce/layouimage.png",
    imageAlt: "E-Commerce Solution",
  },
  highlights: [
    "Custom stores and marketplace platforms",
    "Secure payment and shipping integrations",
    "Inventory and order management systems",
    "Conversion optimization and analytics",
  ],
  types: {
    eyebrow: "Store types",
    title: "Platforms we",
    highlight: "build",
    types: ecommerceTypes,
  },
  process: ECOMMERCE_PROCESS,
  cta: {
    ...DEFAULT_CTA,
    title: "Ready to launch your online store?",
  },
});

export const itOutsourcingPage = pageConfig({
  hero: itOutsourcingHero,
  floatingIcons: itOutsourcingFloatingIcons,
  activeHref: "/services/it-outsourcing",
  detail: {
    title: "IT Outsourcing Services",
    description:
      "Leverage our end-to-end IT outsourcing services to reduce costs, improve efficiency, and focus on your core business. From infrastructure management to dedicated support teams, we handle your technology needs.",
    imageSrc: "/services/IT%20Outsourcing/layoutimg.png",
    imageAlt: "IT Outsourcing",
  },
  highlights: [
    "Dedicated remote IT teams and support",
    "Infrastructure and cloud management",
    "Cost-effective scaling without hiring overhead",
    "SLA-backed service with clear accountability",
  ],
  types: {
    eyebrow: "Outsourcing services",
    title: "Solutions we",
    highlight: "provide",
    types: itOutsourcingServices,
  },
  process: IT_OUTSOURCING_PROCESS,
  cta: {
    ...DEFAULT_CTA,
    title: "Ready to outsource your IT operations?",
  },
});

export const serverManagementPage = pageConfig({
  hero: serverManagementHero,
  floatingIcons: serverManagementFloatingIcons,
  activeHref: "/services/server-management",
  detail: {
    title: "Server Management Services",
    description:
      "End-to-end server infrastructure management — from setup and security to monitoring, backups, scaling, and DNS. We keep your systems fast, secure, and always online.",
    imageSrc: "/services/server-management/Server Setup & Configuration.jpg",
    imageAlt: "Server Management",
  },
  highlights: [
    "Server setup, configuration, and hardening",
    "24/7 monitoring with proactive alerts",
    "Automated backups and disaster recovery",
    "Performance tuning and scaling support",
  ],
  types: {
    eyebrow: "Server services",
    title: "Infrastructure we",
    highlight: "manage",
    types: serverServices,
  },
  process: SERVER_MANAGEMENT_PROCESS,
  cta: {
    ...DEFAULT_CTA,
    title: "Ready for reliable server management?",
  },
});

export const websiteMaintenancePage = pageConfig({
  hero: websiteMaintenanceHero,
  floatingIcons: websiteMaintenanceFloatingIcons,
  activeHref: "/services/website-maintenance",
  detail: {
    title: "Website Maintenance Services",
    description:
      "Keep your healthcare website secure, up-to-date, and always available. Our maintenance service ensures reliable hosting performance, security updates, backups, and technical support.",
    imageSrc: "/services/Website%20maintainence/mentaincne%20image.jpg",
    imageAlt: "Website Maintenance",
  },
  highlights: [
    "Daily backups and security patch management",
    "Speed optimization and uptime monitoring",
    "Content updates and technical fixes",
    "24/7 support for critical issues",
  ],
  types: {
    eyebrow: "Maintenance plans",
    title: "Care we",
    highlight: "provide",
    types: maintenanceServices,
  },
  process: WEBSITE_MAINTENANCE_PROCESS,
  cta: {
    ...DEFAULT_CTA,
    title: "Ready to keep your site running smoothly?",
  },
});

export const SERVICE_PAGES = {
  "website-development": websiteDevelopmentPage,
  "app-development": appDevelopmentPage,
  seo: seoPage,
  smm: smmPage,
  "ui-ux": uiUxPage,
  "content-writing": contentWritingPage,
  "system-software-development": systemSoftwarePage,
  "graphic-design": graphicDesignPage,
  "digital-marketing": digitalMarketingPage,
  "ecommerce-solution": ecommercePage,
  "it-outsourcing": itOutsourcingPage,
  "server-management": serverManagementPage,
  "website-maintenance": websiteMaintenancePage,
};
