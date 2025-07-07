import { Container } from '../components/Container'
import Blog01 from './posts/Blog01'
import Blog02 from './posts/Blog02'
import Blog03 from './posts/Blog03'
import UserCard from './UserCard'


function Page() {

  return (
    
    <Container>
      <div className='p-2'>
        <div className='pt-10 '>
          <section className=' flex justify-center items-center w-full h-[100px]'>
              <UserCard
            name="Sharwan Jung Kunwar"
            address="Kathmandu, Nepal"
            postTime="Published on July 1, 2025"
            img="coder.png"
          />
          </section>
        <Blog01/>
        </div>

        <section className='my-5'>
            <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="0.01"></path>
          </svg>
          </section>

        {/* blog02 */}
          <div className=''>
          <section className=' flex justify-center items-center w-full h-[100px]'>
              <UserCard
            name="Sharwan Kunwar"
            address="Kathmandu, Nepal"
            postTime="Published on July 2, 2025"
            img="coder.png"
          />
          </section>
        <Blog02/>
        </div>

        <section className='my-5'>
            <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="0.01"></path>
          </svg>
          </section>

        {/* blog03 */}
          <div className=''>
          <section className=' flex justify-center items-center w-full h-[100px]'>
              <UserCard
            name="Sharwan Kunwar"
            address="Kathmandu, Nepal"
            postTime="Published on July 3, 2025"
            img="coder.png"
          />
          </section>
        <Blog03/>
        </div>




      </div>
    </Container>
    
  )
}

export default Page
