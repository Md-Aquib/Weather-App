import { createContext,useState} from 'react'

const WeatherContext = createContext()

export default WeatherContext;

export const WeatherProvider = ({children}) => {

    const [city,setCity] = useState(false)
    const [temp,setTemp] = useState('')
    const [desc,setDesc] = useState('')

    
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
        }
    };

    let contextData = {
        city,
        getWeather,
        temp,
        desc,
    }

    return (
        <WeatherContext.Provider value={contextData} >
            {children}
        </WeatherContext.Provider>
      )
}