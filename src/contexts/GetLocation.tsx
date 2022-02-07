import axios from 'axios'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'


interface GetLocationContextProps {
  children: ReactNode
}

type LocationData = {
  location: {
    name: string
    localtime: string
  },
  current: {
    condition: {
      icon: string
      text: string
    }
  }
}

interface GetLocationData {
  location: LocationData | undefined
}

export enum States {
  none,
  loading = "loading",
  completed = "completed",
  error = "error"
}


export const GetLocationContext = createContext({} as GetLocationData)

export function GetLocationContextProvider({ children }: GetLocationContextProps) {
  const [location, setLocation] = useState<LocationData>()
  // const [contextState, setContextState] = useState(States.none)



  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async ({ coords }) => {
        await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=661026bef3784058b4b161650220602&q=${coords.latitude},${coords.longitude}&days=5&aqi=yes&alerts=yes`)
          .then(response => setLocation(response.data))
      }, function (err) {
        axios.get(`https://api.weatherapi.com/v1/forecast.json?key=661026bef3784058b4b161650220602&q=paris&days=5&aqi=yes&alerts=yes`)
          .then(response => setLocation(response.data))
      })
    }
  }, [])
  return (
    <GetLocationContext.Provider value={{
      location

    }}>
      {children}
    </GetLocationContext.Provider>
  )
}


export const useGetLocationContext = () => {
  return useContext(GetLocationContext)
}