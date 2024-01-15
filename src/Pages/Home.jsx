import { useStateContext } from '../Contexts/ContextProvider'
import HomeDisplay from '../Components/HomeDisplay'
import Hero from '../Components/Hero'
import display from '../Data/display.json'
import { Link } from 'react-router-dom'

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })}
  const {hero} = useStateContext();
  return (
    <div className='flex flex-col fade-in'>
     <Hero 
      img1={hero.img1}
      name={hero.name}
      description={hero.description}
     />
     <section className='relative'>
      <div className='absolute border top-128 left-10 border-gray-300 text-gray-300 px-5 font-mono text-xl py-1 opacity-65'>
       compact
      </div>
      <div className='absolute border top-135 right-12 border-gray-300 text-gray-300 px-5 font-mono text-xl py-1 opacity-65'>
       classic
      </div>
      <div className='absolute w-100 h-0.5 opacity-55 bg-gray-300 top-140 right-44'></div>
      <div className='absolute w-40 h-0.5 opacity-55 bg-gray-300 top-140 -right-0'></div>
      <div className='absolute w-100 h-0.5 opacity-55 bg-gray-300 top-135 left-80'></div>
      <div className='absolute w-100 h-0.5 opacity-55 bg-gray-300 top-135 -left-16'></div>
      <HomeDisplay
        img1={display[0].img1}
        name={display[0].name}
        price={display[0].price}
        description={display[0].description}
        img2={display[0].img2}
        img3={display[0].img3}
        img4={display[0].img4}
        img5={display[0].img5}
        img6={display[0].img6}
        type={display[0].type}
        color={display[0].color}
      />
     </section>
     <section className='mt-20'>
      <div className='flex items-center justify-center relative'>
        <img className='w-400 h-555' src='https://img.vitkac.com/uploads/product_thumb/OKULARY%20CHARLIE%200-C154/up/2.jpg'/>
        <div className='p-10 px-18 text-center bg-zinc-100 h-555 flex flex-col items-center relative'>
         <div className='absolute -bottom-128 flex items-center ml-72 w-600'>
         <img
          className='w-250'
          src='https://i.pinimg.com/originals/5d/a2/3b/5da23b45565e70f656b50c4d4409e46c.jpg'
        />
         <div className='flex- flex-col ml-10'>
         <p className='mb-3 font-semibold'>They enhance real life like no other sunglasses i`ve ever seen</p>
        <p><span className='text-cyan-400 font-semibold'>@maggsdalzell</span> on instagram</p>
         </div>
         </div>
         <h1 className='font-mono text-4xl font-thin mb-10 mt-10 w-400'>The difference is in the lens</h1>
         <p className='w-400 font-semibold'>through endeless reasearch with physical photo filters and digital manipulation techniques we discoverd our perfect lens. We found a way to use natural sunlight to transform the world around you into a vivid picture; an experience full of clarity and coulour making everyday life look ten times better</p>
        </div>
        <img className='w-380 h-555' src='https://i.pinimg.com/736x/55/1f/2f/551f2fbd4081135020d26b3d874f0399.jpg' />
      </div>
      <div className='flex items-start justify-center mt-140'>
       <div className='relative'>
         <img
          className='w-400 shadow-lg'
          src='https://img.freepik.com/premium-photo/stylish-man-sunglasses-hat_85574-13912.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=ais'
         />
         <div className='flex- flex-col   ml-10 absolute right-140 mr-32 text-center bottom-36 w-300'>
           <p className='mb-3 font-semibold'>wearing under the sunset is the most amazing thing.</p>
          <p><span className='text-cyan-400 font-semibold'>@KellyLing</span> on instagram</p>
         </div>
         <div className='absolute w-80 h-300 bg-cyan-300 -top-36 left-36 -z-30 shadow-lg'></div>
       </div>
       <div className='relative'>
       <div className='absolute w-250 h-250 bg-cyan-300 -bottom-30 -left-40 -z-30 shadow-lg'></div>
        <img
          className='w-250 ml-8 shadow-lg'
          src='https://media1.popsugar-assets.com/files/thumbor/ArueK53Zo5lmv6LuMlgvBuuUup0/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2020/02/07/890/n/1922564/6c3f73985e3dc6d08e4236.78018502_/i/best-sunglasses-for-women.jpg'
        />
         <div className='flex- flex-col   ml-10 absolute left-140 bottom-36 w-300 text-center'>
           <p className='mb-3 font-semibold'>wearing under the sunset is the most amazing thing.</p>
          <p><span className='text-cyan-400 font-semibold'>@KellyLing</span> on instagram</p>
         </div>
       </div>
      </div>
     </section>
     <section className='flex items-center mt-50 justify-center '>
      <div className='relative'>
      <p className='absolute z-10 left-5 top-3 text-xl text-white font-semibold'>Women`s sunglasses</p>
      <Link to='/women'><button
      onClick={scrollToTop} className='absolute bottom-5 left-0 bg-gray-100 z-10 px-10 py-0.5 shadow-lg hover:bg-transparent transition hover:shadow-transparent hover:text-white'>Explore women`s collection</button></Link>
       <img 
        className='w-420 darken-image'
        src='https://cdn.shopify.com/s/files/1/0601/5415/1102/files/49465631_326446067965810_3991664606457984798_n_1_1024x1024_a868d3a0-8fc1-461a-8a17-00bce457b999_480x480.jpg?v=1694676743'
       />
      </div>
      <div className='relative'>
       <p className='absolute z-10 left-8 top-3 text-xl text-white font-semibold'>Men`s sunglasses</p>
       <Link to='/men'><button     
         onClick={scrollToTop} className='absolute bottom-5 left-5 bg-gray-100 z-10 px-10 py-0.5 shadow-lg hover:bg-transparent transition hover:shadow-transparent hover:text-white'>Explore men`s collection</button></Link>
       <img
        className='w-420 ml-5 darken-image'
        src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ce26033a-d01f-479f-b2d8-14f0d2bb3918/flyfree-sunglasses-P5S37p.png'
         />
      </div>
     </section>
    </div>
  )
}

export default Home