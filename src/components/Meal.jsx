import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'

const Meal = ({meal}) => {
  return (
      <Col md={6} lg={3}>
          <Card className='mb-4'>
              <CardImg variant='top'src={meal.strMealThumb} alt={`Imagen de ${meal.strMeal}`} />

          <div>{meal.strMeal}</div>
          </Card>

          <Card.Body>
                <Card.Title>{meal.strMeal}</Card.Title>
                <Card.Text>Meal</Card.Text>
                <Button className='w-100 text-uppercase mt-2 bold' variant='success'>
                    See the recipe
                </Button>
          </Card.Body>
      </Col>
  )
}

export default Meal