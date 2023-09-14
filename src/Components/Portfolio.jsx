/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desk.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Shopping mall site with Blazor",
    description:
      "Create a Web API and utilize the corresponding repositories to develop the functional aspects of a shopping mall.",
    url: "https://github.com/SeolheeKim7/ShoppingMallSolution",
  },
  {
    title: "PHP Portfolio",
    description:
      "I used PHP and MySQL to craft a portfolio of my work on various projects.",
    url: "https://seolheeportfolio.000webhostapp.com/index.php",
  },
  {
    title: "Mobile messaging app Clone project",
    description:
      "Clone a messaging application with JavaScript, Css, Html",
    url: "https://seolheekim-developer.github.io/kokoa-clone-2022/",
  },
  {
    title: "Music Collection Application",
    description:
      "MVC with SQLite database to create a music collection application.",
    url: "https://mvcmusic2022seolhee.azurewebsites.net/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideIn"  }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
