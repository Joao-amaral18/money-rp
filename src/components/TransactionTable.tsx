import React, { useEffect } from 'react'
import { api } from '../services/api'

export default function TransactionTable() {

    useEffect(() => {
        api.get('transactions')
            .then(response => console.log(response.data))
    }, [])
    return (
        <div className='mt-16'>
            <table className='w-full border-separate border-spacing-y-2 rounded'>
                <thead >
                    <tr className='text-gray-300 '>
                        <th className='px-8 py-4 text-left leading-6'>Titulo</th>
                        <th className='px-8 py-4 text-left leading-6'>Valor</th>
                        <th className='px-8 py-4 text-left leading-6'>Categoria</th>
                        <th className='px-8 py-4 text-left leading-6'>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-white dark:bg-gray-700 text-gray-300 rounded'>
                        <td className='p-4  dark:text-white text-gray-700'>Desenvolvimento de website</td>
                        <td className='text-red-500'>r$12.000</td>
                        <td>desenvolvimento</td>
                        <td>{Date().toString()}</td>
                    </tr>
                    <tr className='bg-white dark:bg-gray-700 text-gray-300 rounded'>
                        <td className='p-4 dark:text-white text-gray-700'>Desenvolvimento de website</td>
                        <td className='text-green-300'>r$12.000</td>
                        <td>desenvolvimento</td>
                        <td>{Date().toString()}</td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}
