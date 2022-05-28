import React from "react";


export default function Body({result, busca,setBusca,setJob, filtro}){
    function role(e) {
      if(busca){
        if(busca.length > 0) {
          setJob(filtro.filter((item)=> item.role === e.role));
        }
       return setBusca([...busca,e.role])
      }
     
      setBusca([e.role]);
      }
      function level(e) {
       
          if(busca){
            if(busca.length > 0) {
              setJob(filtro.filter((item)=> item.level === e.level));
            }
           return setBusca([...busca,e.level])
          }
         
          setBusca([e.level]);
      }
      function tools(e, index) {
        let value = e.tools[index];
        e.tools.forEach((element) => {
          if (element === value) {
            if(busca){
              if(busca.length > 0) {
                setJob(filtro.filter((e)=> e.tools[index] === element));
              }
             return setBusca([...busca,element])
            }
           
            setBusca([element]);
            
          }
        });
      }
      function languages(e, index) {
        let value = e.languages[index];
        e.languages.forEach((element) => {
          if (element === value) {
            if(busca){
              if(busca.length > 0) {
                setJob(filtro.filter((e)=> e.languages[index] === element));
              }
             return setBusca([...busca,element])
            }
           
            setBusca([element]);
            
          }
        });
      }
    return(
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
    )
}