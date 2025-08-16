import axios from 'axios';

export const getAstronomy = async (search) => {
    const { data } = await axios.get(`https://api.weatherapi.com/v1/astronomy.json?key=${process.env.REACT_APP_API_KEY}&q=${search}&dt=`);
    return data;
};

export const getForecast = async (search) => {
    const { data } = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${search}&days=3&aqi=no&alerts=no`);
    return data;
};

export const getRealtime = async (search) => {
    const { data } = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${search}&aqi=yes`);
    return data;
};
