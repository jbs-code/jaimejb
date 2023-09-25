import React, { useEffect } from "react";
import { gsapCard } from "../../scripts/gsapEffects";
import { skillsList } from "../../skillsList/skillsList";
import DOMPurify from "dompurify";

const doc = require.context("../../assets/docs");

function Skills() {
  useEffect(() => {
    gsapCard();
  }, []);

  return (
    <div className="skills">
      <h1 className="text-shadow">Skills</h1>
      <div className="card">
        <section className="card-container__img skills-section mt-3">
          {skillsList.map((skill, i) => {
            return (
              <div key={i} className="skills-item">
                <div
                  className="skills-icon"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(skill.icon),
                  }}
                />
                <div className="skills-name">
                  <span className="w-100">{skill.name}</span>
                  {skill.hasOwnProperty("certification") && (
                    <a
                      href={skill.certification}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="skills-name__link"
                    >
                      Certificado
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </section>
        <a
          href={doc("./cv.pdf")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary text-shadow mt-2"
        >
          Descarga mi CV
        </a>
      </div>
    </div>
  );
}

export default Skills;
