import axios from 'axios';
import {useState, useEffect, createContext} from 'react';

export const CategoryConsumer = createContext();

const CategoryProvider = ({children}) => {
    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        try {
            const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
            const { data } = await axios(url);
            setCategories(data.meals);
        } catch (error) {
            console.log(error);
        }

        
    }

    useEffect(() => {getCategories()},[]);

  return (
    <CategoryConsumer.Provider value={{categories}}>
        {children}
    </CategoryConsumer.Provider>
  )
}

export default CategoryProvider;