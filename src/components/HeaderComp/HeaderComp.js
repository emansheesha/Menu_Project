import React from 'react'
import './HeaderComp.css'
import { Button } from 'react-bootstrap'
const HeaderComp = () => {
    return (
        <>
            <h1 className='menu-header'>قائمة الطعام</h1>
            <div className='d-flex justify-content-center my-4'>

                <Button className='mx-2 menu-btn'>الكل</Button>{' '}
                <Button className='mx-2 menu-btn'>Warning</Button>{' '}

                <Button className='mx-2 menu-btn'>Warning</Button>{' '}
                <Button className='mx-2 menu-btn'>Warning</Button>{' '}
            </div >
        </>
    )
}

export default HeaderComp
