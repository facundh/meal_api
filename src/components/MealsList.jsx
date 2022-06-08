import React from 'react';
import { Row } from 'react-bootstrap';
import { useMeals } from '../hooks/useMeals';
import Meal from './Meal';

const MealsList = () => {
    const {meals} = useMeals()
  return (

    <Row>
        {meals.map(meal => (
            <Meal key={meal.idMeal} meal={meal}/>
        ))}
    </Row>
  )
}

export default MealsList