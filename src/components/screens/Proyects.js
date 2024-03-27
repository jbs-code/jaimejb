import { gsapCard } from "../../scripts/gsapEffects";
import { proyects } from "../../ProyectsList/proyects";
import CardProyects from "../CardProyects";
import { useLayoutEffect } from "react";

function Proyects() {
  //Obtenemos la lista de proyectos
  const proyectos = proyects.proyectsArray;

  useLayoutEffect(() => {
    const ctx = gsapCard();
    return () => ctx.revert();
  }, []);

  return (
    <div className="proyects">
      <h1 className="text-shadow">Proyectos</h1>

      {proyectos.map((proyect) => (
        <CardProyects
          key={proyect.id}
          name={proyect.name}
          urlSite={proyect.urlSite}
          urlCode={proyect.urlCode}
          description={proyect.description}
          path={proyect.path}
        />
      ))}
    </div>
  );
}

export default Proyects;
