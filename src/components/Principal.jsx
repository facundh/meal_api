import React from 'react'
import { Container } from 'react-bootstrap'
import Formulario from './Formulario'
import Header from './Header'
import MealsList from './MealsList'

const Principal = () => {
  return (
    <>
        <Header />
        <Container className='mt-5'>
           
        <Formulario />
        <MealsList />
        </Container>
    </>
  )
}

export default Principal