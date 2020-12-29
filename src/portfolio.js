
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Syahrin Seth",
  title: "Hi, I'm Syahrin",
  subTitle: emoji("A Fullstack Engineer 🚀 having an experience of building Web and Mobile applications with JavaScript / VueJs / Nodejs / Flutter / Laravel / NuxtJs / PHP and some other cool libraries and frameworks."),
  resumeLink: ""
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/syahrinseth",
  linkedin: "https://www.linkedin.com/in/syahrinseth/",
  gmail: "syahrinsethservices@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/syahrinseth",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta"
  youtube: "https://www.youtube.com/channel/UCcmzFrj2rv8nO8RY07rov8Q?view_as=subscriber",
  instagram: "https://www.instagram.com/syahrinseth/",
  twitter: "https://www.twitter.com/syahrinseth"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "FULL STACK ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Develop Mobile Applications for iOS & Android with Flutter framework"),
    emoji("⚡ Develop Backend Web Applications / API with Laravel or Lumen framework"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "digital-ocean",
      fontAwesomeClassname: "fab fa-digital-ocean"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "r-language",
      fontAwesomeClassname: "fab fa-r-project"
    },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Management and Science University",
      logo: require("./assets/images/msu.jpg"),
      subHeader: "Bachelor in Bioinformatics (Hons)",
      duration: "July 2014 - July 2017",
      desc: "Participated in the research of XXX and published 1 papers.",
      descBullets: [
        "Participated in the JBK Hackathon 2017 and achieved fourth place for developing an Auction based Web Application in 24 hours."
      ]
    },
    {
      schoolName: "MSU Collage (PTPL Shah Alam)",
      logo: require("./assets/images/msu.jpg"),
      subHeader: "Diploma in Medical Laboratory Technology",
      duration: "2010 - 2013",
      desc: "",
      descBullets: [
        
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design",  //Insert stack or technology you have experience in
      progressPercentage: "50%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "Dev Ops",
      progressPercentage: "45%"
    },
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "System Analyst",
      company: "MZR Global",
      companylogo: require("./assets/images/mzrLogo.png"),
      date: "November 2019 – Present",
      desc: "As a System Analyst in the company, my responsibility is to use analysis and design techniques to solve business problems using information technology. I also develop web and mobile applications to automate most mundane tasks to improve efficiency.",
      descBullets: [
      ]
    },
    {
      role: "Indie Hacker",
      company: "Syahrin Seth Services",
      companylogo: require("./assets/images/syahrinSethServicesLogo.png"),
      date: "October 2019 - Present",
      desc: "As an Indie Hacker, my job scope is as follows:",
      descBullets: [
        "Freelance Full-stack Engineer",
        "Freelance Dev Ops Engineer"
      ]
    },
    {
      role: "Full-stack Web Developer",
      company: "Phenotech Sdn Bhd",
      companylogo: require("./assets/images/pheontechLogo.png"),
      date: "July 2017 – October 2019",
      desc: "As a Web Developer in the company, My responsibility is to develops web applications for clients."
    },
    {
      role: "Bioinformaticians Intern",
      company: "University Of Malaya",
      companylogo: require("./assets/images/umLogo.png"),
      date: "February 2017 – July 2017",
      desc: ""
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "syahrinseth", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/elmezaHomeLogo.png"),
      link: "http://elmezahome.com/"
    },
    {
      image: require("./assets/images/kindygoLogo.png"),
      link: "http://kindygo.com/"
    },
    {
      image: require("./assets/images/thinkMediaLogo.png"),
      link: "http://thinkmedia.com.my/"
    },
    {
      image: require("./assets/images/gePowerLogo.png"),
      link: "http://geossbilling.syahrinseth.com/"
    },
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.syahrinseth.com/create-your-own-vpn/",
      title: "Create your own VPN",
      description: "VPN stands for Virtual Private Network, it let you secure your privacy by routing your internet traffic through an encrypted tunnel to a distant server. The problem with the VPN services out there is we didn’t know what these VPN Services companies do to your personal information and your web traffic data."
    },
    {
      url: "https://blog.syahrinseth.com/10-things-every-junior-web-developer-should-know/",
      title: "10 Things Every Junior Web Developer Should Know",
      description: "I often find myself learning new technology every once in a while to keep up with the ever fast phase of web technology every year. Technology changes fast, and one of the best ways to keep up is to be comfortable with learning new things. But as for entry-level web developer, conquering basic technology first is the way to go. Here is the list of technology that needed to learn as an entry-level web developer."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+60127042807",
  email_address: "syahrinsethservices@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "syahrinseth"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
