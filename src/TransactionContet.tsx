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
    createTransaction: (transaction: TransactionInput) => Promise<void>

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

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date()
        })
        const { transaction } = response.data
        setTransactions([
            ...transactions,
            transaction,
        ])
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}