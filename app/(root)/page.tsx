import Header from '@/components/Header'
import VideoCard from '@/components/VideoCard'
import React from 'react'

const Page = () => {
  return (
   <main className='wrapper page'>
    <Header title='All Videos' subHeader='Public Library' />
    <h1>Welcome to Capturly</h1>
    <VideoCard 
      id="1"
      title="Video - 1"
      thumbnail="/assets/samples/thumbnail (1).png"
      createdAt={new Date('2025-05-24T14:35:00')}
      userImg="/assets/images/jason.png"
      username="Karan"
      visibility="public"
      duration={156}
      views={10}
      />
   </main>
  )
}

export default Page