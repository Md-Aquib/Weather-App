import { createContext,useState} from 'react'

const WeatherContext = createContext()

export default WeatherContext;

export const WeatherProvider = ({children}) => {

    const [city,setCity] = useState(false)
    const [temp,setTemp] = useState('')
    const [desc,setDesc] = useState('')
    const [minTemp,setminTemp] = useState('')
    const [maxTemp,setmaxTemp] = useState('')
    const [pres,setPres] = useState('')
    const [hum,setHum] = useState('')
    const [vis,setVis] = useState('')
    const [ws,setWs] = useState('')

    
    let getWeather = async(e) => {
        e.preventDefault()
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.city.value}&appid=${process.env.REACT_APP_API_KEY}&units=metric`, {
            method:'POST'
        })
        let data = await response.json()
        if(response.status === 200){
            setCity(data.name)
            setTemp(Math.round(data.main.temp))
            setDesc(data.weather[0].description)
            setminTemp(Math.round(data.main.temp_min))
            setmaxTemp(Math.round(data.main.temp_max))
            setPres(data.main.pressure)
            setHum(data.main.humidity)
            setVis(data.visibility)
            setWs(data.wind.speed)
        }
    };

    let changeCity = ()=> {
        setCity(false)
    };

    let contextData = {
        city,
        getWeather,
        temp,
        desc,
        minTemp,
        maxTemp,
        pres,
        hum,
        vis,
        ws,
        changeCity
    }

    return (
        <WeatherContext.Provider value={contextData} >
            {children}
        </WeatherContext.Provider>
      )
}