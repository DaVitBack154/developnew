import React from 'react'
import styled from "styled-components"

const Cardcomponent = styled.div`
    .group-box{
        background-color: red;
        width: 100%;
        display: flex;
        justify-content: space-evenly;

        .box-1,.box-2,.box-3,.box-4,.box-5{
            width: 18%;
            background-color: greenyellow;
        }
    }
    
`

export default function Card(props) {
    // const data = props.data;
    // const total = data.map((datas) =>
    //     <li>{datas}</li>
    // );

    // const data = [1, 2, 3, 4, 5];

    return (
        <Cardcomponent className='group-box'>
            <div className='box-1'>
                div
            </div>
            {/* <div className='box-2'>box1</div>
            <div className='box-3'>box1</div>
            <div className='box-4'>box1</div>
            <div className='box-5'>box1</div> */}
        </Cardcomponent>

    )
}
