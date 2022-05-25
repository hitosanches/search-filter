import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [job, setJob] = useState([]);

  useEffect(() => {
    fetch("./data.json", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setJob(res));
  }, []);

  
  return (
    <div>
      {job.map((result) => (
        <div key={result.id} className="container">
          <div className="inner-container">
            <div className="image-container">
              <img className="image" src={result.logo} alt="logo" />
            </div>
            <div className="main">
              <div className="main-info-container">
                <div className="title">
                  <div className="teste">
                    <div className="newfeatured">
                      <p className="company">{result.company}</p>
                      <p>{result.new ? <p className="new">NEW!</p> : ""}</p>
                      <p>
                        {result.featured ? (
                          <p className="featured">FEATURED!</p>) : ("")}
                      </p>
                    </div>
                    <p className="position">{result.position} </p>
                    <p className="subtitle">
                      <p className="subtitle-dot">{result.postedAt}</p>{" "}
                      <p className="subtitle-dot">{result.contract}</p>{" "}
                      {result.location}
                    </p>
                  </div>
                </div>
              </div>
              <div className="filters-container">
                <p className="filters">{result.role}</p>
                <p className="filters">{result.level} </p>
                <p className="filters">{result.tools}</p>
                <div className="languages">{result.languages.map((lang) => (<p className="filters">{lang}</p>))} </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default App;
