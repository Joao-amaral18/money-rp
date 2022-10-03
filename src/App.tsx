import { useState } from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Modal from 'react-modal';
import Summary from './components/Summary';
import NewTransactionModal from './components/NewTransactionModal';
import { TransactionsContext } from './TransactionContet';

Modal.setAppElement('#root')

function App() {
  const [isDarkModeOn, setIsDarkModeOn] = useState(true);

  function toggleDarkMode() {
    setIsDarkModeOn(!isDarkModeOn)
  }
  const [isNewModalOpen, setIsNewModalOpen] = useState(false)

  function handleOpenModal() {
    setIsNewModalOpen(true)
  }
  function handleCloseModal() {
    setIsNewModalOpen(false)
  }

  return (
    <TransactionsContext.Provider value={[]}>
      <div className={isDarkModeOn ? 'dark bg-gray-900 h-screen' : 'bg-zinc-200 h-screen'}>
        <Header
          isDarkModeOn={isDarkModeOn}
          toggleDarkMode={toggleDarkMode}
          onOpenNewModal={handleOpenModal}
        />
        <NewTransactionModal
          handleCloseModal={handleCloseModal}
          isNewModalOpen={isNewModalOpen}
          isDarkModeOn={isDarkModeOn}

        />

        <Dashboard />
      </div >
    </TransactionsContext.Provider>
  )
}

export default App
