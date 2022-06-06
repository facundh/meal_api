import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { useCategories } from '../hooks/useCategory';

const Formulario = () => {
    const {categories} = useCategories()
    return(
        <Form>
            <Row>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='name'>Meal`s Name</Form.Label>
                        <Form.Control 
                            id='name'
                            type='text'
                            placeholder='Ej: Fresh sardines'
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Label htmlFor='category'>Category</Form.Label>
                    <Form.Select id='category' name='category'>
                        <option value="">-- Select Category --</option>
                        {
                            categories.map(category => (
                                <option key={category.strCategory} value={category.strCategory}>
                                    {category.strCategory}
                                </option>
                            ))
                        }
                    </Form.Select>
                </Col>
            </Row>
        </Form>
    )
}

export default Formulario;