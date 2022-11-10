import { useEffect, useState} from "react";
import { Card } from "react-bootstrap";
import { LineGraph } from "../../atoms/Graphics/Graphics";
import { graph } from "../../../data/graphsData";
import { useItemContext } from "../../../context/appContext";
const FrecuencyGraph = () => {

    const {dropdownItem1, dropdownItem2,dropdownItem3} = useItemContext()

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
       const dataMic1 = graph?.find((item)=>item?.id === dropdownItem1)
       const dataMic2 = graph?.find((item)=>item?.id === dropdownItem2)
       const dataMic3 = graph?.find((item)=>item?.id === dropdownItem3)

       let finalData = []

       if(dataMic1){
        finalData.push({
            label: dataMic1?.Mic,
            data: dataMic1?.valor,
            backgroundColor: colorsBG[0],
            borderColor: colorsBorder[0],
            borderWidth: 1,
        })
       }
       if(dataMic2){
        finalData.push({
            label: dataMic2?.Mic,
            data: dataMic2?.valor,
            backgroundColor: colorsBG[1],
            borderColor: colorsBorder[1],
            borderWidth: 1,
        })
       }
       if(dataMic3){
        finalData.push({
            label: dataMic3?.Mic,
            data: dataMic3?.valor,
            backgroundColor: colorsBG[2],
            borderColor: colorsBorder[2],
            borderWidth: 1,
        })
       }
       setDataLine(finalData)
    }, [dropdownItem1, dropdownItem2,dropdownItem3]);

    const finalData = {
        labels: [20, 25, 31.5, 40, 50, 63, 80, 100, 125, 160, 200, 250, 315, 400, 500, 630, 800, 1000, 1250, 1600, 2000, 2500, 3150, 4000, 5000, 6300, 8000, 10000, 12500, 16000, 20000],
        datasets: dataLine,
      };
    return (
        <Card>
            <div className="row py-4"> 
                <div className="col-1"></div>
                <div className="col-10">
                    <LineGraph
                    optionsLine = {

                    {
                        plugins: {
                            title: {
                                display: true,
                                text: 'Respuesta en frecuencia',
                                font:{
                                    size:20
                                },
                                padding: {
                                    top: 10,
                                    bottom: 30}}},
                        scales:{
                            x:{
                                type:"logarithmic",
                                min:20,
                                BeginAtZero:false,
                                title: {
                                    display: true,
                                    text: 'Frecuencia (Hz)'}
                            } ,
                            y:{
                                title: {
                                    display: true,
                                    text: 'Magnitud (dB)'}
                            } ,
                        },
                    }}
                    dataLine = {finalData}
                    />
                </div>
                <div className="col-1"></div>
            </div>
        </Card>
    );
}

export default FrecuencyGraph;
