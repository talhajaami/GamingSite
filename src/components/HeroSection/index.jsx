import { auto } from '@popperjs/core';
import BackgroundImage from '../../../src/assets/img/bg-img/wallpaper.jpg'

const SecHeroSection = ({   }) => {

  return (
    <img className='homepage-image-size' draggable="false" style={{ width: '100%', height: '864px'}} src={BackgroundImage} alt="" />
    // <section className={ClassSec} id="home">
    //   <div className="hero-section-content">
    //     <div className="container ">
    //       <div className="row align-items-center">
    //         <div className={ClassDiv}>
    //           <div className="welcome-content">
    //             <div className="promo-section">
    //               <h3 className="special-head dark">{specialHead}</h3>
    //             </div>
    //             <h1>{title}</h1>
    //             <p className="w-text fadeInUp" data-wow-delay="0.3s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem blanditiis ad perferendis, labore delectus dolor sit amet, adipisicing elit. Eveniet.</p>
    //             <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
    //               <a href="#" className="btn more-btn mr-3">{link1}</a>
    //               <a href="#" className="btn more-btn">{link2}</a>
    //             </div>
    //           </div>
    //         </div>
    //           <div className="col-lg-6">
    //               <div className="illusto-2">
    //                 <img draggable="false" src={BackgroundImage} alt="" />
    //               </div>
    //           </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

  );
}

export default SecHeroSection;