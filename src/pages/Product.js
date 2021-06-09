import React, { Component } from 'react';
import { Container, Card, Button } from 'react-bootstrap'
class Product extends Component {
    render() {
        const { cart, Categories } = this.props
        return (
            <Container>
                <div className='card_position'>
                    {cart.map((product, index) => {
                        return (
                            <>
                                < div key={index} className='card_inner' >
                                    <Card style={{ width: '18rem', position: 'relative' }}>
                                        <span className={product.discount === null ? null : 'discount'}>{product.discount !== null ? `скидка ${product.discount} %` : null}</span>
                                        <Card.Img variant="top img" src={`https://api.office.promarket.besoft.kg/${product.main_image.path.original}`} />
                                        <Card.Body>
                                            <Card.Title>{product.title}</Card.Title>
                                            <Card.Text>{product.discount !== null ? `${product.price - (product.price * product.discount / 100)} сом` : null}
                                                {product.discount !== null ? <p className={'list-line'}>price: {product.price} сом</p> : `price: ${product.price}`}
                                            </Card.Text>
                                            <Card.Text>{Categories.filter((categories) => {
                                                return categories.id === product.category_id
                                            })[0].title}</Card.Text>
                                            <Button variant="primary">Buy</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </>
                        )
                    })}
                </div>
            </Container>
        );
    }
}

export default Product;