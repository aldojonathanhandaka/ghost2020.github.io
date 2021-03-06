import emoji from "react-easy-emoji";
const greeting = {
  username: "Aldo Jonathan Handaka",
  title: "Hi all, I'm Aldo Jonathan Handaka",
  subTitle: emoji("A simple programmer. Still need more learning"),
};


const socialMediaLinks = {

  github: "https://github.com/aldojonathanhandaka",
  linkedin: "linkedin.com/in/aldo-jonathan-handaka-83406b1b9",
  gmail: "a.jonathan359@gmail.com",
  facebook: "https://www.facebook.com/aldo.gtking",
};

const skillsSection = {
  title: "What i do",
  subTitle: "Learning programming",
  skills: [
    emoji("⚡ Jack of all trade, i can do task outside IT but not that good"),
    emoji("⚡ Quick learner"),
    emoji("⚡ Pretty good at analysis")
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ]
};


const educationInfo = {
  viewEducation: true
  schools: [
    {
      schoolName: "Bina Nusantara University"
      logo: require("./assets/images/BINUS.png"),
      subHeader: "Junior of Science in Computer Science")
      duration: "April 2017 - April 2022"
      ]
    }
  ]
}

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Design"
      progressPercentage: "75%"
    },
    {
      Stack: "Database"
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+62-82211212290",
  email_address: "a.jonathan359@gmail.com"
};

export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, contactInfo};
