import L from "leaflet";
import "leaflet.heat";
import useFetchData from "../utils/useFetchData";
import { useEffect } from "react";

const HeatMapLayer = ({ map, year }) => {
    console.log(year);
    const dataList = useFetchData();
    const year2013 = dataList.filter((ele) => ele?.year === year);

    const ansList = year2013.map((ele) => [ele.latitude, ele.longitude]);

    useEffect(() => {
        if (map && ansList.length > 0) {
            const heatMapLayer = L.heatLayer(ansList, {
                radius: 25,
                minOpacity: 1.5,
                gradient: {
                    0.4: "blue",
                    0.65: "lime",
                    1: "red",
                },
            });

            heatMapLayer.addTo(map);

            return () => {
                map.removeLayer(heatMapLayer);
            };
        }
    }, [map, ansList]);

    return null;
};

export default HeatMapLayer;


