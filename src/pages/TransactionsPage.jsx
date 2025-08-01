import React from 'react'
import CommonHead from '../components/commonHead/CommonHead'
import TransationsList from '../components/Transations/TransationsList'
import CompletedTransactions from '../components/Transations/CompletedTransactions'

function TransactionsPage() {
  return (
    <>
     <div className='w-full'>
        <CommonHead CommonHead1Title="Transations List" />
        <TransationsList />
        <CompletedTransactions />
      </div>
    </>
  )
}

export default TransactionsPage