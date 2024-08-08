

// // import React, { useEffect, useState } from 'react';
// // import mapLayer from './MapLayer/mapLayer';
// // import HeatMapLayer from './HeatMapLayer/heatMapLayer';
// // import L from "leaflet";



// // const MapComponent = () => {
// //     const heatMapLayer = HeatMapLayer();

// //     useEffect(() => {
// //         const map = L.map('map', {
// //             center: [51.505, -0.09],
// //             zoom: 3
// //         });

// //         mapLayer.addTo(map);
// //         heatMapLayer.addTo(map);

// //         return () => {
// //             map.remove();
// //         }


// //     }, []);
// //     return (
// //         <div>
// //             <div id="map" style={{ height: '500px' }}></div>

// //             <div>
// //                 <button onClick={() => { }}>2013</button>
// //             </div>
// //             <div id="content">
// //                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis</p>
// //             </div>
// //         </div>
// //     );
// // };

// // export default MapComponent;
// import React, { useEffect, useState } from "react";
// import mapLayer from "./MapLayer/mapLayer";
// import HeatMapLayer from "./HeatMapLayer/heatMapLayer";
// import L from "leaflet";

// const MapComponent = () => {
//     const [map, setMap] = useState(null);

//     useEffect(() => {
//         const mapInstance = L.map("map", {
//             center: [51.505, -0.09],
//             zoom: 3,
//         });

//         mapLayer.addTo(mapInstance);
//         setMap(mapInstance);

//         return () => {
//             mapInstance.remove();
//         };
//     }, []);

//     return (
//         <div>
//             <div id="map" style={{ height: "500px" }}>{map && <HeatMapLayer map={map} year={2013} />}</div>

//             <div>
//                 <button onClick={() => { }}>2013</button>
//                 <button onClick={() => { }}>2014</button>
//                 <button onClick={() => { }}>2015</button>
//                 <button onClick={() => { }}>2016</button>
//                 <button onClick={() => { }}>2017</button>
//                 <button onClick={() => { }}>2018</button>
//                 <button onClick={() => { }}>2019</button>
//                 <button onClick={() => { }}>2020</button>
//                 <button onClick={() => { }}>2021</button>
//                 <button onClick={() => { }}>2022</button>
//             </div>
//             <div id="content">
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis</p>
//             </div>
//         </div>
//     );
// };

// export default MapComponent;


import React, { useEffect, useState } from "react";
import mapLayer from "./MapLayer/mapLayer";
import HeatMapLayer from "./HeatMapLayer/heatMapLayer";
import L from "leaflet";

const MapComponent = () => {
    const [map, setMap] = useState(null);
    const [year, setYear] = useState(2013);

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
            <div id="map" style={{ height: "500px" }}>{map && <HeatMapLayer map={map} year={year} />}</div>
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
            <div id="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis</p>
            </div>
        </div>
    );
};

export default MapComponent;
