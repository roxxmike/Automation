import { useEffect, useState } from 'react';
// import image1 from '../assets/cImage/image1.png';
// import image2 from '../assets/cImage/image2.png';
// import image3 from '../assets/cImage/image3.png';
import "./carousel.css";

const Carousel = () => {
    const [carouselData, setCarouselData] = useState([]);
    const [index, setIndex] = useState(0);

    const getData = async () => {
        if (carouselData?.length > 0) return;

        await fetch('https://dummyjson.com/products/?limit=10')
            .then(response => response.json())
            .then(json => {
                setCarouselData(json.products);
            });       
    }
    const handleNext = () => { 
        if (index < carouselData.length - 1){
            setIndex(prev => prev + 1);
        } else if(index === carouselData.length - 1){
            setIndex(0);
        }
    }

    const handlePrev = () => { 
        if(index > 0){
            setIndex(prev => prev - 1);
        }else if(index === 0){
            setIndex(carouselData.length - 1);
        }
    }

    useEffect(() => {
        getData();
    });

  

    return (
        <div className='carousel-main'>
            <button className='carousel-button prev-button' onClick={handlePrev}>&lt;</button>
            <button className='carousel-button next-button' onClick={handleNext}>&gt;</button>
            <div key={carouselData[index]?.id} className='carousel-item'>
                <img src={carouselData[index]?.thumbnail} alt={carouselData[index]?.title} />
                <h4>{carouselData[index]?.title}</h4>
                <h5>Price: ${carouselData[index]?.price}</h5>
            </div>
        </div>
    );
}

export default Carousel;