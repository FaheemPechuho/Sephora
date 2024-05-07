import React from 'react';
import banner from './img/banner.png';
import teddy from './img/teddy.webp';
import heart from './img/heart.webp';
import oneMore from './img/oneMore.webp';
import {motion as m} from 'framer-motion';

function Banner() {
    return (
        <>
         <div className="welcomeSection">

<h2>Welcome to #SephoraGlam.</h2>
<p></p>
</div>

            <div className="banner_outer">

                <m.div
                initial={{x:"-100%"}}
            animate={{x:"0%"}}
            transition={{duration:0.55 , ease: "easeOut"}}
            exit={{opacity:1}}
                >
                        <img src={banner} alt="Not found" />

                </m.div>


                <m.div className='second_div_about'
                initial={{x:"100%"}}
            animate={{x:"0%"}}
            transition={{duration:0.55 , ease: "easeOut"}}
            exit={{opacity:1}}
                >

                    <div><h2>About Us</h2></div>
                     <p><q className='testingQuote'> Sephora's globally renowned beauty empire now enters Pakistan.
Offering an unparalleled expertise, innovative products, personalized services.
Celebrating individuality, empowering self-expression through makeup, skincare, haircare, fragrance.
Curating a prestigious assortment of brands for the diverse Pakistani community </q></p>
                </m.div>


            </div>


           


            <div className="detail_about">

               




               <div>
                <h3>
                .
                </h3>
               </div>
               <div>
               </div>

            </div>
        </>
    );
}

export default Banner;