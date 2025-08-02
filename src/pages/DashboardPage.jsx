import React from 'react'
import CommonHead from '../components/commonHead/CommonHead'
import Card from '../components/Dashboard/card/Card'
import Chart from '../components/Dashboard/chart'

function DashboardPage() {
  return (
    <div className='bg-[#E8EDF2] w-full'>
      <CommonHead CommonHead1Title="Dashboard" />
      <div className='grid grid-cols-4 gap-4 p-4'>
        <Card title="Card 1" cardButton="" value="$126.500" percentage="34.7%" comparedTo="Compared to Jan 2022" />
        <Card title="Card 2" cardButton="" value="$126.500" percentage="34.7%" comparedTo="Compared to Jan 2022" />
        <Card title="Card 3" cardButton="" value="$126.500" percentage="34.7%" comparedTo="Compared to Jan 2022" />
        <Card title="Card 4" cardButton="" value="$126.500" percentage="34.7%" comparedTo="Compared to Jan 2022" />
      </div>
      <div className='p-4'>
        <h2 className='text-xl font-semibold mb-4'>Sales Overview</h2>
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <Chart />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage