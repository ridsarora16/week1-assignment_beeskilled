import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const posts = [
    {
      id: 1,
      title: "React Basics",
      category: "React",
    },
    {
      id: 2,
      title: "JavaScript ES6",
      category: "JavaScript",
    },
    {
      id: 3,
      title: "CSS Flexbox",
      category: "CSS",
    },
    {
      id: 4,
      title: "Responsive Design",
      category: "CSS",
    },
  ];

  const filteredPosts = posts.filter((post) => {
    const matchSearch = post.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || post.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <>
      <Header />

      <section className="hero-section">
        <h2>Aspiring Software Developer</h2>

        <p>
          Passionate about building user-friendly web applications,
          solving real-world problems, and continuously learning
          modern technologies.
        </p>
      </section>

      <section className="section">
        <h2>About Me</h2>

        <p>
          Hello! I am Ridhi Arora, a Computer Science Engineering
          student with a strong interest in Web Development,
          Artificial Intelligence, and Software Engineering.
          I enjoy creating responsive and interactive applications
          while continuously improving my technical and
          problem-solving skills.

          Through academic projects, internships, and practical
          learning experiences, I am working toward becoming a
          skilled software developer capable of building impactful
          digital solutions.
        </p>
      </section>

      <section className="section">
        <h2>Education</h2>

        <Card
          title="Bachelor of Technology (Computer Science Engineering)"
          description="Currently pursuing B.Tech in Computer Science with focus on programming, software development, AI, and web technologies."
        />

        <Card
          title="Senior Secondary Education"
          description="Completed higher secondary education with strong academic performance."
        />
      </section>

      <section className="section">
        <h2>Skills</h2>

        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>C Programming</span>
          <span>Python</span>
          <span>DBMS</span>
        </div>
      </section>

      <section className="section">
        <h2>Projects</h2>

        <Card
          title="Personal Portfolio Website"
          description="Developed a responsive portfolio website using HTML, CSS, and little built JS to showcase skills, education, and projects."
        />

        <Card
          title="Library Management System"
          description="Designed a system for managing books, issue records, and user information efficiently."
        />

        <Card
          title="Vyapaar Saathi"
          description="A business assistance platform designed to support small businesses by helping them manage products, customers, records, and day-to-day operations efficiently."
        />

        <Card
          title="React Blog UI"
          description="Built a React-based blog interface with dynamic rendering, search functionality, and category filtering using JSON data."
        />
      </section>

      <section className="section">
        <h2>Contact</h2>

        <p>Email: ridhiarora@example.com</p>
        <p>Phone: +91 XXXXX XXXXX</p>

        <Form />

        <Button text="Send Message" />
      </section>

      <section className="section">
        <h2>React Blog UI</h2>

        <input
          type="text"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>React</option>
          <option>JavaScript</option>
          <option>CSS</option>
        </select>

        {filteredPosts.map((post) => (
          <Card
            key={post.id}
            title={post.title}
            description={post.category}
          />
        ))}
      </section>

      <Footer />
    </>
  );
}

export default App;