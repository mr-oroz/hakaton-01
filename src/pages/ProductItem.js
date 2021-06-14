import React from 'react';
import {Card, Col } from "react-bootstrap";
const USD_CURRENCY = 85.5;

class ProductItem extends React.Component {
    render() {
        const v = this.props.item;
        return (
            <Col sm={12} md={4} lg={3}>
                <Card className={'mb-3 position-relative overflow-hidden'}>
                    {v.discount ? (
                        <div style={{
                            top: -27,
                            left: -47,
                            textAlign: 'center',
                            fontSize: 25,
                            color: 'white',
                            margin: '10px', position: 'absolute', padding: '22px', width: 100,
                            height: 60, backgroundColor: 'green',
                            transform: 'rotate(-45deg)',
                        }}>{v.discount}%</div>
                    ) : null}
                    <div style={{
                        backgroundImage: `url(${`https://api.office.promarket.besoft.kg/${v.main_image.path.original}`})`,
                        height: 200,
                        width: '100%',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        margin: '10px 0px',
                    }} />
                    <Card.Body>
                        <Card.Title>{v.title}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}

export default ProductItem;
