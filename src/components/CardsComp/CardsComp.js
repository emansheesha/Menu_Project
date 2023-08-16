import React from 'react';
import Roll from 'react-reveal/Roll';
import './CardsComp.css';
import { Col, Row } from 'react-bootstrap';
const CardsComp = ({ data }) => {

    return (
        <>
            {data?.map(item =>
                <Roll key={`${item.id}-card`}>
                    <div className='card d-flex my-2' >
                        <Row >
                            <Col xs={12} sm={3}  >
                                <img src={`images/${item.imgUrl}`} className='card-img' />
                            </Col>
                            <Col xs={12} sm={9} className='py-2 px-4 d-flex justify-content-between'>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p className='description'>
                                        {item.description}

                                    </p>
                                </div>
                                <div className='price'>
                                    {item.price}

                                </div>
                            </Col>

                        </Row>
                    </div>
                </Roll>
            )}



        </>
    )
}

export default CardsComp
