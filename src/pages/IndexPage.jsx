import '../index.css'
import NavBar from '../NavBar.jsx';

export default function IndexPage(){
  return (
    <div>
      <NavBar />
      {/*header texts*/}
      <div className='min-h-screen p-20 grow items-center justify-around bg-gradient-to-b from-[#89A8B2] to-[#6E8894] w-full'>
        <div className='text-center text-white mt-50'>
          <h2 className='text-4xl pb-2 font-rubik'>HI, I'M ALLISON JOHN PEREZ</h2>
          <h1 className='text-7xl pb-2 font-rubik font-medium inline-block border-b-3'>ASPIRING WEB DEVELOPER</h1>
          <p className='font-rubik pt-5 text-xl'>
            I’m a fresh  graduate from Far Eastern University - Cavite with a Bachelor’s <br/> 
            degree in Information Technology. Proficient in HTML, CSS, ReactJS, Javascript, <br/>
            with strong attention to detail. I’m adaptable, eager to learn, and committed to <br/>
            continuous growth and improvement.
          </p>
        </div>
      </div>  
    </div>
  );
}