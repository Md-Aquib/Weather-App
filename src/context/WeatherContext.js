import { createContext,useState} from 'react'

const WeatherContext = createContext()

export default WeatherContext;

export const WeatherProvider = ({children}) => {

    const [city,setCity] = useState(false)
    
    let cityName = (e)=>{
        e.preventDefault()
        setCity(e.target.city.value)
    };  

    let contextData = {
        city,
        cityName
    }

    return (
        <WeatherContext.Provider value={contextData} >
            {children}
        </WeatherContext.Provider>
      )
}