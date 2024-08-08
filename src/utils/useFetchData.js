import { useState, useEffect } from "react";

const useFetchData = () => {
    const [dataList, setDataList] = useState([]);
    const fetchData = async () => {
        const data = await fetch("src/Data/data.json");
        const resData = await data.json();
        setDataList(resData)
    }
    useEffect(() => {
        fetchData();
    }, [])

    return dataList;
}

export default useFetchData; 