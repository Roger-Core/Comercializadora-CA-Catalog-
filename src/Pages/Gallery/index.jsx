import React from "react";
import Vinil1 from "../../Assets/Images/Viniles/116802528_137460244690247_5758444374545550323_n.jpg";
import Cortina2 from "../../Assets/Images/Cortinas/116130930_134426978326907_1779137587987479140_o.jpg";
import Cortina3 from "../../Assets/Images/Cortinas/116252572_134426541660284_6647045430775230630_o.jpg";
import Vinil from "../../Assets/Images/Viniles/116817159_137460401356898_4957176304651015873_o.jpg";
import Cortina5 from "../../Assets/Images/Cortinas/116267313_134426148326990_2515625811755465692_n.jpg";
import Cortina6 from "../../Assets/Images/Cortinas/116339769_134426761660262_1383025871542852714_n.jpg";

const Gallery = () => {
  return (
    <section
      style={{ margin: "80px auto" }}
      className="text-gray-700 body-font"
    >
      <div className="container px-5 pb-12 mx-auto flex flex-wrap">
        <div className="flex w-full mb-10 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Decora tu hogar.
            <br /> Diseños a tu estilo y personalidad
          </h1>
          <p
            style={{
              fontSize: "18px",
              textShadow: "1px 2px 10px rgba(0, 0, 0, .2)",
            }}
            className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base"
          >
            Dale vida y empieza a modernizar a tu estilo.
            <br />
            Tenemos todo tipo de estupendos diseños y estilos de viniles.
            decorativos, cuadros, cortinas, toldos y cojines. <br />
            Para todo tipo de hogares y negocios.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img
                style={{ boxShadow: "1px 6px 10px 0 rgba(0, 0, 0, 0.26)" }}
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={Vinil1}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                style={{ boxShadow: "1px 6px 10px 0 rgba(0, 0, 0, 0.26)" }}
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={Cortina2}
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img
                style={{ boxShadow: "1px 6px 10px 0 rgba(0, 0, 0, 0.26)" }}
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={Cortina3}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img
                style={{ boxShadow: "1px 6px 10px 0 rgba(0, 0, 0, 0.26)" }}
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={Cortina6}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                style={{ boxShadow: "1px 6px 10px 0 rgba(0, 0, 0, 0.26)" }}
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={Cortina5}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                style={{ boxShadow: "1px 6px 10px 0 rgba(0, 0, 0, 0.26)" }}
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={Vinil}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
