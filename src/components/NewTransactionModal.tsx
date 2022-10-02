import { X, ArrowCircleDown, ArrowCircleUp } from 'phosphor-react';
import classNames from 'classnames';
import { useState } from 'react';
import Modal from 'react-modal'
import './modal.css'

interface ModalProps {
    isNewModalOpen: boolean,
    handleCloseModal: () => void,
    isDarkModeOn: boolean,
}
export default function NewTransactionModal({ isNewModalOpen, handleCloseModal, isDarkModeOn }: ModalProps) {
    const [type, setType] = useState('deposit');

    return (
        <Modal
            overlayClassName={isDarkModeOn ? 'dark react-modal-overlay' : ' react-modal-overlay'}
            className='dark:bg-gray-700 opacity-100  bg-gray-100 flex w-full max-w-[576px] p-12 relative rounded '
            isOpen={isNewModalOpen}
            onRequestClose={handleCloseModal}
        >
            <button
                onClick={handleCloseModal}
                className='absolute right-6 top-6 hover:brightness-50 transition-all'>
                <X size={24} color={isDarkModeOn ? '#fff' : '#556'} />
            </button>
            <form>
                <h2 className='font-semibold text-gray-500 text-2xl mb-8 dark:text-gray-100 '>Cadastrar transação</h2>
                <input className='w-full p-6 h-16 rounded border border-gray-200 bg-gray-200 dark:bg-gray-600 placeholder:dark:text-gray-300 placeholder:text-gray-500' type="text" placeholder='Titulo' />
                <input className='w-full p-6 h-16 rounded border border-gray-200 bg-gray-200 dark:bg-gray-600 dark:text-gray-300 placeholder:dark:text-gray-300 placeholder:text-gray-500  mt-4' type="number" placeholder='Valor' />
                <div className='mt-4 grid grid-cols-2 gap-10'>
                    <button type='button' onClick={() => { setType('deposit') }} className={classNames('h-16 border rounded border-gray-200 hover:border-gray-900 transition-all dark:hover:border-white flex items-center justify-center dark:text-gray-100 text-gray-500',
                        {
                            'bg-green-300/10 dark:text-gray-900': type === 'deposit'
                        }
                    )}> <ArrowCircleDown className='text-green-500' size={32} /><span className='block ml-4'>Entrada</span>
                    </button>
                    <button type='button' onClick={() => { setType('withdraw') }} className={classNames('h-16 border rounded border-gray-200 hover:border-gray-900 transition-all dark:hover:border-white flex items-center justify-center dark:text-gray-100 text-gray-500',
                        {
                            'bg-red-300/20 dark:text-gray-900': type === 'withdraw'
                        }
                    )}> <ArrowCircleUp className='text-red-500' size={32} /><span className='block ml-4'>Saída</span></button>
                </div>
                <input className='w-full p-6 h-16 rounded border border-gray-200 bg-gray-200 dark:bg-gray-600 text-gray-300 placeholder:dark:text-gray-300 placeholder:text-gray-500  mt-4' placeholder="Categoria" />
                <button className='w-full py-6 h-16 bg-green-300 rounded mt-6 hover:brightness-75 text-white transition-all' type="submit">Cadastrar</button>
            </form>
        </Modal>
    )
}
