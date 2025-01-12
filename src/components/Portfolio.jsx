import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    APP: "Web/Mobile Development",
    DATA: "Data Analysis",
    PHOTOS: "Photography",
  };

  const projectsData = [
    {
      title: "Grocery Finds",
      projectInfo:
        "Architected a full stack application that allows users to compare the prices of products across multiple retailers.",
      technologies:
        "React, Flask, PostgreSQL, Google Cloud Platform, RESTful APIs",
      industry: "Web Development",
      url: {
        name: "github.com/Sean-hsj",
        link: "https://github.com/Sean-hsj",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project-1.jpg",
      sliderImages: [
      ],
      categories: [filters.APP],
    },
    {
      title: "BashGate",
      projectInfo:
        "Developed an iOS mobile app to aid college students in effectively managing their academic assignments.",
      technologies:
        "Swift, CoreData, Firebase, SwiftUI, CoreAudio, MapKit Framework",
      industry: "Mobile App Development",
      url: {
        name: "github.com/Sean-hsj",
        link: "https://github.com/Sean-hsj",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project-2.jpg",
      sliderImages: [
      ],
      categories: [filters.APP],
    },
    {
      title: "Foodies",
      projectInfo:
        "Constructed a full stack social media website for users to share pictures, descriptions, and likes among each other about local restaurants.",
      technologies: "JavaScript, HTML, CSS/Bootstrap, PHP, MySQL",
      industry: "Web Development",
      url: {
        name: "github.com/Sean-hsj",
        link: "https://github.com/Sean-hsj",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project-3.jpg",
      sliderImages: [
      ],
      categories: [filters.APP],
    },
    {
      title: "Soil Moisture Sensor Data Analysis",
      projectInfo:
        "Implemented SARIMA model to build up prediction model of the future weather based on soil moisture measured from different depth to improve the irrigation water consumption and soil environment.",
      technologies: "Python, Panda, Scikit-learn, NumPy, TensorFlow",
      industry: "Data Analysis",
      url: {
        name: "github.com/Sean-hsj",
        link: "https://github.com/Sean-hsj",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project-4.jpg",
      sliderImages: [
      ],
      categories: [filters.DATA],
    },
    {
      title: "Classification Models of Nearest Earth Object",
      projectInfo:
        "Developed and trained six different classification and clustering prediction models by Scikit-learn to classify the hazardous class of a Nearest Earth Object (NEO).",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Data Analysis",
      url: {
        name: "github.com/Sean-hsj",
        link: "https://github.com/Sean-hsj",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project-5.jpg",
      sliderImages: [
      ],
      categories: [filters.DATA],
    },
    {
      title: "Landscapes",
      projectInfo: "Captured the beauty and vastness of natural scenery.",
      technologies: "Photography",
      industry: "Art & Design",
      url: {
        name: "www.example.com",
        link: "https://github.com/Sean-hsj",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/landscape/mountain1.jpeg",
      sliderImages: [
        "images/projects/landscape/burnet1.JPG",
        "images/projects/landscape/burnet2.jpeg",
        "images/projects/landscape/mountain2.jpeg",
        "images/projects/landscape/star2.jpeg",
        "images/projects/landscape/ginkgo.jpeg",
        "images/projects/landscape/galveston.JPG",
      ],
      categories: [filters.PHOTOS],
    },
    {
      title: "City",
      projectInfo:
        "Captures the vibrant energy and diversity of urban landscapes, showcasing the bustling streets, towering buildings, colorful lights, and unique characters that define each metropolis.",
      technologies: "Photography",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "www.example.com",
        link: "https://github.com/Sean-hsj",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/city/firework.JPG",
      sliderImages: [
        "images/projects/city/hongkong-1.JPG",
        "images/projects/city/hongkong-2.JPG",
        "images/projects/city/xiamen.jpg",
        "images/projects/city/wuhan.jpeg",
        "images/projects/city/hongkong-3.JPG",
        "images/projects/city/hongkong-4.JPG",
        "images/projects/city/tibet.jpeg",
      ],
      categories: [filters.PHOTOS],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
      >
        <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
          {/* Heading */}
          <div className="position-relative d-flex text-center mb-5">
            <h2
              className={
                "text-24  text-uppercase fw-600 w-100 mb-0 " +
                (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
              }
            >
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            {/* <span className="text-light">Category</span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
