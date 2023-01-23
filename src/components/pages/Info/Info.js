import React from "react";
import { useTabNavigation } from "../../../hooks/useTabNav";
import TabsComponent from "../../atoms/Tabs/TabsComponent";
import "./Info.css";

const Info = () => {
  const tabValue = useTabNavigation(0);
  const optionsTab = ["Vientos", "Cuerdas", "Percusión"];
  return (
    <div>
      <h2>Tecnicas de grabación para instrumentos de:</h2>
      <TabsComponent {...tabValue} options={optionsTab} />
      {tabValue.value === 0 ? (
        <div class="maincontainer-info">
          <div class="mt-5 container-info">
            <h4>Quena</h4>
            <p>
              Direccionando el micrófono hacia la boquilla donde el músico
              ejecuta el instrumento; se optó por posicionar el micrófono a unos
              60 cm del interprete.
            </p>
            <img
              class="info-img"
              src="https://tesisv3.s3.amazonaws.com/images/Quena.png"
            />
            <h4>Quenacho</h4>
            <p>
              Direccionando el micrófono al igual que con la quena; se optó por
              posicionar el micrófono a unos 40 cm del interprete.
            </p>
            <img
              class="info-img"
              src="https://tesisv3.s3.amazonaws.com/images/Quenacho.png"
            />
            <h4>Bastos, maltas y chulis</h4>
            <p>
              La posición del micrófono se llevó a cabo a una distancia
              aproximadamente de 35 cm, con una orientación hacia las boquillas
              de los tubos donde se crea la resonancia de este. La angulación
              fue lejos de la nariz del músico para captar lo menos posible su
              respiración.
            </p>
            <img
              class="info-img"
              src="https://tesisv3.s3.amazonaws.com/images/Bastos.png"
            />
            <h4>Toyos</h4>
            <p>
              La grabación de los toyos se llevo igual, cambiando la distancia
              con una de aproximadamente de 30 cm.
            </p>
            <img
              class="info-img"
              src="https://tesisv3.s3.amazonaws.com/images/Toyos.jpg"
            />
          </div>
        </div>
      ) : tabValue.value === 1 ? (
        <div class="maincontainer-info">
          <div class="mt-5 container-info">
            <h4>Guitarra acústica</h4>
            <p>
              Este instrumento se grabó con dos micrófonos, uno apuntando hacía
              el puente y el otro apuntando hacia el traste 12; ambos a una
              distancia de 20 cm.
            </p>
            <img
              class="info-img"
              src="https://tesisv3.s3.amazonaws.com/images/guitarra.png"
            />
            <h4>Charango y ronroco</h4>
            <p>
              Para ambos instrumentos se optó por usar un solo micrófono
              apuntando hacia el orificio de cada uno a una distancia de 15 cm.
            </p>
            <img
              class="info-img"
              src="https://tesisv3.s3.amazonaws.com/images/charango.png"
            />
            <img
              class="info-img"
              src="https://tesisv3.s3.amazonaws.com/images/ronroco.png"
            />
          </div>
        </div>
      ) : (
        <div class="maincontainer-info">
          <div class="mt-5 container-info">
            <h4>Bombo andino</h4>
            <p>
              Se opta por ubicar el micrófono en un punto medio entre la
              ejecución de los golpes del aro y el centro del parche del
              instrumento, colocando el micrófono a una distancia
              aproximadamente de 5 cm del aro, apuntando hacia el centro del
              parche.
            </p>
            <img
              class="info-img"
              src="https://tesisv3.s3.amazonaws.com/images/bombo.png"
            />
            <h4>Cajón peruano</h4>
            <p>
              Para la grabación se opta por utilizar dos micrófonos, uno que
              capte la parte de atrás que es por donde sale el aire, y el otro
              en la parte frontal donde este se ejecuta. Para la primera
              posición se ubicó el micrófono a unos 5 centímetros de la boca del
              orificio del instrumento. El segundo micrófono se ubicó a
              aproximadamente 10 cm de su parte frontal apuntando hacia los
              bordes de su tapa.
            </p>
            <img
              class="info-img"
              src="https://tesisv3.s3.amazonaws.com/images/cajon.png"
            />
            <h4>Guacharaca</h4>
            <p>
              Se opta por posicionar el micrófono apuntando hacia el centro de
              este a una distancia de aproximadamente 10 cm.
            </p>
            <img
              class="info-img"
              src="https://tesisv3.s3.amazonaws.com/images/guacharaca.jpg"
            />
            <h4>Caxixis</h4>
            <p>
              Este instrumento teniendo una variación del material que tengan
              internamente lo que hace que cambie de cierta forma su timbre, se
              optó por posicionar dos micrófonos a aproximadamente 15 cm de
              distancia de cada uno.
            </p>
            <img
              class="info-img"
              src="https://tesisv3.s3.amazonaws.com/images/caxixi.jpg"
            />
            <h4>Chajchas o semillas</h4>
            <p>
              Al igual que los caxixis, una chajcha era de material diferente
              que la otra, se optó por posicionar dos micrófonos a
              aproximadamente 8 cm de distancia de cada uno.
            </p>
            <img
              class="info-img"
              src="https://tesisv3.s3.amazonaws.com/images/chaichas.jpg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Info;
