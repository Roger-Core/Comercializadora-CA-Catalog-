import React from "react";
import Curtain1 from "../../Assets/Images/Cortinas/116130614_134428741660064_7947243286911654447_n.jpg";
import Curtain2 from "../../Assets/Images/Cortinas/116130930_134426978326907_1779137587987479140_o.jpg";
import Curtain3 from "../../Assets/Images/Cortinas/116252572_134426541660284_6647045430775230630_o.jpg";
import Curtain4 from "../../Assets/Images/Cortinas/116267313_134426148326990_2515625811755465692_n.jpg";
import Curtain5 from "../../Assets/Images/Cortinas/116334864_134429251660013_1430950074574866149_n.jpg";
import Curtain6 from "../../Assets/Images/Cortinas/116339769_134426761660262_1383025871542852714_n.jpg";
import Curtain7 from "../../Assets/Images/Cortinas/116351457_134429061660032_8107408406560832495_o.jpg";
import Curtain8 from "../../Assets/Images/Cortinas/116371038_134428058326799_2042073654436279698_n.jpg";
import Curtain9 from "../../Assets/Images/Cortinas/116580074_134428498326755_6844690414369085726_o.jpg";

import { SRLWrapper } from "simple-react-lightbox";

const Index = () => {
  return (
    <section
      style={{ margin: "30px auto" }}
      className="text-gray-700 body-font"
    >
      <h3
        style={{ textAlign: "center", margin: "115px auto" }}
        className="text-gray-500 text-xs tracking-widest title-font mb-1"
      >
        PUEDES HACER CLICK EN LAS IMAGENES PARA OBTENER MAS DETALLES.
      </h3>
      <SRLWrapper>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div
                style={{ boxShadow: "1px 6px 10px 0 rgba(0, 0, 0, 0.26)" }}
                className="block relative h-48 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={Curtain1}
                />
              </div>
              <div className="mt-4"></div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div
                style={{ boxShadow: "1px 6px 10px 0 rgba(0, 0, 0, 0.26)" }}
                className="block relative h-48 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={Curtain2}
                />
              </div>
              <div className="mt-4"></div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div
                style={{ boxShadow: "1px 6px 10px 0 rgba(0, 0, 0, 0.26)" }}
                className="block relative h-48 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={Curtain3}
                />
              </div>
              <div className="mt-4"></div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div
                style={{ boxShadow: "1px 6px 10px 0 rgba(0, 0, 0, 0.26)" }}
                className="block relative h-48 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={Curtain4}
                />
              </div>
              <div className="mt-4"></div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div
                style={{ boxShadow: "1px 6px 10px 0 rgba(0, 0, 0, 0.26)" }}
                className="block relative h-48 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={Curtain5}
                />
              </div>
              <div className="mt-4"></div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div
                style={{ boxShadow: "1px 6px 10px 0 rgba(0, 0, 0, 0.26)" }}
                className="block relative h-48 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={Curtain6}
                />
              </div>
              <div className="mt-4"></div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div
                style={{ boxShadow: "1px 6px 10px 0 rgba(0, 0, 0, 0.26)" }}
                className="block relative h-48 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={Curtain7}
                />
              </div>
              <div className="mt-4"></div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div
                style={{ boxShadow: "1px 6px 10px 0 rgba(0, 0, 0, 0.26)" }}
                className="block relative h-48 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={Curtain8}
                />
              </div>
              <div className="mt-4"></div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div
                style={{ boxShadow: "1px 6px 10px 0 rgba(0, 0, 0, 0.26)" }}
                className="block relative h-48 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={Curtain9}
                />
              </div>
              <div className="mt-4"></div>
            </div>
          </div>
        </div>
      </SRLWrapper>
    </section>
  );
};

export default Index;
