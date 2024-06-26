import TopSection from "./TopSection/TopSection";
import {motion as m} from 'framer-motion';
import Maximise from "./MiddleSection/Maximise";
import LimitedTimeDeal from "./MiddleSection/LimitedTimeDeal";
import BrandSection from "./MiddleSection/BrandSection";
import b1 from './Images/bottom-1.webp';
import b2 from './Images/bottom-2.webp';
import b3 from './Images/bottom-3.webp';
import b4 from './Images/bottom-4.webp';

import bfi1 from './Images/buttfrominsta/bfi1.webp';
import bfi2 from './Images/buttfrominsta/bfi2.webp';
import bfi3 from './Images/buttfrominsta/bfi3.webp';
import bfi4 from './Images/buttfrominsta/bfi4.webp';
import bfi5 from './Images/buttfrominsta/bfi5.webp';
import bfi6 from './Images/buttfrominsta/bfi6.webp';
import bfi7 from './Images/buttfrominsta/bfi7.webp';
import bfi8 from './Images/buttfrominsta/bfi8.webp';

import bannerI1 from './Images/bannerI1.webp'
import { Footer } from "../Footer/footer";





function LandingPage() {


    return (
        <>
            <m.div initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.35 , ease: "easeOut"}}
            exit={{opacity:1}}
            >
            
            <TopSection />
            
             <Maximise />

             <LimitedTimeDeal />

             <BrandSection />



             {/* tesing... */}

             <div>
        
    
        <div id="buttFromInstagram">
            <h2>Client Feedback</h2>
            <div className="buttFromInstagramImagContainer">
                <div className="alignBFI" >
                    <img src={bfi1} className="bFICRound"></img>
                </div>
                <div className="alignBFI" >
                    <img src={bfi2} className="bFICRound"></img>
                </div>
                <div className="alignBFI" >
                    <img src={bfi3} className="bFICRound"></img>
                </div>
              

            </div>
        </div>
        <div id="buttFromInstagram">
            <h2>Truck Art Exclusively for Pakistan</h2>
            <div className="buttFromInstagramImagContainer">
                <div className="alignBFI" >
                    <img src={bfi6} className="bFICRound"></img>
                </div>
                <div className="alignBFI" >
                    <img src={bfi7} className="bFICRound"></img>
                </div>
                <div className="alignBFI" >
                    <img src={bfi5} className="bFICRound"></img>
                </div>
                <div className="alignBFI" >
                    <img src={bfi8} className="bFICRound"></img>
                </div>

            </div>
        </div>



        <div id="bannerShowCase">
            <a href="" className="bannerI1Link"><img src={bannerI1} className="fullsizeB"></img>
        <div className="ImageOverText">
            <h2>Indulge Your Beauty Obsession</h2>
            <button>Read More</button>
        </div>
        </a>
        </div>
        <div id="bottom_features">
            <div className="bottom_features_container">
                <img src={b1} className="bf_img"></img>
                <img src={b2} className="bf_img"></img>
                <img src={b3} className="bf_img"></img>
            </div>
        </div>
        <Footer />
        </div>

            </m.div>
            

            
        </>
    );
}

export default LandingPage;