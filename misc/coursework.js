
// PROJECT TAGS
const CS = 0;
const CSE = 1;
const MISC = 2;

const tagMap = new Map();
tagMap.set(CS,"Computer Science");
tagMap.set(CSE,"Computer Systems Engineering");
tagMap.set(MISC,"Misc.");


var activeTags = new Array(3);
activeTags.fill(false);

var anyTag = false;

const courseList = document.getElementById("course-list");
const courses = [
  {
    title: "Software Engineering",
    grade: "(IP)",
    semester: "Spring 2026",
    link: "https://bulletin.uga.edu/Course/Details/4181",
    tags: [CS]
  },
  {
    title: "Cyber Security",
    grade: "(IP)",
    semester: "Spring 2026",
    link: "https://bulletin.uga.edu/Course/Details/17670"
  },
  {
    title: "Web Programming",
    grade: "(IP)",
    semester: "Spring 2026",
    link: "https://bulletin.uga.edu/Course/Details/13776"
  },
  {
    title: "Experiential Data Science Specialization",
    grade: "(IP)",
    semester: "Spring 2026",
    link: "https://bulletin.uga.edu/Course/Details/45209"
  },
  {
    title: "Algorithms",
    grade: "A",
    semester: "Fall 2025",
    link: "https://bulletin.uga.edu/Course/Details/4360",
    tags: [CS]
  },
  {
    title: "Operating Systems",
    grade: "A",
    semester: "Fall 2025",
    link: "https://bulletin.uga.edu/Course/Details/4253",
    tags: [CS]
  },
  {
    title: "Intermediate Korean I",
    grade: "(IP)",
    semester: "Fall 2025",
    link: "https://bulletin.uga.edu/Course/Details/5425",
    tags: [MISC]
  },
  {
    title: "Afr Am Perc Mus",
    grade: "(IP)",
    semester: "Fall 2025",
    link: "https://bulletin.uga.edu/Course/Details/2259",
    tags: [MISC]
  },
  {
    title: "Computing, Ethics, and Society",
    grade: "A",
    semester: "Summer 2025",
    link: "https://bulletin.uga.edu/Course/Details/38195",
    tags: [CS,MISC]
  },
  {
    title: "Study of Language",
    grade: "A",
    semester: "Summer 2025",
    link: "https://bulletin.uga.edu/Course/Details/29029",
    tags: [MISC]
  },
  {
    title: "Intro to Theory of Computing",
    grade: "A",
    semester: "Spring 2025",
    link: "https://bulletin.uga.edu/Course/Details/4924",
    tags: [CS]
  },
  {
    title: "Computer Architecture and Organization",
    grade: "A",
    semester: "Spring 2025",
    link: "https://bulletin.uga.edu/Course/Details/4922",
    tags: [CSE, CS]
  },
  {
    title: "Advanced Digital Design",
    grade: "A-",
    semester: "Spring 2025",
    link: "https://bulletin.uga.edu/Course/Details/26737",
    tags: [CSE]
  },
  {
    title: "Capstone Design II",
    grade: "A",
    semester: "Spring 2025",
    link: "https://bulletin.uga.edu/Course/Details/34828",
    tags: [CS,CSE]
  },
  {
    title: "Embedded Systems Design II",
    grade: "B+",
    semester: "Spring 2025",
    link: "https://bulletin.uga.edu/Course/Details/35458",
    tags: [CSE]
  },
  {
    title: "Design of Digital Systems",
    grade: "A",
    semester: "Fall 2024",
    link: "https://bulletin.uga.edu/Course/Details/20945",
    tags: [CSE]
  },
  {
    title: "Capstone Design I",
    grade: "A",
    semester: "Fall 2024",
    link: "https://bulletin.uga.edu/Course/Details/33557",
    tags: [CS, CSE]
  },
  {
    title: "Embedded Systems Design I",
    grade: "B",
    semester: "Fall 2024",
    link: "https://bulletin.uga.edu/Course/Details/20726",
    tags: [CSE]
  },
  {
    title: "Linear Systems",
    grade: "A",
    semester: "Fall 2024",
    link: "https://bulletin.uga.edu/Course/Details/3975",
    tags: [MISC]
  },
  {
    title: "Sensors and Transducers",
    grade: "B-",
    semester: "Fall 2024",
    link: "https://bulletin.uga.edu/Course/Details/43541",
    tags: [CSE]
  },
  {
    title: "FFL Swimming",
    grade: "S",
    semester: "Fall 2024",
    link: "https://bulletin.uga.edu/Course/Details/1756",
    tags: [MISC]
  },
  {
    title: "Computer Networks",
    grade: "A",
    semester: "Summer 2024",
    link: "https://bulletin.uga.edu/Course/Details/45549",
    tags: [CS]
  },
  {
    title: "Principles of Macroeconomics",
    grade: "A",
    semester: "Summer 2024",
    link: "https://bulletin.uga.edu/Course/Details/28240",
    tags: [MISC]
  },
  {
    title: "Data Structures",
    grade: "A",
    semester: "Spring 2024",
    link: "https://bulletin.uga.edu/Course/Details/4304",
    tags: [CS,CSE]
  },
  {
    title: "ECSE Design Methodology",
    grade: "A-",
    semester: "Spring 2024",
    link: "https://bulletin.uga.edu/Course/Details/41895",
    tags: [CSE]
  },
  {
    title: "Electronics I",
    grade: "A",
    semester: "Spring 2024",
    link: "https://bulletin.uga.edu/Course/Details/3882",
    tags: [CSE]
  },
  {
    title: "Eng Desicision Making",
    grade: "A",
    semester: "Spring 2024",
    link: "https://bulletin.uga.edu/Course/Details/2548",
    tags: [MISC]
  },
  {
    title: "Systems Programming",
    grade: "A",
    semester: "Fall 2023",
    link: "https://bulletin.uga.edu/Course/Details/12406",
    tags: [CS,CSE]
  },
  {
    title: "Fundamentals of Logic Design",
    grade: "A",
    semester: "Fall 2023",
    link: "https://bulletin.uga.edu/Course/Details/20944",
    tags: [CSE]
  },
  {
    title: "Fundamentals of Circuit Analysis",
    grade: "A-",
    semester: "Fall 2023",
    link: "https://bulletin.uga.edu/Course/Details/42016",
    tags: [CSE]
  },
  {
    title: "Probability and Stat for Engineers",
    grade: "A",
    semester: "Fall 2023",
    link: "https://bulletin.uga.edu/Course/Details/28131",
    tags: [MISC]
  },
  {
    title: "Software Development",
    grade: "A",
    semester: "Summer 2023",
    link: "https://bulletin.uga.edu/Course/Details/4726",
    tags: [CS,CSE]
  },
  {
    title: "Intro to Computing and Programming",
    grade: "A",
    semester: "Spring 2023",
    link: "https://bulletin.uga.edu/Course/Details/4695",
    tags: [CS]
  },
  {
    title: "Discrete Mathematics",
    grade: "A",
    semester: "Spring 2023",
    link: "https://bulletin.uga.edu/Course/Details/26546",
    tags: [CS,CSE]
  },
  {
    title: "Intro to ECSE",
    grade: "A",
    semester: "Spring 2023",
    link: "https://bulletin.uga.edu/Course/Details/41893",
    tags: [CSE]
  },
  {
    title: "Applied Linear Algebra",
    grade: "A",
    semester: "Spring 2023",
    link: "https://bulletin.uga.edu/Course/Details/28109",
    tags: [CS, MISC]
  },
  {
    title: "Intro to Public Speaking",
    grade: "A",
    semester: "Fall 2022",
    link: "https://bulletin.uga.edu/Course/Details/3946",
    tags: [MISC]
  },
  {
    title: "English Composition II",
    grade: "A",
    semester: "Fall 2022",
    link: "https://bulletin.uga.edu/Course/Details/4631",
    tags: [MISC]
  },
  {
    title: "Engineering Statics",
    grade: "A-",
    semester: "Fall 2022",
    link: "https://bulletin.uga.edu/Course/Details/3044",
    tags: [MISC]
  },
  {
    title: "American Government",
    grade: "A",
    semester: "Fall 2022",
    link: "https://bulletin.uga.edu/Course/Details/5651",
    tags: [MISC]
  },
  {
    title: "Freshman Chemistry I",
    grade: "A",
    semester: "Spring 2022",
    link: "https://bulletin.uga.edu/Course/Details/5241",
    tags: [MISC]
  },
  {
    title: "Freshman Chemistry Lab I",
    grade: "A-",
    semester: "Spring 2022",
    link: "https://bulletin.uga.edu/Course/Details/5242",
    tags: [MISC]
  },
  {
    title: "Engineering Graphics and Design",
    grade: "A",
    semester: "Spring 2022",
    link: "https://bulletin.uga.edu/Course/Details/3841",
    tags: [CSE]
  },
  {
    title: "Elementary Korean II",
    grade: "A",
    semester: "Spring 2022",
    link: "https://bulletin.uga.edu/Course/Details/5423",
    tags: [MISC]
  },
  {
    title: "Intro Studio Physics for Engr II",
    grade: "A",
    semester: "Spring 2022",
    link: "https://bulletin.uga.edu/Course/Details/3911",
    tags: [MISC]
  },
  {
    title: "Computational Engr Methods",
    grade: "A",
    semester: "Fall 2021",
    link: "https://bulletin.uga.edu/Course/Details/2526",
    tags: [CSE]
  },
  {
    title: "First Year Odyssey",
    grade: "A",
    semester: "Fall 2021",
    link: "https://bulletin.uga.edu/Course/Details/25165",
    tags: [MISC]
  },
  {
    title: "Elementary Korean I",
    grade: "A",
    semester: "Fall 2021",
    link: "https://bulletin.uga.edu/Course/Details/5420",
    tags: [MISC]
  },
  {
    title: "Calculus III for Engineering",
    grade: "A",
    semester: "Fall 2021",
    link: "https://bulletin.uga.edu/Course/Details/898",
    tags: [MISC]
  },
  {
    title: "Elementary Differential Equations",
    grade: "A",
    semester: "Fall 2021",
    link: "https://bulletin.uga.edu/Course/Details/902",
    tags: [MISC]
  },
]


function renderTags(){
  const tagList = document.getElementById("course-tag-list");

  for (i = 0; i < activeTags.length; i++){
    const tag = document.createElement("p");
    tag.textContent = tagMap.get(i);
    tag.className = activeTags[i] ? "project-tag-active project-tag" : "project-tag";
    tag.dataset.key = i;
    tag.onclick = function() {
      const key = tag.dataset.key;
      console.log(key);
      activeTags[key] = !activeTags[key];
      tag.className = activeTags[key] ? "project-tag-active project-tag" : "project-tag";
      renderList();
    };
    tagList.appendChild(tag);
  }
}

function renderList(){
  // REMOVE PREVIOUS LIST
  while (courseList.lastChild){
    courseList.removeChild(courseList.lastChild);
  }

  let dark = false;

  // ADD NEW CHILDREN
  courses.forEach(c => {
    const matches = activeTags.some((tag, index) => tag && c.tags.includes(index));
    if (!activeTags.includes(true) || matches){
      const course = document.createElement("div");
      const title = document.createElement("a");
      const grade = document.createElement("p");
      const tags = document.createElement("p");
      const semester = document.createElement("p");

      
      course.className = dark ? "course course-dark" : "course";
      dark = !dark;
      
      title.textContent = c.title;
      title.className = "course-title";
      title.href = c.link;
      title.setAttribute("target","_blank");

      grade.textContent = c.grade;
      grade.className = "course-grade";
    
      semester.textContent = c.semester;
      semester.className = "course-semester";
      
      c.tags.forEach((tag,index) => {
        tags.textContent += tagMap.get(tag);
        tags.textContent += index == c.tags.length - 1 ? "" : ", ";
      });
      tags.className = "course-tags";

      course.appendChild(title);
      course.appendChild(grade);
      course.appendChild(semester);
      courseList.appendChild(course);

    }
  })
}

renderList();
renderTags();
