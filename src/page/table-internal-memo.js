import { useEffect, useState } from 'react'
import Table from '../components/table'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { AiTwotoneEdit } from 'react-icons/ai'
import { useSelector } from 'react-redux';


const ButtonComponent = styled.div`

  &.button-status-Not-Approve{
    border: 1px solid red;
    color: red;
    display: flex;
    justify-content: center;
    font-weight: 700;
    padding: 3px;
    border-radius: 5px;
  }

  &.button-status-Approve{
    background-color: green;
    color: #FFFF;
    display: flex;
    justify-content: center;
    font-weight: bold;
    padding: 3px;
    border-radius: 5px;
  }

  &.button-status-Pending{
    background-color: #0069D9;
    color: #FFFF;
    display: flex;
    justify-content: center;
    font-weight: bold;
    padding: 3px;
    border-radius: 5px;
  }

  &.button-status-Reject{
    background-color: gray;
    color: #FFFF;
    display: flex;
    justify-content: center;
    font-weight: bold;
    padding: 3px;
    border-radius: 5px;
  }

  &.button-edit {
    background-color: #ffca2c;
    border: none;
    color: #fff;
    font-size: 20px;
    border-radius: 50px;
    text-align: center;
    padding: 10px 15px;
    /* padding: 20px; */
  }
`

export default function TableInternalMemo(props) {
    const [columns, setColumns] = useState(null)
    const account = useSelector((state) => state.account)


    useEffect(() => {
        const init = async () => {
            let column = [
                {
                    fixed: 'left',
                    title: '',
                    dataIndex: '',
                    width: 50,
                    render: (_, record) => (
                        <NavLink to={'/form-acc-it/' + record.id}>
                            <ButtonComponent className={'button-edit'}>
                                <AiTwotoneEdit />
                            </ButtonComponent>
                        </NavLink>
                    )
                },
                {
                    title: 'เลขที่หนังสือออก',
                    dataIndex: 'book_number',
                    width: 100,
                    sorter: (a, b) => {
                        a = a.ticket_no || ''
                        b = b.ticket_no || ''
                        return a.localeCompare(b)
                    },

                },
                {
                    title: 'เรื่อง',
                    dataIndex: 'detail',
                },
                {
                    title: 'ออกโดย',
                    dataIndex: 'issued',
                },
                {
                    title: 'ถึง',
                    dataIndex: 'receive',
                },
                {
                    title: 'MDY',
                    dataIndex: 'date_doc',
                },
                {
                    title: 'หมายเหตุ',
                    dataIndex: 'remark',
                },
                // {
                //     title: 'Approve-Finance',
                //     dataIndex: 'fin_approve',
                //     width: 140,
                //     render: (_, record) => {
                //         let status = null
                //         if (!record?.fin_approve || record?.fin_approve === 0) status = ''
                //         if (record?.fin_approve && record?.fin_approve === 'Approve') status = 'Approve'
                //         if (record?.fin_approve && record?.fin_approve === 'Reject') status = 'Reject'

                //         return (
                //             <div className="table-button-group">
                //                 <ButtonComponent className={'button-status-' + status} onClick={() => { }}>
                //                     <b>{status}</b>
                //                 </ButtonComponent>
                //             </div>
                //         )
                //     }
                // },
                // {
                //     title: 'ผู้ดำนเนินการ',
                //     dataIndex: 'fin_name',
                // },

                // {
                //     title: 'Approve-PO',
                //     dataIndex: 'po_approve',
                //     width: 140,
                //     render: (_, record) => {
                //         let status = null
                //         if (!record?.po_approve || record?.po_approve === 0) status = ''
                //         if (record?.po_approve && record?.po_approve === 'Approve') status = 'Approve'
                //         if (record?.po_approve && record?.po_approve === 'Reject') status = 'Reject'

                //         return (
                //             <div className="table-button-group">
                //                 <ButtonComponent className={'button-status-' + status} onClick={() => { }}>
                //                     <b>{status}</b>
                //                 </ButtonComponent>
                //             </div>
                //         )
                //     }
                // },

                // {
                //     title: 'ผู้ดำนเนินการ',
                //     dataIndex: 'po_name',
                // },
                // {
                //     title: 'Acc-Number',
                //     dataIndex: 'acc_number',
                // },
                // {
                //     title: 'Acc-Name',
                //     dataIndex: 'acc_name',
                // },
                // {
                //     title: 'Acc-Date',
                //     dataIndex: 'acc_date',
                // },
            ]

            setColumns(column)
        }

        init()
    }, [account, props.data])

    return (
        <>
            <Table
                dataSource={props.data}
                columns={columns}
            />
        </>
    )
}
