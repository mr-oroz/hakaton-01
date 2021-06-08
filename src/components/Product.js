import React from 'react';
import PRODUCTS from '../products.json';
import { Container, Card, Button } from 'react-bootstrap';
import CATEGORIES from './categories';

class Product extends React.Component {
    render() {
        return (
            <Container>
                <div className='card_position'>
                    {PRODUCTS.map((product) => {
                        return (
                            <div className='card_inner'>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top img" src={`https://api.office.promarket.besoft.kg/${product.main_image.path.original}`} />
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>price: {product.price} som {product.discount !== null ?  `${product.discount} % discount` : null}</Card.Text>
                                        <Card.Text>{CATEGORIES.filter((categories) => {
                                            return categories.id === product.category_id
                                        })[0].title}</Card.Text>
                                        <Button variant="primary">Buy</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </Container>
        );
    }
}

export default Product;