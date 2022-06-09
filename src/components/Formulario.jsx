import React, { useState } from 'react';
import { Button, Form, Row, Col, Alert } from 'react-bootstrap';
import { useCategories } from '../hooks/useCategory';
import { useMeals } from '../hooks/useMeals';

const Formulario = () => {
    const {categories} = useCategories();
    const {getMeals} = useMeals();

    const [search, setSearch] = useState({
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
        getMeals(search);
    }
    return(
        <Form onSubmit={handleSubmit}>
            {alert && <Alert variant='info' className='text-center'>{alert}</Alert>}
            <Row>
                
                <Col md={6} className='w-100 mb-5'>
                    <Form.Label htmlFor='category'>Category</Form.Label>
                    <Form.Select id='category' name='category' value={search.category}
                    onChange={e => setSearch({
                        ...search,
                        [e.target.name]: e.target.value
                    })
                }>
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

            <Row className='justify-content-center w-100'>
                <Col md={3}>
                    <Button variant='info' className='text-uppercase w-100' type='submit'>
                        Select your meal
                    </Button>
                </Col>

            </Row>
        </Form>
    )
}

export default Formulario;