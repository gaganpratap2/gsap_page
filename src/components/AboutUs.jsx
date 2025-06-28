import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'

const AboutUs = () => {

    useGSAP( () => {
        const titleSplit = SplitText.create('#about h2' , {
            type : 'words'
        })

        const scrollTimeLine = gsap.timeline({
            scrollTrigger : {
                trigger : '#about',
                start : 'top center',

            }
        })

        scrollTimeLine.from(titleSplit.words , {
            opacity : 0,
            duration : 1,
            yPercent : 100,
            ease : 'expo.out', 
            stagger : 0.04
        }).from('.top-grid div , .bottom-grid div' , {
            opacity : 0,
            duration : 1,   
            ease : 'power1.inOut',
            stagger: 0.06,
        } , '-=0.5') 
    } )

  return (
   <div id="about">
    <div className='mb-16 md:px-0 px-5'>
        <div className="content">
            <div className='md:col-span-8'>
                <p className='badge'> Best Drinks </p>
                <h2>Where every details matters <span className='text-white'>--</span>
                    from muddle to garnish 
                </h2>
            </div>

            <div className="sub-content">
                <p>Every cocktails we serve is reflection</p>

                <div>
                    <p className='md:text-3xl text-xl font-bold'>
                        <span>4.5</span> / 5
                    </p>

                    <p className='text-sm text-white-100'>
                        More than +14000 customers
                    </p>

                </div>
            </div>
        </div>
    </div>

    <div className='top-grid'>
        <div className='md:col-span-3'>
            <div className='noisy' />
            <img src="/images/abt1.png" alt="grid-img-1" />
        </div>

           <div className='md:col-span-6'>
            <div className='noisy' />
            <img src="/images/abt2.png" alt="grid-img-2" />
        </div>

        <div className='md:col-span-3'>
            <div className='noisy' />
            <img src="/images/abt5.png" alt="grid-img-5" />
        </div>

    </div>

         <div className='bottom-grid'>

        <div className='md:col-span-8'>
            <div className='noisy' />
            <img src="/images/abt3.png" alt="grid-img-3" />
        </div>

        <div className='md:col-span-4'>
            <div className='noisy' />
            <img src="/images/abt4.png" alt="grid-img-4" />
        </div>

         </div>


   </div>
  )
}

export default AboutUs