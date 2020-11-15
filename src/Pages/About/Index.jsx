import React from "react";

const About = () => {
  return (
    <section className="text-gray-700 body-font overflow-hidden">
      <hr
        style={{ margin: "0 auto", width: "80%", border: "1px solid #ccc" }}
      />
      <h1
        style={{
          textAlign: "center",
          fontSize: "44px",
          textShadow: "3px 4px 8px rgba(0,0,0,.2)",
          margin: "40px auto",
        }}
      >
        AVISO:
      </h1>
      <div
        style={{
          textAlign: "center",
          textShadow: "1px 2px 10px rgba(0, 0, 0, .2)",
          margin: "100px auto",
        }}
        className="container px-5 py-12 mx-auto"
      >
        <div className="flex flex-wrap -m-12">
          <div className="p-12 md:w-1/1 flex flex-col items-start">
            <p style={{ fontSize: "18px" }} className="leading-relaxed mb-4">
              Esta página es solo una muestra y un catálogo, ninguna función
              esta activa en este momento, cualquier aclaración o duda contactar
              con nosotros por correo electrónico, whatsapp o Facebook.
              Agradecemos su comprensión e interés en nosotros. :)
              <br /> Esta página aún está en desarrollo y mantenimiento para la
              futura compra de productos en esta página y pagos a través de
              paypal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
