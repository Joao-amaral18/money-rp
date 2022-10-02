import { useEffect } from 'react'
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
                        <td className='p-4 rounded-t rounded-bl dark:text-white text-gray-700'>Desenvolvimento de website</td>
                        <td className='text-red-500 p-2'>r$12.000</td>
                        <td className='p-2'>desenvolvimento</td>
                        <td className='rounded-tr rounded-br p-2'>{Date().toString()}</td>
                    </tr>
                    <tr className='bg-white dark:bg-gray-700 text-gray-300 rounded'>
                        <td className='p-4 rounded-t rounded-bl dark:text-white text-gray-700'>Desenvolvimento de website</td>
                        <td className='text-green-300 p-2'>r$12.000</td>
                        <td className='p-2'>desenvolvimento</td>
                        <td className='rounded-tr rounded-br p-2'>{Date().toString()}</td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}
