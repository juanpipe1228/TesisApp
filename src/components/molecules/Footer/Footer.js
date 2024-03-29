import * as React from "react";
import { Divider } from "@mui/material";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
      <div class="footer-clean">
        <footer>
          <div class="container-footer">
            <div class="row justify-content-center">
              <div class="col-sm-10 col-md-10">
                <h2>Sobre nosotros</h2>
                <p>
                  Esta aplicación ha sido desarrollada con fines educativos para
                  el proyecto de grado de los estudiantes Juan Rincón y Pablo
                  Ponce de la Universidad San Buenaventura Bogotá para optar al
                  título de Ingeniería de Sonido. Para conocer más sobre la
                  caracterización y medición de los micrófonos de{" "}
                  <a href="https://tesisv3.s3.amazonaws.com/Tesis+JuanR_PabloP+Final.docx">
                    click sobre este texto
                  </a>{" "}
                  para poder leer la tesis completa.
                </p>
              </div>

              <div class="col-lg-3 item social">
                <a href="https://github.com/juanpipe1228/TesisApp">
                  <img
                    alt="Logo GitHub"
                    target="_blank"
                    class="footer-img"
                    src="https://1000logos.net/wp-content/uploads/2018/08/GitHub-cat-logo.jpg"
                  ></img>
                </a>
                <a href="https://usbbog.edu.co/">
                  <img
                    alt="Logo USB"
                    target="_blank"
                    class="footer-img"
                    src="https://tesisv3.s3.amazonaws.com/logo-usb.jpeg"
                  ></img>
                </a>

                <p class="copyright">
                  Mediciones y aplicación desarrollada por Juan Rincón & Pablo
                  Ponce-2023
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
