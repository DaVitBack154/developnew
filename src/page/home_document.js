import React from 'react'
import Navbar from '../components/navbar'
import styled from 'styled-components'
import TableInternalMemo from './table-internal-memo'
import { useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import Card from '../components/card';

const Homepage = styled.div`
    
    .border-table{
        background-color: #F0F3F3;
        width: 100%;
        padding: 20px;

        .group-internal{
            background-color: #FFFF;
            padding: 20px 10px;
            
        
            .head-table{
                .box-flex{
                    display: flex;

                    .group-box{
                        background-color: red;
                        width: 90%;
                        display: flex;
                        justify-content: space-evenly;

                        .box-1,.box-2,.box-3,.box-4,.box-5{
                            width: 18%;
                            background-color: greenyellow;
                        }
                    }
                }

                .head-db{
                color: #3F4254;
                font-weight: bold;
                }
                .text-dash{
                    font-size: 12px;
                    font-weight: 600;
                    color: #B5B5C3;
                }

                .btn-add{
                    position: relative;
                    top: 35px;
                    .btn-inter{
                        background-color: #084A49;
                        border: none;
                        border-radius: 5px;
                        color: #FFF;
                        padding: 7px 10px;
                        font-weight: bold;
                        cursor: pointer;
                    

                        .add{
                            font-size: 20px;
                            position: relative;
                            top: 5px;
                            margin-right: 5px;
                    
                        }
                    }
                }
            }
        }

        
    }

`

export default function Homedocument(props) {
    const [interdata, setInterdata] = useState(null)

    return (
        <Homepage>
            <Navbar />
            <div className='border-table'>
                <div className='group-internal'>
                    <div className='head-table'>
                        <div className='box-flex'>
                            <div>
                                <div className='head-db'>
                                    DashBord
                                </div>
                                <div className='text-dash'>
                                    Table ˃ Internal-Memo
                                </div>
                            </div>

                            <Card />
                        </div>


                        <div className='btn-add'>
                            <NavLink to={''}>
                                <button className='btn-inter'>
                                    <IoMdAddCircle className='add' />
                                    Internal-Memo
                                </button>
                            </NavLink>
                        </div>
                    </div>
                    <div>
                        <TableInternalMemo data={interdata} setData={setInterdata} key='1' />
                    </div>
                </div>


            </div>
        </Homepage>

    )
}
