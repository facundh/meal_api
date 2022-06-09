import React from 'react';
import { Row } from 'react-bootstrap';
import { useMeals } from '../hooks/useMeals';
import Meal from './Meal';

const MealsList = () => {
    const {comidas} = useMeals();
    
  return (

    <Row className='mt-4'>
        {comidas.map(meal => (
            <Meal key={meal.idMeal} meal={meal}/>
        ))}
    </Row>
  )
}

export default MealsList