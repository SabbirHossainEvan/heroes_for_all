/**
 * Navigation structure for Heroes For All
 * Preserves every destination from the original WordPress site.
 * Grouped logically to reduce cognitive load on the desktop nav.
 */

export type NavLeaf = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href: string;
  description?: string;
  children?: NavLeaf[];
};

export const mainNav: NavGroup[] = [
  {
    label: "About",
    href: "/about/our-story",
    description: "Who we are and why we exist",
    children: [
      { label: "Our Story", href: "/about/our-story", description: "How Heroes For All began" },
      { label: "Strategic Direction", href: "/about/strategic-direction", description: "Our mission, vision, and goals" },
      { label: "Our Team", href: "/about/our-team", description: "Meet the people behind the work" },
      { label: "Board Members", href: "/about/board-members", description: "Our governance leadership" },
      { label: "Our Partners", href: "/about/our-partners", description: "Organizations we work with" },
      { label: "Annual Reports", href: "/about/annual-reports", description: "Transparency and impact data" },
    ],
  },
  {
    label: "Programs",
    href: "/programs",
    description: "Our initiatives across education, community, and culture",
    children: [
      { label: "All Programs", href: "/programs", description: "Browse every initiative" },
      { label: "Knowledge Sessions", href: "/programs/knowledge-sessions", description: "Workshops for youth development" },
      { label: "Camp Abilities Bangladesh", href: "/programs/camp-abilities-bangladesh", description: "Sports camp for visually impaired children" },
      { label: "School Project", href: "/programs/school-project", description: "Building schools to unlock the world" },
      { label: "Community Engagement – Paara Utshob", href: "/programs/paara-utshob", description: "The neighborhood festival and community gathering" },
      { label: "Photo Palooza", href: "/programs/photo-palooza", description: "Youth photography celebration" },
      { label: "Cross-Cultural Programs", href: "/programs/cross-cultural-programs", description: "Global exchange of ideas" },
      { label: "COVID-19 Relief", href: "/programs/covid-19-relief", description: "Emergency community support" },
      { label: "Tree Plantation", href: "/programs/tree-plantation", description: "Environmental stewardship" },
      { label: "Eid Gift Distribution", href: "/programs/eid-gift-distribution", description: "Sharing joy during Eid" },
      { label: "Rise to Independence", href: "/programs/rise-to-independence", description: "Empowering youth self-reliance" },
      { label: "Women's Career Carnival", href: "/programs/womens-career-carnival", description: "Celebrating women in the workforce" },
    ],
  },
  {
    label: "News & Resources",
    href: "/news",
    description: "Press, news, and video",
    children: [
      { label: "News & Articles", href: "/news", description: "Latest updates and stories" },
      { label: "Press Releases", href: "/news/press-releases", description: "Official statements" },
      { label: "Video Gallery", href: "/news/video-gallery", description: "Watch our work in motion" },
      { label: "FAQ", href: "/faq", description: "Answers to common questions" },
      { label: "Upcoming Events", href: "/events", description: "What is happening next" },
    ],
  },
  {
    label: "Get Involved",
    href: "/get-involved",
    description: "Join the movement",
    children: [
      { label: "Student Membership", href: "/get-involved/student-membership", description: "For youth aged 13–25" },
      { label: "Peer Mentorship", href: "/get-involved/peer-mentorship", description: "Guide the next generation" },
      { label: "Corporate Partnership", href: "/get-involved/corporate-partnership", description: "Align your brand with impact" },
      { label: "Volunteer", href: "/get-involved/volunteer", description: "Give your time and skills" },
    ],
  },
  {
    label: "Events",
    href: "/events",
    description: "Upcoming and past activities",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Get in touch",
  },
];

export const ctaNav = {
  label: "Donate",
  href: "/donate",
};

export const footerNav: NavGroup[] = [
  {
    label: "About",
    href: "/about/our-story",
    children: [
      { label: "Our Story", href: "/about/our-story" },
      { label: "Strategic Direction", href: "/about/strategic-direction" },
      { label: "Our Team", href: "/about/our-team" },
      { label: "Board Members", href: "/about/board-members" },
      { label: "Annual Reports", href: "/about/annual-reports" },
    ],
  },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "All Programs", href: "/programs" },
      { label: "Camp Abilities", href: "/programs/camp-abilities-bangladesh" },
      { label: "School Project", href: "/programs/school-project" },
      { label: "Community Engagement – Paara Utshob", href: "/programs/paara-utshob" },
      { label: "Knowledge Sessions", href: "/programs/knowledge-sessions" },
    ],
  },
  {
    label: "Get Involved",
    href: "/get-involved",
    children: [
      { label: "Student Membership", href: "/get-involved/student-membership" },
      { label: "Peer Mentorship", href: "/get-involved/peer-mentorship" },
      { label: "Corporate Partnership", href: "/get-involved/corporate-partnership" },
      { label: "Volunteer", href: "/get-involved/volunteer" },
      { label: "Donate", href: "/donate" },
    ],
  },
  {
    label: "Resources",
    href: "/news",
    children: [
      { label: "News & Articles", href: "/news" },
      { label: "Press Releases", href: "/news/press-releases" },
      { label: "Video Gallery", href: "/news/video-gallery" },
      { label: "FAQ", href: "/faq" },
      { label: "Upcoming Events", href: "/events" },
    ],
  },
];

export const legalNav: NavLeaf[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "FAQ", href: "/faq" },
];

export const contactInfo = {
  address: "160 Evergreen Road, Brockport, NY",
  phone: "+1 (585) 474 4729",
  email: "info@heroesforall.org",
  copyright: "© 2026 Heroes For All — Warriors of Change. All Rights Reserved.",
};

export const socialLinks = {
  facebook: "https://www.facebook.com/Heroesforall",
  instagram: "https://www.instagram.com/heroesforall.inc/",
  youtube: "https://www.youtube.com/@heroesforallinc.018",
  linkedin: "https://www.linkedin.com/company/heroesforall/posts/",
};
