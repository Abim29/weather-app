import axios from "axios";

export const getWeather = (callback) => {
    axios.get("http://api.weatherapi.com/v1/current.json?key=8011640ccabb4440bdc34504241009&q=London&aqi=no")
        .then((res)=>{            
            callback(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
}