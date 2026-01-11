import blog_pic_1 from './blog_pic_1.png';
import blog_pic_2 from './blog_pic_2.png';
import blog_pic_3 from './blog_pic_3.png';
import blog_pic_4 from './blog_pic_4.png';
import blog_pic_5 from './blog_pic_5.png';
import blog_pic_6 from './blog_pic_6.png';
import blog_pic_7 from './blog_pic_7.png';
import blog_pic_8 from './blog_pic_8.png';
import blog_pic_9 from './blog_pic_9.png';
import blog_pic_10 from './blog_pic_10.png';

import facebook_icon from './facebook_icon.svg';
import googleplus_icon from './googleplus_icon.svg';
import twitter_icon from './twitter_icon.svg';
import logo from './logo.svg';
import CampusHive from './CampusHive.png';
import arrow from './arrow.svg';
import logo_light from './logo_light.svg';
import blog_icon from './blog_icon.png';
import add_icon from './add_icon.svg';
import list_icon from './list_icon.svg';
import email_icon from './email_icon.png';
import upload_area from './upload_area.svg';
import user_icon from './user_icon.svg';
import bin_icon from './bin_icon.svg';
import comment_icon from './comment_icon.svg';
import tick_icon from './tick_icon.svg';
import star_icon from './star_icon.svg';
import cross_icon from './cross_icon.svg';
import home_icon from './home_icon.svg';
import gradientBackground from './gradientBackground.png';
import blogicon from './blogicon.svg';
import comments_icons from './comments_icons.svg';
import drafts from './drafts.svg';
import dashboard_icon_4 from './dashboard_icon_4.svg';

export const assets = {
  facebook_icon,
  googleplus_icon,
  twitter_icon,
  logo,
  CampusHive,
  arrow,
  logo_light,
  blog_icon,
  add_icon,
  email_icon,
  upload_area,
  user_icon,
  bin_icon,
  comment_icon,
  tick_icon,
  star_icon,
  cross_icon,
  home_icon,
  gradientBackground,
  list_icon,
  blogicon,
  comments_icons,
  drafts,
  dashboard_icon_4,
};

/* 🎓 STUDENT CATEGORIES */
export const blogCategories = [
  'All',

  'Projects',
  'Internships',
  'Placements',
  'Experiences',
  'Career',
  'Student Life'
];


/* 📚 STUDENT BLOG DATA */
export const blog_data = [
  {
    _id: "1",
    title: "How I cracked my first internship as a fresher",
    subTitle: "A practical roadmap for beginners",
    category: "Internships",
    image: blog_pic_1,
    isPublished: true,
    description: `
      <h2>My Internship Journey</h2>
      <p>This article explains how I prepared my resume, applied strategically,
      and cleared interviews despite having no prior experience.</p>
      <h3>Key Learnings</h3>
      <ul>
        <li>Strong fundamentals</li>
        <li>Projects over certificates</li>
        <li>Networking on LinkedIn</li>
      </ul>
    `,
    createdAt: "2025-04-21"
  },
  {
    _id: "2",
    title: "Clean notes strategy for exams",
    subTitle: "How to revise smartly before exams",
    category: "Notes",
    image: blog_pic_2,
    isPublished: true,
    description: `
      <h2>Smart Note-Taking</h2>
      <p>Well-structured notes help in faster revision and clarity.
      This post explains digital + handwritten hybrid techniques.</p>
    `,
    createdAt: "2025-04-22"
  },
  {
    _id: "3",
    title: "Final year project ideas that impress recruiters",
    subTitle: "Project ideas with real-world impact",
    category: "Projects",
    image: blog_pic_3,
    isPublished: true,
    description: `
      <h2>Project Selection Guide</h2>
      <p>Choose projects that solve real problems and showcase your skills.
      MERN, AI, ML, and DevOps ideas included.</p>
    `,
    createdAt: "2025-04-23"
  },
  {
    _id: "4",
    title: "Placement preparation roadmap (6 months)",
    subTitle: "DSA, projects, and communication",
    category: "Placements",
    image: blog_pic_4,
    isPublished: true,
    description: `
      <h2>Placement Strategy</h2>
      <p>This roadmap balances DSA, system design, and mock interviews
      with realistic timelines.</p>
    `,
    createdAt: "2025-04-24"
  },
  {
    _id: "5",
    title: "Balancing college, skills, and mental health",
    subTitle: "A student survival guide",
    category:  "Student Life",
    image: blog_pic_5,
    isPublished: true,
    description: `
      <h2>Student Wellbeing</h2>
      <p>Burnout is real. Learn how to manage time, expectations,
      and mental health during college life.</p>
    `,
    createdAt: "2025-04-25"
  }
];

/* 💬 STUDENT COMMENTS */
export const comments_data = [
  {
    _id: "c1",
    blog: blog_data[0],
    name: "Ananya R",
    content: "Very motivating! This gave me clarity on internship preparation.",
    isApproved: true,
    createdAt: "2025-04-26"
  },
  {
    _id: "c2",
    blog: blog_data[2],
    name: "Rahul K",
    content: "Project ideas are really practical. Thanks!",
    isApproved: true,
    createdAt: "2025-04-27"
  }
];

/* 📊 ADMIN DASHBOARD */
export const dashboard_data = {
  blogs: blog_data.length,
  comments: comments_data.length,
  drafts: 1,
  recentBlogs: blog_data.slice(0, 5)
};

/* 🔗 FOOTER */
export const footer_data = [
  {
    title: "Quick Links",
    links: ["Home", "About", "Categories", "Contact", "Privacy Policy"]
  },
  {
    title: "Student Resources",
    links: ["Internships", "Projects", "Placements", "Career Guidance", "FAQs"]
  },
  {
    title: "Community",
    links: ["Peer Learning", "Mentorship", "Events", "Discussions"]
  }
];
