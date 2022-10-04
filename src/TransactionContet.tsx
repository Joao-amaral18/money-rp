import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api'

interface Transaction {
    id: string,
    title: string,
    amount: number,
    category: string,
    type: string
    createdAt: string
}
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;


interface TransactionProviderProps {
    children: ReactNode;
}

interface TransactionsCotextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => void

}
export const TransactionsContext = createContext<TransactionsCotextData>(
    {} as TransactionsCotextData
)


export function TransactionsProvider({ children }: TransactionProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([])
    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
        console.log(transactions)
    }, [])

    function createTransaction(transaction: TransactionInput) {
        api.post('/transactions', transaction)
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}