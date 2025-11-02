
// PROJECT TAGS
const JAVA = 0;
const PYTHON = 1;
const HTML_CSS = 2;
const CIRCUITS = 3;
const JS = 4;
const REACT = 5;
const TS = 6;
const C = 7;
const CS = 8;
const CPP = 9;
const MICROCONTROLLER = 10;
const ASSEMBLY = 11;
const VERILOG = 12;
const PERSONAL = 13;
const COURSEWORK = 14;

const tagMap = new Map();
tagMap.set(JAVA,"Java");
tagMap.set(PYTHON,"Python");
tagMap.set(HTML_CSS,"HTML/CSS");
tagMap.set(CIRCUITS,"Circuits");
tagMap.set(JS,"JavaScript");
tagMap.set(REACT,"React");
tagMap.set(TS,"TypeScript");
tagMap.set(C,"C");
tagMap.set(CS,"C#");
tagMap.set(CPP,"C++");
tagMap.set(MICROCONTROLLER,"Microcontrollers");
tagMap.set(ASSEMBLY,"ARM Assembly");
tagMap.set(VERILOG, "Verilog");
tagMap.set(PERSONAL, "Personal");
tagMap.set(COURSEWORK, "Coursework");


var activeTags = new Array(15);
activeTags.fill(false);

var anyTag = false;

const projectList = document.getElementById("project-list");
const projects = [
  {
    name: "FPGA Chess",
    tags: [VERILOG, MICROCONTROLLER, COURSEWORK],
    date: "March 2025",
    path: "/projects/fpga-chess/fpga-chess.html"
  },
  {
    name: "Poker React",
    tags: [REACT,TS,HTML_CSS, PERSONAL],
    date: "June 2024",
    path: "/projects/poker-react/poker-react.html"
  },
  {
    name: "2D Plotter",
    tags: [PYTHON, CIRCUITS, MICROCONTROLLER, COURSEWORK],
    date: "April 2024",
    path: "/projects/2d-plotter/2d-plotter.html"
  },
  {
    name: "MIDI Player",
    tags: [C, ASSEMBLY, MICROCONTROLLER, CIRCUITS, COURSEWORK],
    date: "March 2025",
    path: "projects/midi-player/midi-player.html"
  },
  {
    name: "PC Air Cooling Sensor System",
    tags: [CPP, MICROCONTROLLER, CIRCUITS, COURSEWORK],
    date: "November 2024",
    path: "projects/sensor-system/sensor-system.html"
  },
  {
    name: "Wordle React",
    tags: [REACT,TS,PYTHON,HTML_CSS, PERSONAL],
    date: "October 2024",
    path: "/projects/wordle-react/wordle-react.html"
  },
  {
    name: "Morse Code",
    tags: [PYTHON, MICROCONTROLLER, CIRCUITS, COURSEWORK],
    date: "November 2024",
    path: "/projects/morse-code/morse-code.html"
  }
]

// PROJECT TAGS
const CSE = 1;
const MISC = 2;

const courseList = document.getElementById("course-list");
const courses = [
  {
    title: "Algorithms",
    grade: "(IP)",
    semester: "Fall 2025",
    link: "https://bulletin.uga.edu/Course/Details/4360",
    tags: [CS]
  },
  {
    title: "Operating Systems",
    grade: "(IP)",
    semester: "Fall 2025",
    link: "https://bulletin.uga.edu/Course/Details/4253",
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
    title: "Embedded Systems Design II",
    grade: "B+",
    semester: "Spring 2025",
    link: "https://bulletin.uga.edu/Course/Details/35458",
    tags: [CSE]
  },
  {
    title: "Computer Networks",
    grade: "A",
    semester: "Summer 2024",
    link: "https://bulletin.uga.edu/Course/Details/45549",
    tags: [CS]
  },
  {
    title: "Data Structures",
    grade: "A",
    semester: "Spring 2024",
    link: "https://bulletin.uga.edu/Course/Details/4304",
    tags: [CS,CSE]
  },
  {
    title: "Electronics I",
    grade: "A",
    semester: "Spring 2024",
    link: "https://bulletin.uga.edu/Course/Details/3882",
    tags: [CSE]
  },
  {
    title: "Systems Programming",
    grade: "A",
    semester: "Fall 2023",
    link: "https://bulletin.uga.edu/Course/Details/12406",
    tags: [CS,CSE]
  },
  {
    title: "Fundamentals of Circuit Analysis",
    grade: "A-",
    semester: "Fall 2023",
    link: "https://bulletin.uga.edu/Course/Details/42016",
    tags: [CSE]
  },
  {
    title: "Software Development",
    grade: "A",
    semester: "Summer 2023",
    link: "https://bulletin.uga.edu/Course/Details/4726",
    tags: [CS,CSE]
  }
]

function filterProjects() {
  const input = getElementById("tag-input");
  var filter = input.value.toLowerCase();
}

function renderTags(){
  const tagList = document.getElementById("project-tag-list");

  for (i = 0; i < activeTags.length; i++){
    const tag = document.createElement("p");
    tag.textContent = tagMap.get(i);
    tag.className = activeTags[i] ? "project-tag-active project-tag" : "project-tag";
    tag.dataset.key = i;
    tag.onclick = function() {
      const key = tag.dataset.key;
      activeTags[key] = !activeTags[key];
      tag.className = activeTags[key] ? "project-tag-active project-tag" : "project-tag";
      renderList();
    };
    tagList.appendChild(tag);
  }
}

function renderList(){
  // REMOVE PREVIOUS LIST
  while (projectList.lastChild){
    projectList.removeChild(projectList.lastChild);
  }

  // ADD NEW CHILDREN
  projects.forEach(p => {
    const matches = activeTags.some((tag, index) => tag && p.tags.includes(index));
    if (!activeTags.includes(true) || matches){
      const item = document.createElement("a");
      const title = document.createElement("p");
      const tags = document.createElement("p");
      const date = document.createElement("p");
      
      item.className = "project-item";
      item.href = p.path;
      
      title.textContent = p.name;
      title.className = "project-title";

      date.textContent = p.date;
      date.className = "project-date";
      
      p.tags.forEach((tag,index) => {
        tags.textContent += tagMap.get(tag);
        tags.textContent += index == p.tags.length - 1 ? "" : ", ";
      });
      tags.className = "project-item-tags";

      item.appendChild(title);
      item.appendChild(tags);
      item.appendChild(date);
      projectList.appendChild(item);

    }
  })
}


function renderCourseList(){
  // REMOVE PREVIOUS LIST
  while (courseList.lastChild){
    courseList.removeChild(courseList.lastChild);
  }

  let dark = false;

  // ADD NEW CHILDREN
  courses.forEach(c => {
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
  })
}

if (courseList != null) renderCourseList();

// Get the modal, image, and caption elements
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const captionText = document.getElementById("caption");

// Function to open the modal and display the clicked image
function openModal(element) {
  modal.style.display = "block";
  modalImage.src = element.src;
  captionText.innerHTML = element.alt;
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Close the modal if the user clicks anywhere outside of the modal content
window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
};


if (projectList != null) {
  renderList();
  renderTags();
}
