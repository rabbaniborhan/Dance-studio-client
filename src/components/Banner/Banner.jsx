
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/Banner/banner1.png'
import img2 from '../../assets/Banner/banner2.jpg'
import img3 from '../../assets/Banner/banner3.png'
import img4 from '../../assets/Banner/banner4.png'


const Banner = () => {
    return (
       <div className="py-12">
           <Carousel className="text-center" autoPlay={true} infiniteLoop={true} interval={2500}>
                <div>
                    <img src={img1}/>
                </div>
                <div>
                    <img src={img2} />
                  
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div>
            </Carousel>
        
       </div>
    );
};

export default Banner;