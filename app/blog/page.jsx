import { Container } from '../components/Container'
import React from 'react'
import Blog01 from './posts/Blog01'
import Blog02 from './posts/Blog02'
import UserCard from './UserCard'

function Page() {
  return (
    <Container>
      <div className=''>
        <div className='pt-10 '>
          <section className=' flex justify-center items-center w-full h-[100px]'>
              <UserCard
            name="Sharwan Jung Kunwar"
            address="Kathmandu, Nepal"
            postTime="Published on July 1, 2025"
            img="computer.png"
          />
          </section>
        <Blog01/>
        </div>

        {/* blog02 */}
          <div className='pt-15 '>
          <section className=' flex justify-center items-center w-full h-[100px]'>
              <UserCard
            name="Sharwan Jung Kunwar"
            address="Kathmandu, Nepal"
            postTime="Published on July 2, 2025"
            img="computer.png"
          />
          </section>
        <Blog02/>
        </div>




      </div>
    </Container>
  )
}

export default Page
