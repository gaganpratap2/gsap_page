// use client;
import React, { useRef, useState } from 'react'
import { allCocktails } from '../../constants'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Menu = () => {
    const contentRef = useRef()

    const [currentIndex , setCurrentIndex] = useState(0);

    useGSAP( () => {
        gsap.fromTo('#title' , {opacity : 0} , {opacity : 1 , duration : 1});
        gsap.fromTo('.cocktails' , {opacity : 0 , xPercent : -100} , {
            xPercent : 0 , opacity : 1 , duration : 1 , ease: 'power1.inOut'
        });
        gsap.fromTo('.details h2' , {yPercent : 100 , opacity : 0} , {
            yPercent : 0 , opacity : 100 , ease : 'power1.inOut'
        })
         gsap.fromTo('.details p' , {yPercent : 100 , opacity : 0} , {
            yPercent : 0 , opacity : 100 , ease : 'power1.inOut'
        })
    }, [currentIndex] )

    const totalcocktails = allCocktails.length
    const goto = (idx) => {
        const newidx = (idx + totalcocktails) % totalcocktails;

        setCurrentIndex(newidx)
    }

    const getcocktails = (indexoffset) => {
        return allCocktails[(currentIndex + indexoffset + totalcocktails) % totalcocktails ]
    }

    const currentcocktail = getcocktails(0);
    const prevcocktail = getcocktails(-1);
    const nextcocktail = getcocktails(+1); 

  return (
    <section id='menu' aria-labelledby='menu-heading'>
        <img src='/images/slider-left-leaf.png' alt='left-leaf'  id='m-left-leaf' />

         <img src='/images/slider-right-leaf.png' alt='right-leaf'  id='m-right-leaf' /> 

         <h2 id='menu-heading' className='sr-only'>
            cocktail Menu
         </h2>

         <nav className='cocktail-tabs' aria-label='Cocktail Navigation'>
            {allCocktails.map( (cocktail , idx) => {
                const isActive = idx === currentIndex;

                return(
                    <button key={cocktail.id} className={`$isActive ?
                         'text-white border-white' :
                          'text-white/50 border-white/50'}`}
                        
                          onClick={() => goto(idx)}
                    >
                        {cocktail.name}
                    </button>
                )
            } )}
         </nav>

            <div className="content">
                <div className="arrows">
                    <button className='text-left' onClick={() => goto(currentIndex -1)}>
                        <span>{prevcocktail.name}</span>
                        <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden= "true" />
                    </button>

                     <button className='text-left' onClick={() => goto(currentIndex + 1)}>
                        <span>{nextcocktail.name}</span>
                        <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden= "true" />
                    </button>

                </div>

                <div className="cocktails">
                    <img src={currentcocktail.image} className='object-contain' alt="" />
                </div>

                <div className="recipe" >
                    <div ref={contentRef} className='info'>
                        <p>Recipe For :</p>
                        <p id='title'> {currentcocktail.name} </p>
                    </div>

                <div className="details">
                    <h2>{currentcocktail.title}</h2>
                    <p>{currentcocktail.description}</p>
                </div>

                </div>

            </div>

    </section>
  )
}

export default Menu