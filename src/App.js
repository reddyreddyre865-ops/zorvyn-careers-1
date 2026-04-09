import React from "react";
import "./App.css";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <span className="navbar-brand fw-bold">Zorvyn Careers</span>
    </nav>
  );
}

function Hero() {
  return (
    <div className="text-center p-5 bg-light">
      <h1 className="fw-bold">Join Zorvyn 🚀</h1>
      <p>Build the future with us</p>
      <a href="#jobs" className="btn btn-primary">
        View Jobs
      </a>
    </div>
  );
}

function Jobs() {
  const jobs = [
    { title: "Frontend Developer", location: "Remote" },
    { title: "Full Stack Developer", location: "India" }
  ];

  return (
    <div id="jobs" className="container my-5">
      <h2 className="text-center fw-bold mb-4">Open Positions</h2>

      <div className="d-flex flex-wrap justify-content-center">
        {jobs.map((job, i) => (
          <div
            key={i}
            className="card m-3 p-3 shadow text-center"
            style={{ width: "260px" }}
          >
            <h5>{job.title}</h5>
            <p>{job.location}</p>

            <button className="btn btn-primary w-100">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Apply() {
  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-3">Apply Now</h2>

      <form
        action="https://formsubmit.co/your-email@gmail.com"
        method="POST"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="form-control my-2"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control my-2"
          required
        />

        <input
          type="file"
          name="resume"
          className="form-control my-2"
          required
        />

        <button className="btn btn-success w-100">
          Submit Application
        </button>
      </form>
    </div>
  );
}

function About() {
  return (
    <div className="container my-5 text-center">
      <h2 className="fw-bold">Why Join Zorvyn?</h2>
      <p>
        Work with cutting-edge technologies, build scalable products,
        and grow with a fast-moving team.
      </p>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-dark text-white text-center p-3">
      © 2026 Zorvyn
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Jobs />
      <Apply />
      <About />   {/* ✅ ADDED HERE */}
      <Footer />
    </>
  );
}

export default App;