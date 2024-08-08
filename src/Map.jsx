import React, { useEffect, useState } from "react";
import mapLayer from "./MapLayer/mapLayer";
import HeatMapLayer from "./HeatMapLayer/heatMapLayer";
import L from "leaflet";

const MapComponent = () => {
    const [map, setMap] = useState(null);
    const [year, setYear] = useState(2013);

    const updateData = (updatedData) => {

        setData((prevData) =>
            prevData.map((item) =>
                item.latitude === updatedData.latitude && item.longitude === updatedData.longitude
                    ? { ...item, ...updatedData }
                    : item
            )
        );
    };

    useEffect(() => {
        const mapInstance = L.map("map", {
            center: [51.505, -0.09],
            zoom: 3,
        });

        mapLayer.addTo(mapInstance);
        setMap(mapInstance);

        return () => {
            mapInstance.remove();
        };
    }, []);

    return (
        <div>
            <div id="map" style={{ height: "500px" }}>
                {map && <HeatMapLayer map={map} year={year} updateData={updateData} />}
            </div>
            <div className="year-container">
                <button onClick={() => setYear(2013)}>2013</button>
                <button onClick={() => setYear(2014)}>2014</button>
                <button onClick={() => setYear(2015)}>2015</button>
                <button onClick={() => setYear(2016)}>2016</button>
                <button onClick={() => setYear(2017)}>2017</button>
                <button onClick={() => setYear(2018)}>2018</button>
                <button onClick={() => setYear(2019)}>2019</button>
                <button onClick={() => setYear(2020)}>2020</button>
                <button onClick={() => setYear(2021)}>2021</button>
                <button onClick={() => setYear(2022)}>2022</button>
            </div>
            <div id="map2">

            </div>
        </div>
    );
};

export default MapComponent;


