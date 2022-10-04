import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'
import { useContext } from 'react'
import { TransactionsContext } from '../TransactionContet'

export default function Summary() {
    const { transactions } = useContext(TransactionsContext)

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposit += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.withdraw += transaction.amount
            acc.total -= transaction.amount

        }
        return acc
    }, {
        deposit: 0,
        withdraw: 0,
        total: 0
    })

    const totalWithdraw = 0;
    return (
        <div>
            <div className='flex justify-between -mt-28'>
                <div className='bg-white dark:bg-gray-700 dark:text-gray-100 py-6 px-8 rounded'>
                    <header className='flex gap-28 items-center justify-between'>
                        <p>Entradas</p>
                        <ArrowCircleDown className='text-green-500' size={32} />
                    </header>
                    <strong className='mt-4 text-4xl block font-semibold leading-10'>{Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposit)}</strong>
                </div>
                <div className='bg-white dark:bg-gray-700 dark:text-gray-100 py-6 px-8 rounded'>
                    <header className='flex gap-28 items-center justify-between'>
                        <p>Saídas</p>
                        <ArrowCircleUp className='text-red-500' size={32} />
                    </header>
                    <strong className='mt-4 text-4xl block font-semibold leading-10'>-{Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraw)}</strong>
                </div>
                <div className='bg-green-300 text-white py-6 px-8 rounded'>
                    <header className='flex gap-28 items-center justify-between'>
                        <p>Total</p>
                        <span className='text-3xl text-white '>$</span>
                    </header>
                    <strong className='mt-4 text-4xl block font-semibold leading-10'>{Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}</strong>
                </div>
            </div>
        </div>
    )
}
