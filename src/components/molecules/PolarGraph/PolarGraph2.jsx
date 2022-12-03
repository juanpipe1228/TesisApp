import { useEffect, useState} from "react";
import { Card } from "react-bootstrap";
import { RadarGraph } from "../../atoms/Graphics/Graphics";
import { graph } from "../../../data/graphsData";
import { useItemContext } from "../../../context/appContext";
const PolarGraph2 = () => {

    const {dropdownItem2} = useItemContext()

    const [dataLine , setDataLine] = useState([])
    const colorsBG = [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(153, 102, 255, 0.2)",
      ];
    const colorsBorder = [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(153, 102, 255)",
      ];

    useEffect(() => {
       const dataMic1 = graph?.find((item)=>item?.id === dropdownItem2)


       let finalData = []

       if(dataMic1){
        finalData.push({
            label: dataMic1?.Frec1,
            data: dataMic1?.valor1,
            fill: false,
            backgroundColor: colorsBG[0],
            borderColor: colorsBorder[0],
            borderWidth: 1,
        },
        {
            label: dataMic1?.Frec2,
            data: dataMic1?.valor2,
            fill: false,
            backgroundColor: colorsBG[1],
            borderColor: colorsBorder[1],
            borderWidth: 1,
        },{
            label: dataMic1?.Frec3,
            data: dataMic1?.valor3,
            fill: false,
            backgroundColor: colorsBG[2],
            borderColor: colorsBorder[2],
            borderWidth: 1,
        })
       }
    setDataLine(finalData)
    }, [dropdownItem2]);

    const finalData = {
        labels: ['0°', '15°', '30°', '45°', '60°', '75°', '90°', '105°', '120°', '135°', '150°', '165°', '180°', '195°', '210°', '225°', '240°', '255°', '270°', '285°', '300°', '315°', '330°', '345°'],        datasets: dataLine,
      };
    return (
        <Card>
            <div className="row py-3"> 
                <div className="col-1"></div>
                <div className="col-10">
                    <RadarGraph
                    optionsLine = {

                    {
                        plugins: {
                            title: {
                                display: true,
                                text: 'Patrón Polar',
                                font:{
                                    size:18
                                },
                                padding: {
                                    top: 10,
                                    bottom: 10}}},
                    }}
                    dataLine = {finalData}
                    />
                </div>
                <div className="col-1"></div>
            </div>
        </Card>
    );
}

export default PolarGraph2;
