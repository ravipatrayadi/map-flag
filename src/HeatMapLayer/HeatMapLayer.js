import L from "leaflet";
import "leaflet.heat";
import useFetchData from "../utils/useFetchData";
import { useEffect, useState } from "react";

const HeatMapLayer = ({ map, year, updateData }) => {
    const dataList = useFetchData();
    const yearData = dataList.filter((ele) => ele?.year === year);

    const ansList = yearData.map((ele) => [ele.latitude, ele.longitude]);

    const [popupData, setPopupData] = useState(null);

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

            const popup = L.popup();

            map.on('click', (e) => {
                const { lat, lng } = e.latlng;
                const clickedData = yearData.find(
                    (data) => Math.abs(data.latitude - lat) < 0.01 && Math.abs(data.longitude - lng) < 0.01
                );
                if (clickedData) {
                    setPopupData({
                        latitude: clickedData.latitude,
                        longitude: clickedData.longitude,
                        aqi_level: clickedData.aqi_level,
                    });

                    popup
                        .setLatLng([clickedData.latitude, clickedData.longitude])
                        .setContent(`
                            <div>
                                <p><strong>Latitude:</strong> ${clickedData.latitude}</p>
                                <p><strong>Longitude:</strong> ${clickedData.longitude}</p>
                                <form id="popup-form">
                                    <label>AQI Level:</label>
                                    <input type="text" name="aqi_level" value="${clickedData.aqi_level}" /><br />
                                    <button type="button" onclick="saveData()">Save</button>
                                </form>
                            </div>
                        `)
                        .openOn(map);

                    window.saveData = () => {
                        const form = document.getElementById('popup-form');
                        const formData = new FormData(form);
                        const updatedAqiLevel = formData.get('aqi_level');

                        updateData({
                            latitude: clickedData.latitude,
                            longitude: clickedData.longitude,
                            aqi_level: updatedAqiLevel,
                        });

                        popup.remove();
                    };
                }
            });

            return () => {
                map.removeLayer(heatMapLayer);
                map.off('click'); // Clean up click event listener
                delete window.saveData; // Clean up global function
            };
        }
    }, [map, ansList, yearData, updateData]);

    return null;
};

export default HeatMapLayer;
