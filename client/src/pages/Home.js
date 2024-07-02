import React from "react";
import Imagen from "../Imagenes/banner1.jpg";

const Home = () => {
  return (
    <div className='mb-20 flex-grow min-h-screen'>
       <div className="items-center">
       <img src={Imagen} alt="banner-imagen" className="mx-auto h-64" />
      </div>
      <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
      Hola, bienvenidos a mi blog sobre Gatos.
      </h1>
      <p className='mx-auto leading-relaxed text-base mb-4 text-justify'>
  Los gatos, esos misteriosos y encantadores compañeros felinos, han cautivado a la humanidad durante siglos con su elegancia y personalidad única. Desde los antiguos egipcios que los adoraban como deidades hasta los amantes de los gatos de hoy en día, estos pequeños depredadores se han ganado un lugar especial en nuestros corazones. En nuestro blog, exploraremos el fascinante mundo de los gatos, desde su historia y evolución hasta sus comportamientos enigmáticos que los convierten en mascotas tan especiales.
</p>
<p className='mx-auto leading-relaxed text-base mb-4 text-justify'>
  Los gatos son criaturas asombrosas que han conquistado la web con su carisma y travesuras. A menudo, nos sorprenden con su agilidad, destreza y, por supuesto, sus ocasionales momentos de travesura. ¿Quién no ha visto un video viral de un gato haciendo acrobacias increíbles o un gatito curioso explorando su entorno? En este blog, te llevaremos más allá de los videos virales y te adentrarás en la biología y el comportamiento de estos felinos, para que puedas comprender mejor a tu compañero peludo.
</p>
<p className='mx-auto leading-relaxed text-base mb-4 text-justify'>
  Además de explorar la fascinante vida de los gatos, también compartiremos consejos prácticos para cuidar a tu mascota felina. Desde cómo satisfacer sus necesidades alimenticias y de ejercicio hasta mantener su salud y bienestar, nuestro objetivo es proporcionarte información valiosa para que tu gato viva una vida feliz y saludable. Así que, si eres un amante de los gatos o simplemente estás interesado en aprender más sobre estas criaturas enigmáticas, ¡estás en el lugar adecuado! ¡Acompáñanos en este viaje para descubrir el maravilloso mundo de los gatos!
</p>

    </div>
  );
};

export default Home;
