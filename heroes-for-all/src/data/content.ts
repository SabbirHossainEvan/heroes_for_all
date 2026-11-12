/**
 * Site content for Heroes For All.
 * Source: https://heroesforall.org/ (verified via direct inspection).
 * Do not fabricate statistics, testimonials, or outcomes.
 */

import type { LucideIcon } from "lucide-react";
import {
  GraduationCap,
  Accessibility,
  School,
  Users,
  Camera,
  Globe2,
  HeartPulse,
  TreePine,
  Gift,
  TrendingUp,
  Briefcase,
} from "lucide-react";
import programMedia from "./program-media.json";

/* ------------------------------------------------------------------ */
/* Mission & Vision                                                    */
/* ------------------------------------------------------------------ */

export const missionStatement =
  "The mission of Heroes For All is to support children and youth to become morally responsible and conscious global citizens by realizing their fullest potential and building a purposeful life through active civic engagement, informed life choices, and global connectivity.";

export const visionStatement =
  "Transforming communities through conscious, purposeful and engaged global citizens. Heroes For All promises to engage our youth to become the best version of themselves through developing their moral values and sense of civic responsibilities, believing in their own potentials, and cultivating a positive mindset to improve and build their intellectual, emotional, creative and physical abilities.";

export const heroQuotes = [
  "There is no exercise better for the heart than reaching down and lifting people up.",
  "Connecting people is a beginning but working together is the key to success.",
  "Every sunrise is an invitation for us to arise and brighten somewhere someone's day.",
];

/* ------------------------------------------------------------------ */
/* Founding Story                                                       */
/* ------------------------------------------------------------------ */

export const foundingStory = {
  year: "2016",
  place: "College at Brockport, State University of New York",
  lead: "Dr. Rehnuma Karim",
  body: [
    "In March 2016, twenty-two students from the Non-Profit Management class at the College at Brockport, State University of New York, collaborated with Dr. Rehnuma Karim to design a non-profit organization. Their goal was to provide support in communities to help youth understand the benefits of a purposeful life.",
    "The students identified gaps that demanded attention: more than 40% high-school dropout rates in the United States, rising teen pregnancy and drug abuse (150 young people died of heroin overdose in 2016 alone), depression, and the underutilization of youth's creative energy. Disengaged young people were seeking stimulation through negative life choices.",
    "They decided to build a platform to help youth become well-informed and responsible citizens by discovering their individual and collective strengths through activities connected to their interests, home life, school, community, and the world. That platform became Heroes For All.",
  ],
};

export const timeline = [
  { year: "2016", title: "Established a school", description: "Heroes For All's first school project laid the foundation for our education mission." },
  { year: "2017", title: "Arranged Camp Abilities", description: "In partnership with Camp Abilities USA, we brought our first sports camp for visually impaired children to Bangladesh." },
  { year: "2018", title: "Organized Paara Utshob", description: "Launched our flagship community engagement festival to revive neighborhood spaces." },
  { year: "2019", title: "Helped Needy People", description: "Expanded direct relief, gift distribution, and emergency support to vulnerable families." },
  { year: "2020", title: "Pandemic Response", description: "Pivoted to COVID-19 relief, delivering food, supplies, and remote learning support." },
];

export const targetGroups = [
  "All Children and Youth (13–25 years)",
  "Parents",
  "Teachers",
  "Community Members",
  "Local Government",
];

export const strategicObjectives = [
  "Focus on youth development under the domains of individual, community, and global awareness.",
  "Build a common platform with interested individuals, organizations, and community members.",
  "Develop programs that instill leadership for youth to emerge as positive forces of change.",
  "Develop collaborative inclusive recreational and educational programs for marginalized and disabled children and youth.",
  "Maximize positive impact on the age group 13 to 25 through collaborations with other organizations and educational institutes.",
  "Build awareness on positive use of leisure time.",
  "Provide opportunities for internship, action research, and volunteering.",
  "Organize fundraising events for program funding.",
  "Develop and publish educational books, literature, and communication materials.",
];

export const expectedOutcomes = [
  "Enhanced physical, social and psychological well-being.",
  "Development of positive mindset becoming resilient, proactive and responsible adults.",
  "Acquisition of life and career skills to become effective citizens.",
  "Development of creative, innovative and entrepreneurial global workforce.",
  "Better communities led by conscious, empathetic and ethical future leaders.",
  "Vibrant communities with creative and productive space.",
  "Building a future generation with united worldview geared toward sustainability.",
];

/* ------------------------------------------------------------------ */
/* Impact Statistics                                                    */
/* ------------------------------------------------------------------ */

export const impactStats = [
  { value: "500", label: "Schools", suffix: "" },
  { value: "30", label: "Universities", suffix: "" },
  { value: "150", label: "Collaborations", suffix: "" },
  { value: "10,000", label: "Youth", suffix: "" },
];

export const impactDisclaimer =
  "Projected targets for the next strategic phase. Verified to the extent disclosed in the organization's public materials.";

/* ------------------------------------------------------------------ */
/* Programs                                                             */
/* ------------------------------------------------------------------ */

export type Program = {
  slug: string;
  title: string;
  category: "Education" | "Community" | "Culture" | "Relief" | "Environment";
  excerpt: string;
  description: string;
  objectives: string[];
  activities: string[];
  icon: LucideIcon;
  image?: string;
  gallery?: string[];
  featured?: boolean;
};

export const programs: Program[] = [
  {
    slug: "knowledge-sessions",
    title: "Knowledge Sessions",
    image: programMedia["knowledge-sessions"].image,
    gallery: programMedia["knowledge-sessions"].gallery,
    category: "Education",
    excerpt: "Workshops and seminars that equip youth with life, career, and civic skills.",
    description:
      "Knowledge Sessions are Heroes For All's flagship educational format — interactive workshops that bring students, educators, and practitioners into the same room to explore purpose, civic responsibility, and informed life choices. Each session is grounded in the organization's Human Curriculum and Growth Mindset framework.",
    objectives: [
      "Build awareness of positive life choices among youth aged 13–25.",
      "Connect classroom learning with community realities.",
      "Cultivate a growth mindset that values learning for its own sake.",
    ],
    activities: [
      "Quarterly knowledge sessions hosted at partner universities.",
      "Peer-led discussion circles on civic engagement.",
      "Guest talks from practitioners across disciplines.",
    ],
    icon: GraduationCap,
    featured: true,
  },
  {
    slug: "camp-abilities-bangladesh",
    title: "Camp Abilities Bangladesh",
    image: programMedia["camp-abilities-bangladesh"].image,
    gallery: programMedia["camp-abilities-bangladesh"].gallery,
    category: "Community",
    excerpt: "A developmental sports camp for visually impaired children, in partnership with Camp Abilities USA.",
    description:
      "Heroes For All, in collaboration with Camp Abilities USA, organized Camp Abilities Bangladesh 2018 — a developmental sports camp for children who are visually impaired, blind, or deaf-blind. Dr. Lauren Lieberman, Dr. Megan Irwin, and Dr. Ali Brian briefed volunteers, camp counselors, and executive bodies on how to guide visually impaired children. The camp was discussed at North South University with volunteers from different universities and institutions.",
    objectives: [
      "Provide a safe, empowering sports environment for visually impaired children.",
      "Train local volunteers and counselors in adaptive physical education.",
      "Build cross-cultural collaboration between US and Bangladeshi institutions.",
    ],
    activities: [
      "Multi-day residential sports camp with trained counselors.",
      "Volunteer onboarding and orientation at North South University.",
      "Partnership with Assistance for Blind Children (ABC).",
    ],
    icon: Accessibility,
    featured: true,
  },
  {
    slug: "school-project",
    title: "School Project",
    image: programMedia["school-project"].image,
    gallery: programMedia["school-project"].gallery,
    category: "Education",
    excerpt: "Making a school is the key to unlocking the world — building schools where they are needed most.",
    description:
      "The Heroes For All School Project builds educational infrastructure in underserved communities, with the conviction that a school is the key to unlocking the world for the next generation. Each school becomes a long-term anchor for community development, knowledge sessions, and mentorship programs.",
    objectives: [
      "Build and outfit schools in underserved communities.",
      "Anchor each school as a long-term hub for community programs.",
      "Connect schools to the wider Heroes For All network of mentors and partners.",
    ],
    activities: [
      "Site identification and community consultation.",
      "Construction and outfitting of classrooms.",
      "Ongoing programmatic partnership with the school administration.",
    ],
    icon: School,
    featured: true,
  },
  {
    slug: "paara-utshob",
    title: "Community Engagement – Paara Utshob",
    image: programMedia["paara-utshob"].image,
    gallery: programMedia["paara-utshob"].gallery,
    category: "Community",
    excerpt: "A neighborhood festival that revives public spaces and brings communities together.",
    description:
      "Paara Utshob — the neighborhood festival — is Heroes For All's flagship community engagement program. By reclaiming public spaces for celebration, art, and dialogue, the festival turns a 'paara' (neighborhood) into a creative commons where children, parents, and elders reconnect with one another.",
    objectives: [
      "Revive underused neighborhood spaces as community commons.",
      "Create intergenerational dialogue between youth and elders.",
      "Surface local creative talent through open stages and exhibitions.",
    ],
    activities: [
      "Annual neighborhood festivals across partner communities.",
      "Open-mic and youth art showcases.",
      "Community-led cleanups and beautification drives.",
    ],
    icon: Users,
    featured: true,
  },
  {
    slug: "photo-palooza",
    title: "Photo Palooza",
    image: programMedia["photo-palooza"].image,
    gallery: programMedia["photo-palooza"].gallery,
    category: "Culture",
    excerpt: "A celebration of youth photography and visual storytelling.",
    description:
      "Photo Palooza gives young photographers a public platform to share how they see their communities. Through workshops, exhibitions, and competitions, the program builds technical skill and visual literacy while amplifying youth voices.",
    objectives: [
      "Train young people in visual storytelling and photojournalism.",
      "Provide a public exhibition platform for emerging photographers.",
      "Document community life through youth perspectives.",
    ],
    activities: [
      "Photography workshops with established practitioners.",
      "Annual exhibition and competition.",
      "Publishing of youth photo essays.",
    ],
    icon: Camera,
  },
  {
    slug: "cross-cultural-programs",
    title: "Cross-Cultural Programs",
    image: programMedia["cross-cultural-programs"].image,
    gallery: programMedia["cross-cultural-programs"].gallery,
    category: "Culture",
    excerpt: "International exchange of ideas, students, and practice across borders.",
    description:
      "Heroes For All's Cross-Cultural Programs build bridges between students, educators, and practitioners in Bangladesh and the wider world. The programs bring international experts into local contexts and send Bangladeshi youth outward to learn, exchange, and represent their communities.",
    objectives: [
      "Facilitate international exchange of ideas and practice.",
      "Connect Bangladeshi youth with global peers and mentors.",
      "Host visiting practitioners for knowledge transfer.",
    ],
    activities: [
      "Visiting expert series with academic and practitioner partners.",
      "Student exchange and shadowing opportunities.",
      "Joint research and publications.",
    ],
    icon: Globe2,
  },
  {
    slug: "covid-19-relief",
    title: "COVID-19 Relief",
    image: programMedia["covid-19-relief"].image,
    gallery: programMedia["covid-19-relief"].gallery,
    category: "Relief",
    excerpt: "Emergency food, supplies, and remote-learning support for families during the pandemic.",
    description:
      "When the pandemic hit, Heroes For All pivoted to direct community relief — distributing food, essential supplies, and remote-learning materials to families most affected by lockdowns. The program also supported students cut off from school with the tools needed to keep learning.",
    objectives: [
      "Deliver emergency food and essential supplies to vulnerable families.",
      "Support remote learning for students without devices or connectivity.",
      "Coordinate with local government to reach underserved areas.",
    ],
    activities: [
      "Food and supply distribution drives.",
      "Device and connectivity support for students.",
      "Volunteer-led community check-ins.",
    ],
    icon: HeartPulse,
  },
  {
    slug: "tree-plantation",
    title: "Tree Plantation",
    image: programMedia["tree-plantation"].image,
    gallery: programMedia["tree-plantation"].gallery,
    category: "Environment",
    excerpt: "Environmental stewardship through community-led tree plantation drives.",
    description:
      "Heroes For All's Tree Plantation program is a long-term investment in the environmental health of partner communities. Youth volunteers lead plantation drives that combine environmental education with tangible, lasting impact on local green cover.",
    objectives: [
      "Increase green cover in partner communities.",
      "Build environmental awareness among youth volunteers.",
      "Track and maintain trees after plantation.",
    ],
    activities: [
      "Seasonal plantation drives led by youth volunteers.",
      "Environmental education sessions in schools.",
      "Long-term stewardship of planted trees.",
    ],
    icon: TreePine,
  },
  {
    slug: "eid-gift-distribution",
    title: "Eid Gift Distribution",
    image: programMedia["eid-gift-distribution"].image,
    gallery: programMedia["eid-gift-distribution"].gallery,
    category: "Relief",
    excerpt: "Sharing the joy of Eid with children and families who need it most.",
    description:
      "Each Eid, Heroes For All volunteers distribute gifts — clothing, food, and treats — to children and families in underserved communities. The program is a tangible expression of the organization's commitment to community upliftment and shared joy.",
    objectives: [
      "Distribute Eid gifts to children in underserved communities.",
      "Build relationships with families across partner neighborhoods.",
      "Create moments of shared celebration and dignity.",
    ],
    activities: [
      "Annual Eid gift drives.",
      "Volunteer-led distribution events.",
      "Partnerships with local community organizations.",
    ],
    icon: Gift,
  },
  {
    slug: "rise-to-independence",
    title: "Rise to Independence",
    image: programMedia["rise-to-independence"].image,
    gallery: programMedia["rise-to-independence"].gallery,
    category: "Education",
    excerpt: "Empowering youth with the skills, mentorship, and confidence to live self-reliant lives.",
    description:
      "Rise to Independence is Heroes For All's youth empowerment program, focused on the transition from dependency to self-reliance. Through apprenticeships, mentorship, and skills training, the program helps young people build the toolkit — and the confidence — to live purposeful, independent lives.",
    objectives: [
      "Equip youth with life and career skills for self-reliance.",
      "Provide apprenticeship and shadowing opportunities.",
      "Build confidence through mentorship and guided practice.",
    ],
    activities: [
      "Apprenticeship placements with partner organizations.",
      "Life-skills workshops covering finance, communication, and planning.",
      "Mentorship pairings with established professionals.",
    ],
    icon: TrendingUp,
  },
  {
    slug: "womens-career-carnival",
    title: "Women's Career Carnival",
    image: programMedia["womens-career-carnival"].image,
    gallery: programMedia["womens-career-carnival"].gallery,
    category: "Culture",
    excerpt: "A celebration and convening of women in the workforce, from students to senior leaders.",
    description:
      "The Women's Career Carnival is a public convening that celebrates women in the workforce and creates a platform for the next generation to learn from those who came before them. Through panels, showcases, and one-on-one mentoring, the carnival connects students with established professionals across industries.",
    objectives: [
      "Celebrate and amplify women's contributions to the workforce.",
      "Connect young women with mentors and role models.",
      "Surface career pathways across industries.",
    ],
    activities: [
      "Annual carnival with panels, exhibitions, and networking.",
      "One-on-one mentoring sessions.",
      "Showcases of women-led businesses and projects.",
    ],
    icon: Briefcase,
  },
];

/* ------------------------------------------------------------------ */
/* Campaigns / Fundraisers                                             */
/* ------------------------------------------------------------------ */

export type Campaign = {
  slug: string;
  title: string;
  category: string;
  description: string;
  raised: number;
  goal: number;
  status: "active" | "completed";
  image?: string;
  featured?: boolean;
};

export const campaigns: Campaign[] = [
  {
    slug: "camp-abilities-2025",
    title: "Camp Abilities 2025",
    category: "Community",
    description:
      "Support the next edition of our developmental sports camp for visually impaired children — bringing adaptive physical education, mentorship, and joy to a new cohort of campers.",
    raised: 12100,
    goal: 12000,
    status: "completed",
    image: "/images/campaigns/camp-abilities.jpg",
    featured: true,
  },
  {
    slug: "shafat-memorial-school",
    title: "Shafat Memorial School",
    category: "Education",
    description:
      "Help us complete the Shafat Memorial School — a permanent educational anchor for an underserved community, and the latest in our long-term school-building mission.",
    raised: 27860,
    goal: 42000,
    status: "active",
    image: "/images/campaigns/shafat-memorial-school.jpg",
    featured: true,
  },
  {
    slug: "community-hub",
    title: "Community Hub",
    category: "Community",
    description:
      "Build a multi-purpose community hub that hosts knowledge sessions, mentorship circles, and neighborhood gatherings — a permanent home for Heroes For All's community work.",
    raised: 18000,
    goal: 30000,
    status: "active",
    image: "/images/campaigns/community-hub.jpg",
    featured: true,
  },
];

export const presetDonationAmounts = [25, 50, 100, 250, 500];

/* ------------------------------------------------------------------ */
/* Team & Board                                                         */
/* ------------------------------------------------------------------ */

export type TeamMember = {
  name: string;
  role: string;
  email?: string;
  category: "leadership" | "executive";
  bio?: string;
  image?: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Rehnuma Karim",
    role: "Founder and President",
    email: "rehnuma.karim@heroesforall.org",
    category: "leadership",
    image: "/images/team/rehnuma-karim.jpg",
    bio: "After completing her Ph.D. from the School of Health and Human Development at Penn State, she joined the College at Brockport, State University of New York, as a faculty member. Her interest in helping children and young people realize their potential started during her undergraduate years, when she was one of the founder members of AIESEC Bangladesh — a local branch of an international student organization. She was further intrigued by the area when she started her first job at UNICEF Bangladesh and was given the responsibility to spearhead the first-ever Youth Forum in 1999. Realizing the lack of a sense of purpose and interest in learning for learning's sake among most of her students at the college and in schools, she decided to start Heroes For All. Her mission: \"To support children and young people to become conscious and aware global citizens who would know how to utilize their true potential to create a better world.\" Quote she lives by: \"Be yourself — not your idea of what you think somebody else's idea of yourself should be.\" — Henry David Thoreau",
  },
  { name: "Irfat Ali Shilpi", role: "General Secretary", email: "ifrat.ahmed@heroesforall.org", category: "executive", image: "/images/team/irfat-ali-shilpi.jpg" },
  { name: "Mahmuda Mannan", role: "Chief Financial Officer and Treasurer", email: "mahmuda.mannan@heroesforall.org", category: "executive", image: "/images/team/mahmuda-mannan.jpg" },
  { name: "Yeasrib Hassan", role: "Chief Project Coordinator", email: "yeasrib.hasan@heroesforall.org", category: "executive", image: "/images/team/yeasrib-hassan.jpg" },
  { name: "Syed Md. Abu Saleh", role: "Internal Affairs Manager", email: "abu.symon@heroesforall.org", category: "executive", image: "/images/team/abu-saleh-symon.jpg" },
  { name: "Sadman Hasan", role: "External Affairs Coordinator", email: "sadman.hn@heroesforall.org", category: "executive", image: "/images/team/sadman-hasan.jpg" },
  { name: "Musa Karim Ripon", role: "Development Administrator", email: "musa.ripon@heroesforall.org", category: "executive", image: "/images/team/musa-karim-ripon.jpg" },
  { name: "Fatema Rahman Rakhe", role: "Community Affairs Coordinator", email: "rakhee.rahman@heroesforall.org", category: "executive", image: "/images/team/fatema-rahman-rakhe.jpg" },
  { name: "Mahmud Kabir Irfat", role: "Research & Evaluation Coordinator", email: "mkabir.irfat@heroesforall.org", category: "executive", image: "/images/team/mahmud-kabir-irfat.jpg" },
  { name: "Sazzad Sohel", role: "Senior Executive, IT Consultant", email: "sazzad@heroesforall.org", category: "executive", image: "/images/team/sazzad-sohel.jpg" },
  { name: "Abu Osman", role: "Digital Communication Officer", email: "osman.abu@heroesforall.org", category: "executive", image: "/images/team/abu-osman.jpg" },
  { name: "Md. Mahruf Hasan (Nishir)", role: "Finance Officer", category: "executive", image: "/images/team/mahruf-hasan.jpg" },
  { name: "Aninda Srijan Osman", role: "PR & Communication Officer", category: "executive", image: "/images/team/aninda-osman.jpg" },
  { name: "Faizah Anika Eerina", role: "Communication & Fundraising Specialist Officer", category: "executive", image: "/images/team/faizah-anika-eerina.jpg" },
];

/* ------------------------------------------------------------------ */
/* Partners                                                             */
/* ------------------------------------------------------------------ */

export type Partner = {
  name: string;
  category: "Sponsor" | "Programmatic" | "Academic" | "Media";
  logo?: string;
};

export const partners: Partner[] = [
  { name: "BRAC Bank",                          category: "Sponsor",      logo: "/images/partners/brac-bank.jpg" },
  { name: "Qatar Airways",                      category: "Sponsor",      logo: "/images/partners/qatar-airways.png" },
  { name: "City Bank",                          category: "Sponsor",      logo: "/images/partners/city-bank.jpg" },
  { name: "Islam Group",                        category: "Sponsor",      logo: "/images/partners/islam-group.jpg" },
  { name: "Triple Apparels Limited",            category: "Sponsor",      logo: "/images/partners/triple-apparels.jpg" },
  { name: "Plummy Fashions Limited",            category: "Sponsor",      logo: "/images/partners/plummy-fashions.jpg" },
  { name: "Lakeshore Hotels",                   category: "Sponsor",      logo: "/images/partners/galaxy.jpg" },
  { name: "Star Youth",                         category: "Sponsor",      logo: "/images/partners/star-youth.jpg" },
  { name: "The Daily Star",                     category: "Media",        logo: "/images/partners/daily-star.jpg" },
  { name: "Assistance for Blind Children (ABC)", category: "Programmatic", logo: "/images/partners/abc.jpg" },
  { name: "Camp Abilities USA",                 category: "Programmatic" },
  { name: "North South University",             category: "Academic" },
  { name: "College at Brockport, SUNY",         category: "Academic" },
  { name: "Penn State University",              category: "Academic" },
  { name: "GlobalGiving",                       category: "Programmatic" },
];

/* ------------------------------------------------------------------ */
/* News & Stories                                                       */
/* ------------------------------------------------------------------ */

export type NewsArticle = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  body: string[];
  image?: string;
  featured?: boolean;
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "jamal-sees-football-differently",
    title: "Jamal sees football from a different perspective",
    excerpt:
      "At Camp Abilities Bangladesh, Jamal discovered that football is as much about listening as it is about seeing. His story captures what the camp means to the children who attend.",
    date: "2025-09-15",
    category: "Camp Abilities",
    image: "/images/hero/social-camp-abilities.jpg",
    body: [
      "Jamal arrived at Camp Abilities Bangladesh nervous and quiet. By the end of the week, he was leading his team's warmups.",
      "For Jamal, football had always seemed out of reach — a sport that belonged to children who could see. At camp, he learned that the game is as much about listening as it is about seeing, and that his instincts on the field were sharpened, not diminished, by the way he moves through the world.",
      "His story is one of dozens from Camp Abilities Bangladesh, where the goal is not to teach children to be like everyone else, but to help them discover what they already are.",
    ],
    featured: true,
  },
  {
    slug: "eid-with-ashic-warriors",
    title: "Heroes For All sharing the joy of Eid with brave little warriors at ASHIC Foundation",
    excerpt:
      "Our volunteers spent Eid with the children of ASHIC Foundation, sharing gifts, food, and an afternoon of celebration.",
    date: "2025-06-10",
    category: "Community Engagement",
    image: "/images/campaigns/food-distribution.jpg",
    body: [
      "This Eid, Heroes For All volunteers visited the ASHIC Foundation to share the joy of the holiday with the brave little warriors in their care.",
      "The day included gift distribution, an afternoon of games and storytelling, and a shared meal. For the children, it was an afternoon of celebration. For the volunteers, it was a reminder of why the organization exists.",
    ],
  },
  {
    slug: "paara-utshob-2024-recap",
    title: "Paara Utshob 2024: A neighborhood, reimagined",
    excerpt:
      "Our 2024 neighborhood festival brought together hundreds of residents for two days of art, music, and intergenerational dialogue.",
    date: "2024-11-20",
    category: "Community Engagement",
    image: "/images/hero/social-paara-utshab.jpg",
    body: [
      "Paara Utshob 2024 turned a neighborhood in Dhaka into a two-day commons for art, music, food, and dialogue.",
      "Hundreds of residents — children, parents, elders, and visiting artists — moved through open mics, youth photography exhibitions, community-led cleanups, and shared meals.",
      "The festival is the clearest expression of Heroes For All's belief that public space, when reclaimed by the people who live in it, becomes the foundation of community.",
    ],
  },
  {
    slug: "tree-plantation-2024",
    title: "Youth volunteers plant 1,200 trees across three communities",
    excerpt:
      "Our 2024 plantation drive combined environmental education with tangible, lasting green cover in three partner communities.",
    date: "2024-08-05",
    category: "Environment",
    image: "/images/programs/tree-plantation.jpg",
    body: [
      "Heroes For All's 2024 Tree Plantation drive brought youth volunteers into three partner communities to plant 1,200 trees.",
      "Each plantation was paired with an environmental education session in the local school, ensuring that the next generation understands both the how and the why of environmental stewardship.",
      "The trees will be maintained by community stewards, with Heroes For All tracking survival rates over the coming years.",
    ],
  },
  {
    slug: "womens-career-carnival-2024-recap",
    title: "Women's Career Carnival 2024: A platform, a network, a path forward",
    excerpt:
      "Students and senior leaders filled the hall for a full day of panels, mentoring, and showcases of women-led work.",
    date: "2024-03-25",
    category: "Community Engagement",
    image: "/images/programs/womens-career-carnival.jpg",
    body: [
      "The 2024 Women's Career Carnival brought students and senior leaders into the same hall for a full day of panels, one-on-one mentoring, and showcases of women-led work.",
      "For the students in attendance, the day was a chance to see pathways they had not previously imagined. For the leaders, it was a chance to invest in the generation coming up behind them.",
      "The carnival is one of Heroes For All's clearest expressions of its mission: connecting youth with the people and ideas that help them build purposeful lives.",
    ],
  },
  {
    slug: "covid-19-relief-recap",
    title: "Looking back: COVID-19 Relief and what we learned",
    excerpt:
      "How Heroes For All pivoted to direct relief during the pandemic — and what the experience taught us about community.",
    date: "2023-12-12",
    category: "Covid-19 Relief",
    image: "/images/news/achieving-sdg.jpg",
    body: [
      "When the pandemic hit, Heroes For All paused most of its regular programming and pivoted to direct community relief.",
      "Volunteers distributed food, essential supplies, and remote-learning materials to families most affected by lockdowns. We supported students cut off from school with the devices and connectivity needed to keep learning.",
      "The experience taught us that the same network of youth volunteers, partners, and community relationships that powers our regular programs can be redirected, in a crisis, toward direct relief. That flexibility is now a permanent part of how we operate.",
    ],
  },
];

export const videoGallery = [
  {
    title: "Camp Abilities Bangladesh — Recap",
    duration: "4:32",
    description: "A short film from the first Camp Abilities Bangladesh, held in 2017 in partnership with Camp Abilities USA.",
    thumbnail: "video-camp-abilities",
  },
  {
    title: "Paara Utshob — A Neighborhood, Reimagined",
    duration: "6:18",
    description: "How a neighborhood in Dhaka became a two-day commons for art, music, food, and dialogue.",
    thumbnail: "video-paara-utshob",
  },
  {
    title: "Heroes For All — Our Story",
    duration: "3:05",
    description: "The story of how twenty-two students at SUNY Brockport built a platform that became Heroes For All.",
    thumbnail: "video-our-story",
  },
  {
    title: "Women's Career Carnival — Highlights",
    duration: "5:41",
    description: "Highlights from a full day of panels, mentoring, and showcases of women-led work.",
    thumbnail: "video-womens-carnival",
  },
];

/* ------------------------------------------------------------------ */
/* Annual Reports                                                       */
/* ------------------------------------------------------------------ */

export const annualReports = [
  {
    year: "2024",
    title: "Annual Report 2024",
    summary:
      "A summary of Heroes For All's programs, partnerships, and finances for 2024. Includes verified impact data and audited financials where available.",
    documentUrl: "#",
    available: false,
  },
  {
    year: "2023",
    title: "Annual Report 2023",
    summary:
      "Programs, partnerships, and finances for 2023, including a recap of the COVID-19 relief wind-down and the return to regular programming.",
    documentUrl: "#",
    available: false,
  },
  {
    year: "2022",
    title: "Annual Report 2022",
    summary:
      "A summary of Heroes For All's work in 2022, including the continuation of pandemic-era relief and the launch of new community programs.",
    documentUrl: "#",
    available: false,
  },
];

export const reportsDisclaimer =
  "Annual report documents from the original site were not directly accessible at build time. Links will be populated from the original source once verified.";

/* ------------------------------------------------------------------ */
/* FAQ                                                                  */
/* ------------------------------------------------------------------ */

export const faqItems = [
  {
    question: "What is Heroes For All?",
    answer:
      "Heroes For All is a youth-focused non-profit organization founded in 2016 by Dr. Rehnuma Karim and a class of twenty-two students at the College at Brockport, State University of New York. The organization supports children and youth aged 13–25 to become conscious, purposeful, and engaged global citizens through education, community engagement, and cross-cultural collaboration.",
  },
  {
    question: "Where is Heroes For All based?",
    answer:
      "Heroes For All is registered in the United States with a contact address at 160 Evergreen Road, Brockport, NY. Its operations are primarily in Dhaka, Bangladesh, and adjacent areas, with the potential to expand throughout Bangladesh as resources permit.",
  },
  {
    question: "Who can become a student member?",
    answer:
      "Student membership is open to youth aged 13–25 who want to participate in Heroes For All's programs, mentorship circles, and volunteer opportunities. Visit the Student Membership page under Get Involved to learn more.",
  },
  {
    question: "How can my organization partner with Heroes For All?",
    answer:
      "Heroes For All partners with corporations, academic institutions, media organizations, and programmatic partners. Visit the Corporate Partnership page under Get Involved to start a conversation.",
  },
  {
    question: "How are donations used?",
    answer:
      "Donations are directed to the campaign or program selected at the time of giving. Heroes For All publishes annual reports that summarize programs, partnerships, and finances. Where a third-party donation platform is used (such as GlobalGiving), the platform's own reporting applies.",
  },
  {
    question: "Is Heroes For All a registered non-profit?",
    answer:
      "Heroes For All is described in its founding documents as a non-profitable, non-political, and charitable organization. For specific registration details, please contact info@heroesforall.org.",
  },
  {
    question: "Can I volunteer if I am not in Bangladesh?",
    answer:
      "Yes. Heroes For All runs cross-cultural programs and remote volunteer opportunities. Visit the Volunteer page under Get Involved to see current openings and remote options.",
  },
  {
    question: "How do I contact Heroes For All?",
    answer:
      "You can reach Heroes For All by email at info@heroesforall.org, by phone at +1 (585) 474 4729, or by mail at 160 Evergreen Road, Brockport, NY. The Contact page includes a form for direct inquiries.",
  },
];

/* ------------------------------------------------------------------ */
/* Upcoming Events                                                      */
/* ------------------------------------------------------------------ */

export const upcomingEvents = [
  {
    title: "Camp Abilities Bangladesh 2025",
    date: "2025-12-15",
    location: "Dhaka, Bangladesh",
    description:
      "The next edition of our developmental sports camp for visually impaired children, in partnership with Camp Abilities USA.",
    status: "open",
  },
  {
    title: "Knowledge Sessions — Winter Cohort",
    date: "2025-11-10",
    location: "North South University, Dhaka",
    description:
      "Our quarterly knowledge session series returns for the winter cohort, with workshops on civic engagement and informed life choices.",
    status: "open",
  },
  {
    title: "Paara Utshob 2025",
    date: "2025-12-22",
    location: "Community partner site, Dhaka",
    description:
      "Our flagship neighborhood festival returns for a new edition. Open to the public.",
    status: "open",
  },
];

/* ------------------------------------------------------------------ */
/* Volunteer / Membership info                                          */
/* ------------------------------------------------------------------ */

export const volunteerRoles = [
  "Program volunteer — support on-the-ground delivery of programs like Paara Utshob and Eid Gift Distribution.",
  "Knowledge Sessions volunteer — help organize and facilitate quarterly sessions at partner universities.",
  "Communications volunteer — support storytelling, photography, and social media.",
  "Research & Evaluation volunteer — contribute to data collection and impact reporting.",
];

export const membershipBenefits = [
  "Priority access to Heroes For All programs and events.",
  "Eligibility for peer mentorship circles and apprenticeship placements.",
  "Discounted or free entry to ticketed events like the Women's Career Carnival.",
  "A network of like-minded youth across Bangladesh and the diaspora.",
];

export const corporatePartnershipTiers = [
  {
    name: "Program Partner",
    description: "Co-fund a single program or campaign, with branded recognition across the program's touchpoints.",
  },
  {
    name: "Strategic Partner",
    description: "Multi-year partnership across multiple programs, with shared reporting and impact reviews.",
  },
  {
    name: "Event Partner",
    description: "Sponsor a single flagship event, such as Paara Utshob or the Women's Career Carnival.",
  },
];
