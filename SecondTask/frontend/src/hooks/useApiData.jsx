import {useEffect, useState} from "react";
import axios from "axios";

export default function useApiData(apiUrl, initValue = []) {
    const [dataArray, setDataArray] = useState(initValue);
    const [apiError, setApiError] = useState({})

    useEffect(() => {
        axios
            .get(apiUrl)
            .then((response) => {
                setDataArray(response.data)
            })
            .catch((error) => {
                setApiError(error)
            })
    }, [apiUrl]);


    return [dataArray, setDataArray, apiError];
}
