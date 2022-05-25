import { useEffect, useState } from "react";
import "./App.css";
import Header from "./backgrounds/bg-header-desktop.svg"

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
          <div className="header">
            <img src={Header} alt="HeaderDesktop" width="100%" />
            <div className="search-bar">
              aaaaaaa
            </div>
          </div>
      {job.map((result) => (
        <div key={result.id} className="container">
          <div className={result.featured ? "inner-container-left-bar" : "inner-container" }>
            <div className="image-container">
              <img className="image" src={result.logo} alt="logo" />
            </div>
            <div className="main">
              <div className="main-info-container">
                <div className="title">
                  <div className="sub-container">
                    <div className="newfeatured">
                      <p className="company">{result.company}</p>
                      <div>{result.new ? <p className="new">NEW!</p> : ""}</div>

                      <div>
                        {result.featured ? (
                          <p className={`featured`}>FEATURED!</p>) : ("")}
                      </div>

                    </div>
                    <p className="position">{result.position} </p>
                    <div className="subtitle">
                      <p className="subtitle-dot">{result.postedAt}</p>{" "}
                      <p className="subtitle-dot">{result.contract}</p>{" "}
                      {result.location}
                    </div>
                  </div>
                </div>
              </div>
              <div className="filters-container">
                <p className="filters">{result.role}</p>
                <p className="filters">{result.level} </p>
                {result.tools.length > 0 && (<p className="filters">{result.tools}</p>)}
                <div className="languages">
                {result.languages.map((lang, index) => ( <span className="filters" key={index} >{lang}</span> ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default App;
