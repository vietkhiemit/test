import React from 'react'
import LOGO from '../../img/logoNCC.png'
import Footer from './Footer'
import Lorem from './Lorem'
import Retangle from './Retangle'
type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <div className='body-l'>
                <div className="logo">
                    <img src={LOGO} alt="" />
                </div>
                <div>
                    <Retangle />
                    <Lorem />
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Header