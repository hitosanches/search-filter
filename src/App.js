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
  // let numero
  // const result = job.filter((data)=>  {return data.id === numero})

  return (
    <div>
      {job.map((result) => (
        <div key={result.id} className="container">
          <div className="inner-container">
            <div className="image-container">
              <img className="image" src={result.logo} alt="logo" />
            </div>
            <div className="main">
              <div className="title">
              <p className="company">{result.company}</p>
              <div className="newfeatured">
                <p>{result.new ? <p className="new">NEW!</p> : ""}</p>
                <p>
                  {result.featured ? <p className="featured">FEATURED!</p> : ""}
                </p>
              </div>
              </div>
              <p className="position">{result.position} </p>
              <p className="filters">
                {result.role} {result.level} {result.languages} {result.tools}
              </p>
              <p className="subtitle">
                <p className="subtitle-dot">{result.postedAt}</p>{" "}
                <p className="subtitle-dot">{result.contract}</p>{" "}
                {result.location}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default App;
