import React, { useState } from 'react';
import { Button, Form, Row, Col, Alert } from 'react-bootstrap';
import { useCategories } from '../hooks/useCategory';

const Formulario = () => {
    const {categories} = useCategories()

    const [search, setSearch] = useState({
        name: '',
        category: ''
    });
    const [alert, setAlert] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        if(Object.values(search).includes('')){
            setAlert('All fields are required');
            return;
        }

        setAlert('');
    }
    return(
        <Form onSubmit={handleSubmit}>
            {alert && <Alert variant='info' className='text-center'>{alert}</Alert>}
            <Row>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='name'>Meal`s Name</Form.Label>
                        <Form.Control 
                            id='name'
                            type='text'
                            placeholder='Ej: Fresh sardines'
                            name='name'
                            value={search.name}
                            onChange={e => setSearch({
                                ...search,
                                [e.target.name]: e.target.value
                            })}
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