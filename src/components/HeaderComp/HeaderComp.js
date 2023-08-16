import React from 'react'
import './HeaderComp.css'
import { Button } from 'react-bootstrap'
const HeaderComp = ({ data, handleCategory }) => {
    const dataSet = data?.map(item => item.category)
    let dataCategory = [...new Set(dataSet)]
    var flag;
    const handleCategoryBtn = (item) => handleCategory(item)
    const changeBg = (item, value) => {
        //    console.log( document.getElementsByClassName('menu-btn').map(btn=>btn))
    }
    return (
        <>
            <h1 className='menu-header'>قائمة الطعام</h1>
            <div className='d-flex justify-content-center my-4'>
                <Button className='mx-sm-2 mx-xs-1 menu-btn' onClick={() => {
                    handleCategoryBtn('الكل')
                }}
                >الكل
                </Button>{' '}
                {dataCategory?.map(item =>
                    <span key={`${item}`}>
                        <Button className='mx-sm-2 mx-xs-1 menu-btn'

                            onClick={(e) => {
                                changeBg(item, e.target.innerHTML)
                                handleCategoryBtn(item)
                            }} >{item}
                        </Button>{' '}
                    </span>
                )}


            </div >
        </>
    )
}

export default HeaderComp
