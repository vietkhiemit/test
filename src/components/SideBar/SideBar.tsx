import React from 'react'

type Props = {}

const SideBar = (props: Props) => {
    return (
        <div className='sidebar'>
            <div className="menu">
                <ul>
                    <li>
                        <a href="#">
                            <span><i className="fas fa-home" /></span>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span><i className="fas fa-address-card" /></span>
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span><i className="fas fa-cog" /></span>
                            News
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span><i className="fas fa-address-book" /></span>
                            Blog
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span><i className="fas fa-comments-alt-dollar" /></span>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>



        </div>
    )
}

export default SideBar