import axios from "axios";
import { useState, useEffect, createContext } from "react";

export const MealsContext = createContext();

const MealsProvider = ({children}) => {
    const [meals , setMeals] = useState([]);

    const getMeals =  async datos => {
        try {
            const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${datos.id}&c=${datos.category}`
            const {data} = await axios(url);
            setMeals(data)
        } catch (error) {
            console.log(error);
        }
        
    }

    return(
        <MealsContext.Provider value ={{getMeals}}>
            { children }
        </MealsContext.Provider>
    )
}

export default MealsProvider;