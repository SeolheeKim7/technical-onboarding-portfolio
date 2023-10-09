import React from "react";
/*"grid of 4 education cells"*/



const Education = () => {
    return(
        <section className="light" id="education">
            <h2 style={{ textAlign: "center" }}>Education</h2>
            <div className="education-column">
        <h3>Niagara College</h3>
        <p>Degree: Advanced diploma</p>
        <p>Major: Computer Programming and Analysis</p>
        <p>Graduation Year: 2024</p>
      </div>
      <div className="education-column">
        <h3>Hallym University</h3>
        <p>Degree: Bachelor Degree</p>
        <p>Major: Chemistry</p>
        <p>Graduation Year: 2006</p>
      </div>
        </section>
    )
}

export default Education;