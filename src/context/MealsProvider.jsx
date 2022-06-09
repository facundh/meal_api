import axios from "axios";
import { useState, useEffect, createContext } from "react";

export const MealsContext = createContext();

const MealsProvider = ({children}) => {
    const [ comidas , setComidas ] = useState([]);
    const [ modal, setModal ] = useState(false);
    const [receta, setReceta] = useState({});
    const [ comidaId, setComidaId ] = useState(null);
    const [cargando, setCargando] = useState(false);
 
    const handleModalClick = () => {
        setModal(!modal)
    }

    const handleComidaId = (id) => {
        setComidaId(id);
    }

    useEffect(() => {
        setCargando(true);

        const getReceta = async () => {
            if(!comidaId) return
            try {
                const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${comidaId}`
                const { data } = await axios(url);
                setReceta(data.meals[0]);
                
            } catch (error) {
                console.log(error);
            } finally {
                setCargando(false)
            }
        }
        getReceta()
    },[comidaId])

    const getMeals =  async datos => {
        try {
            const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${datos.category}`
       
            const {data} = await axios(url);
             setComidas(data.meals)
        } catch (error) {
            console.log(error);
        }

     
        
    }

    return(
        <MealsContext.Provider value ={{getMeals, comidas, handleModalClick, handleComidaId, receta, setReceta, cargando,modal }}>
            { children }
        </MealsContext.Provider>
    )
}

export default MealsProvider;