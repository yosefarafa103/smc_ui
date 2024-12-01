"use client"
import EditTemplate from '@/components/EditTemplate'
import PieChart from '@/components/PieChart'
import dynamic from 'next/dynamic'
// const PieChart = dynamic(() => import('@/components/PieChart'), { ssr: false })
const page = () => {
  const objs = [{
    labels: ['Mill A', 'Mill B', 'Mill C'],
    values: [100, 200, 23],
    colors: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ]
  },
  {
    labels: ['Mill A', 'Mill B', 'Mill C'],
    values: [100, 200, 23],
    colors: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ]
  },
  {
    labels: ['Mill A', 'Mill B', 'Mill C'],
    values: [35, 35, 35],
    colors: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ]
  }];
  console.log(objs);
  return (
    <>
    <section className='flex items-center gap-10 flex-wrap justify-center py-[20px]'>
      {[1, 2, 3, 4].map((e, i) => (
        <PieChart />
      ))}
    </section>
    </>

  )
}

export default page