import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <span className="navbar-brand">Zorvyn Careers</span>
    </nav>
  );
}

function Hero() {
  return (
    <div className="text-center p-5 bg-light">
      <h1>Join Zorvyn 🚀</h1>
      <p>Build the future with us</p>
      <a href="#jobs" className="btn btn-primary">View Jobs</a>
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
      <h2 className="text-center">Open Positions</h2>

      <div className="d-flex flex-wrap justify-content-center mt-4">
        {jobs.map((job, i) => (
          <div key={i} className="card m-3 p-3 shadow" style={{ width: "250px" }}>
            <h5>{job.title}</h5>
            <p>{job.location}</p>
            <button className="btn btn-outline-primary">Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Apply() {
  return (
    <div className="container my-5">
      <h2>Apply Now</h2>

      <form action="https://formsubmit.co/your-email@gmail.com" method="POST">
        <input type="text" name="name" placeholder="Name" className="form-control my-2" required />
        <input type="email" name="email" placeholder="Email" className="form-control my-2" required />
        <button className="btn btn-success">Submit</button>
      </form>
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
      <Footer />
    </>
  );
}

export default App;