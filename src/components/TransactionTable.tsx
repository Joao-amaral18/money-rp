import classNames from 'classnames'
import { useContext } from 'react'
import { TransactionsContext } from '../TransactionContet'

export default function TransactionTable() {
    const { transactions } = useContext(TransactionsContext)

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
                    {
                        transactions.map(transaction => (
                            <tr className='bg-white dark:bg-gray-700 text-gray-300 rounded'>
                                <td className='p-4 rounded-t rounded-bl dark:text-white text-gray-700'>{transaction.title}</td>
                                <td className={classNames(
                                    { 'text-green-300 p-2': transaction.type === 'deposit' },
                                    { 'text-red-500 p-2': transaction.type === 'withdraw' },

                                )}>{Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}</td>
                                <td className='p-2'>{transaction.category}</td>
                                <td className='rounded-tr rounded-br p-2'>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}</td>
                            </tr>)
                        )}


                </tbody>
            </table>
        </div >
    )
}
