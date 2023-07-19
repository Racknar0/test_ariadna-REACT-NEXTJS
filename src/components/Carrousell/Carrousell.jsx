import { useEffect, useState } from 'react';

import './Carrousell.scss';


const Carrousel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 680;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const image1Mob = '/assets/banner-aquaman-mob.jpg';
  const image2Mob = '/assets/banner-bumblebee-mob.jpg';
  const image3Mob = '/assets/banner-venom-mob.png';
  const image1Desk = '/assets/banner-aquaman.jpg';
  const image2Desk = '/assets/banner-bumblebee.jpg';
  const image3Desk = '/assets/banner-venom.png';

  const image1 = isMobile ? image1Mob : image1Desk;
  const image2 = isMobile ? image2Mob : image2Desk;
  const image3 = isMobile ? image3Mob : image3Desk;

  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <ol className="carousel-indicators">
        <li data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="2500">
          <img src={image1} className="d-block carousel_img" alt="image_aquaman" />
          <div className="carousel-caption">
            <div className='carousel_title_container'>
                <h5 className='text-white title_caption'>AQUAMAN</h5>
                <p className='text-white description_caption'>Arthur Curry learns the underwaggr kingdom of Atlantis, This Decome.Aquaman, the emperor of Atlantis, committed to defending the entire planet, both land and in the Seas.</p>
            </div>
            <div className='caption_buttons_container mb-4'>
                <button className='button_carrousell'>WATCH NOW</button>
                <button className='button_carrousell button_carrousell_more'>MORE INFO</button>
            </div>
          </div>
        </div>
        <div className="carousel-item active" data-bs-interval="2500">
          <img src={image2} className="d-block carousel_img" alt="image_aquaman" />
          <div className="carousel-caption">
            <div className='carousel_title_container'>
                <h5 className='text-white title_caption'>BUMBLEBEE</h5>
                <p className='text-white description_caption'>In a battle between Autobots and Decepticons, Bumblebee forms an unlikely friendship with Charlie, leading to an adventure to save Earth from destruction.</p>
            </div>
            <div className='caption_buttons_container mb-4'>
                <button className='button_carrousell'>WATCH NOW</button>
                <button className='button_carrousell button_carrousell_more'>MORE INFO</button>
            </div>
          </div>
        </div>
        <div className="carousel-item active" data-bs-interval="2500">
          <img src={image3} className="d-block carousel_img" alt="image_aquaman" />
          <div className="carousel-caption">
            <div className='carousel_title_container'>
                <h5 className='text-white title_caption'>VENOM</h5>
                <p className='text-white description_caption'>A journalist forms an unexpected symbiotic bond with an alien entity known as Venom, resulting in a thrilling battle against powerful adversaries.</p>
            </div>
            <div className='caption_buttons_container mb-4'>
                <button className='button_carrousell'>WATCH NOW</button>
                <button className='button_carrousell button_carrousell_more'>MORE INFO</button>
            </div>
          </div>
        </div>
      </div>
      
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carrousel;