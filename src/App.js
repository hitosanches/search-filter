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
          <div className="image-container">
            <img className="image" src={result.logo} alt="logo" />
          </div>
          <div className="main">
            <p className="company">{result.company}</p>
            <p className="new">{result.new} </p>
            <p className="featured">{result.featured}</p>
            <p className="position">{result.position} </p>
            <p className="filters">
              {result.role} {result.level} {result.languages} {result.tools}
            </p>
            <p className="subTitle">
              {result.location} {result.contract} {result.postedAt}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default App;
