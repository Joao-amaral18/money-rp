import React from 'react'
import Summary from './Summary'
import TransactionTable from './TransactionTable'

export default function Dashboard() {
    return (
        <div className='
            max-w-[1120px] m-auto p-4 px-10 
        '
        >
            <Summary />
            <TransactionTable />
        </div>
    )
}
