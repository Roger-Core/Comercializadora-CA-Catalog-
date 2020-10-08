import React from "react";

const Index = () => {
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
          {/*  <div className="p-12 md:w-1/2 flex flex-col items-start">
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
              Pinterest DIY dreamcatcher gentrify single-origin coffee
            </h2>
            <p className="leading-relaxed mb-8">
              Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal
              portland. VHS man braid palo santo hoodie brunch trust fund.
              Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie
              chambray 90's, slow-carb etsy tumeric.
            </p>
            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-200 mt-auto w-full">
              <span className="text-gray-600 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                1.2K
              </span>
              <span className="text-gray-600 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
                6
              </span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Index;
