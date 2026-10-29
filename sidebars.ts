import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Sidebar per product. Entering a product renders only that product's own
 * sidebar; other products' sections are NOT shown on the left.
 *
 * - EMH-2  -> emh2Sidebar   (EMH-2S reserved, docs not added yet)
 * - EMS-1-P -> ems1pSidebar
 * - EMS-1-C -> ems1cSidebar (EMS-1-L reserved, docs not added yet)
 * - API    -> apiSidebar
 */
const sidebars: SidebarsConfig = {
  // ===================== EMH-2 =====================
  emh2Sidebar: [
    'EMH-2/safety',
    'EMH-2/introduction',
    'EMH-2/quick-start',
    {
      type: 'category',
      label: 'Web Interface',
      collapsed: false,
      items: [
        'EMH-2/device',
        'EMH-2/strategy',
        'EMH-2/monitor',
        'EMH-2/system',
      ],
    },
    {
      type: 'category',
      label: 'App Usage',
      collapsed: false,
      items: ['EMH-2/add-device'],
    },
    'EMH-2/tech-specs',
    // 'EMH-2/integration',
    // 'EMH-2/compatibility',
    // 'EMH-2/faq',
    // 'EMH-2/maintenance',
    // {
    //   type: 'category',
    //   label: 'Technical Support and Service',
    //   link: {type: 'doc', id: 'EMH-2/support'},
    //   items: [
    //     'EMH-2/glossary',
    //     'EMH-2/firmware',
    //   ],
    // },
  ],

  // ===================== EMS-1-P =====================
  ems1pSidebar: [
    'EMS-1-P/preface',
    'EMS-1-P/introduction',
    'EMS-1-P/installation',
    'EMS-1-P/connection',
    'EMS-1-P/system-overview',
    'EMS-1-P/web',
    'EMS-1-P/unienergy',
    'EMS-1-P/tech-specs',
    'EMS-1-P/support',
    'EMS-1-P/feature-list',
    'EMS-1-P/integration-timeline',
    'EMS-1-P/project-level',
  ],

  // ===================== EMS-1-C =====================
  ems1cSidebar: [
    'EMS-1-C/preface',
    'EMS-1-C/introduction',
    'EMS-1-C/installation',
    'EMS-1-C/connection',
    'EMS-1-C/system-overview',
    'EMS-1-C/web',
    'EMS-1-C/unienergy',
    'EMS-1-C/tech-specs',
    'EMS-1-C/support',
    'EMS-1-C/feature-list',
    'EMS-1-C/integration-timeline',
    'EMS-1-C/project-level',
  ],

  // ===================== MR1-D4-WRE =====================
  mr1D4WreSidebar: [
    'MR1-D4-WRE/introduction',
  ],

  // ===================== MR1-D5-WR =====================
  mr1D5WrSidebar: [
    'MR1-D5-WR/introduction',
  ],

  // ===================== API =====================
  apiSidebar: ['API/OpenData'],
};

export default sidebars;
