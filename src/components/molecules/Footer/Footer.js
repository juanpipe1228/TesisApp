import * as React from "react";
import { Divider } from "@mui/material";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
      <div class="footer-clean">
        <footer>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-sm-10 col-md-10">
                <h2>Sobre nosotros</h2>
                <p>
                  Esta aplicación ha sido desarrollada con fines educativos para
                  el proyecto de grado de los estudiantes Juan Rincón y Pablo
                  Ponce de la Universidad San Buenaventura Bogotá para optar al
                  título de Ingeniería de Sonido.
                </p>
              </div>

              <div class="col-lg-3 item social">
                <a href="https://github.com/juanpipe1228/TesisApp">
                  <img
                    class="footer-img"
                    src="https://1000logos.net/wp-content/uploads/2018/08/GitHub-cat-logo.jpg"
                  ></img>
                </a>
                <a href="https://usbbog.edu.co/">
                  <img
                    class="footer-img"
                    src="https://pbs.twimg.com/profile_images/1161360904451231745/BS-PW5nG_400x400.jpg"
                  ></img>
                </a>
                {/* <a href="#">
                  <i class="icon ion-social-snapchat"></i>
                </a>
                <a href="#">
                  <i class="icon ion-social-instagram"></i>
                </a> */}
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
