import { NavbarComponent } from "./navbar.style"
import React, { useEffect } from 'react'
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import axios from "axios"
import { setAccount } from '../store/AccoutReducer'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router'



export default function Navbar() {
    const dispatch = useDispatch()
    const account = useSelector((state) => state.account)
    const history = useNavigate();


    useEffect(() => {
        const init = async () => {
            try {
                let token = localStorage.getItem('token')
                const header = `Authorization: Bearer ${token}`;
                let userdata = await axios.get(process.env.REACT_APP_API + '/profile', { withCredentials: true, headers: header })
                console.log('userdata=>', userdata)
                if (userdata?.data?.status) {
                    dispatch(setAccount(userdata.data.data))
                }
            } catch (error) {
                console.log(error)
            }
        }
        init()
    }, [])

    const items = [
        {
            key: '4',
            label: 'Sign-out',
            danger: true,
        },
    ];

    const onClick = ({ key }) => {
        localStorage.clear()
        history('/')
        // setTimeout(() => {
        //     localStorage.clear()
        //     history('/')
        //     console.log("Delayed for 1 second.");
        // }, "1000")

    };

    return (
        <NavbarComponent>
            <div className="group-box-nav">
                <div className="box1">
                    <div className="logo-img">
                        <img src="/logo-chase.png" width={200}></img>
                    </div>
                    <div className="text-dash">
                        <div>Document Management</div>
                    </div>
                </div>
                <div className="box2">
                    <div className="user-login">
                        <img src="/ty2.png" alt="" width={50} className="img-user" />
                    </div>
                    <div className="comment">
                        <div className="profile">
                            <div>
                                <img src="/profile.png" width={50} alt="" />
                            </div>
                            <div className="name-profile">
                                <Dropdown
                                    menu={{
                                        items,
                                        onClick,
                                    }}
                                >
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space style={{ color: '#FFFF' }}>
                                            {account?.profile?.username}
                                            <DownOutlined />
                                        </Space>
                                    </a>
                                </Dropdown>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </NavbarComponent >
    )
}
