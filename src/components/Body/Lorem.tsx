import React from 'react'
import LOREM1 from '../../img/lorem1.png'
import LOREM2 from '../../img/lorem2.png'
import LOREM3 from '../../img/lorem3.png'
type Props = {}

const Lorem = (props: Props) => {
    return (
        <div className='content'>
            <div className='lorem'>
                <h3>Lorem ipsum dolor sit amet</h3>
                <div className='lorem-1'>
                    <img src={LOREM1} alt="" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at
                    </p>
                </div>
                <p className='lorem-p'>ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
            </div>
            <div className='lorem' style={{ marginLeft: "50px" }}>
                <h3>Lorem ipsum dolor sit amet</h3>
                <div className='lorem-1'>
                    <img src={LOREM2} alt="" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at
                    </p>
                </div>
                <p className='lorem-p'>ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
            </div>
            <div className='lorem' style={{ marginLeft: "50px" }}>
                <h3>Lorem ipsum dolor sit amet</h3>
                <div className='lorem-1'>
                    <img src={LOREM3} alt="" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at
                    </p>
                </div>
                <p className='lorem-p'>ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
            </div>
        </div>
    )
}

export default Lorem