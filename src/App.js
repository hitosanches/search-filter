import { useEffect, useState } from "react";
import "./App.css";
import Header from "./backgrounds/bg-header-desktop.svg";

function App() {
  const [job, setJob] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    fetch("./data.json", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setJob(res));
  }, []);

  function role(e) {
    setBusca(e.role);
  }
  function level(e) {
    setBusca(e.level);
  }
  function tools(e, index) {
    let value = e.tools[index];
    e.tools.forEach((element) => {
      if (element === value) {
        setBusca(element);
      }
    });
  }
  function languages(e, index) {
    let value = e.languages[index];
    e.languages.forEach((element) => {
      if (element === value) {
        console.log(element);
        setBusca(element);
      }
    });
  }
  return (
    <div>
      <div className="header">
        <img src={Header} alt="HeaderDesktop" width="100%" />
        <div className="container-search-bar">
        <div className="search-bar">
          <div className="teste">
            <div>
            { busca && <div className="labal-container"><label>{busca}<button>X</button></label> </div>}
            </div>
            <button className="clear-button">clear</button>
          </div>
        </div>
        </div>
      </div>
      {job.filter((e) => {
          let languagesFilter = e.languages.some((q) => busca === q)
          let toolsFilter = e.tools.some((q) => busca === q)
          if (busca === "") {
            return e;
          } else {
            if (
              e.role === busca ||
              languagesFilter  ||
              toolsFilter ||
              e.level === busca
            ) {
              return e;
            }
          }
        })
        .map((result) => (
          <div key={result.id} className="container">
            <div
              className={
                result.featured ? "inner-container-left-bar" : "inner-container"
              }
            >
              <div className="image-container">
                <img className="image" src={result.logo} alt="logo" />
              </div>
              <div className="main">
                <div className="main-info-container">
                  <div className="title">
                    <div className="sub-container">
                      <div className="newfeatured">
                        <p className="company">{result.company}</p>
                        <div>
                          {result.new ? <p className="new">NEW!</p> : ""}
                        </div>
                        <div>
                          {result.featured ? (
                            <p className={`featured`}>FEATURED!</p>
                          ) : (
                            ""
                          )}
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
                  <button className="filters" onClick={() => role(result)}>
                    {result.role}
                  </button>
                  <button className="filters" onClick={() => level(result)}>
                    {result.level}{" "}
                  </button>
                  <div>
                    {result.tools.map(
                      (tool, index) =>
                        result.tools.length > 0 && (
                          <button
                            key={index}
                            className="filters"
                            onClick={() => tools(result, index)}
                          >
                            {tool}
                          </button>
                        )
                    )}
                  </div>
                  <div className="languages">
                    {result.languages.map((lang, index) => (
                      <button
                        className="filters"
                        key={index}
                        onClick={() => languages(result, index)}
                      >
                        {lang}
                      </button>
                    ))}
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
