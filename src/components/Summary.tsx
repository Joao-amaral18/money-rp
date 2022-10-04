import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'
import { useContext } from 'react'
import { TransactionsContext } from '../TransactionContet'

export default function Summary() {
    const { transactions } = useContext(TransactionsContext)



    return (
        <div>
            <div className='flex justify-between -mt-28'>
                <div className='bg-white dark:bg-gray-700 dark:text-gray-100 py-6 px-8 rounded'>
                    <header className='flex gap-28 items-center justify-between'>
                        <p>Entradas</p>
                        <ArrowCircleDown className='text-green-500' size={32} />
                    </header>
                    <strong className='mt-4 text-4xl block font-semibold leading-10'>R$1000,00</strong>
                </div>
                <div className='bg-white dark:bg-gray-700 dark:text-gray-100 py-6 px-8 rounded'>
                    <header className='flex gap-28 items-center justify-between'>
                        <p>Saídas</p>
                        <ArrowCircleUp className='text-red-500' size={32} />
                    </header>
                    <strong className='mt-4 text-4xl block font-semibold leading-10'>R$1000,00</strong>
                </div>
                <div className='bg-green-300 text-white py-6 px-8 rounded'>
                    <header className='flex gap-28 items-center justify-between'>
                        <p>Total</p>
                        <span className='text-3xl text-white '>$</span>
                    </header>
                    <strong className='mt-4 text-4xl block font-semibold leading-10'>R$1000,00</strong>
                </div>
            </div>
        </div>
    )
}
