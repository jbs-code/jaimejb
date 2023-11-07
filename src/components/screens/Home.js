import { gsapHome } from "../../scripts/gsapEffects";
import DOMPurify from "dompurify";
import { icons } from "../../assets/icons/icons";
import { useLayoutEffect } from "react";

const img = require.context("../../assets/img");

function Home() {
  useLayoutEffect(() => {
    const ctx = gsapHome();

    return () => ctx.revert();
  }, []);

  return (
    <div className="home">
      <picture className="home-img">
        <source
          srcSet={img("./pc-thinking-movil.png")}
          media="(max-width: 1080px) and (orientation: portrait)"
        />
        <img src={img("./pc-thinking.png")} alt="pc-thinking" />
      </picture>

      <footer className="home-footer">
        <span>{"< Jaime JB />"}</span>
        <span>
          Puedes mandarme un mensaje en la parte de contacto o por mis redes.
        </span>
        <div className="home-icons">
          <a
            className="home-icon"
            href="https://github.com/jbs-code"
            target="_blank"
            rel="noopener noreferrer"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(icons.gitHub),
            }}
          />
          <a
            className="home-icon"
            href="https://www.linkedin.com/in/jaimejbas/"
            target="_blank"
            rel="noopener noreferrer"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(icons.linkedIn),
            }}
          />
        </div>
      </footer>
    </div>
  );
}

export default Home;
