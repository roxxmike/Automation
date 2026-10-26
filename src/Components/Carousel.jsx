import React, { useEffect, useState } from 'react';
import image1 from '../assets/cImage/image1.png';
import image2 from '../assets/cImage/image2.png';
import image3 from '../assets/cImage/image3.png';
import "./carousel.css";

const Carousel = () => {
    const [carouselData, setCarouselData] = useState([]);
    const [currentItem, setCurrentItem] = useState(null);
    const [index, setIndex] = useState(0);
    const getData = async () => {
        const data = await fetch('https://dummyjson.com/products/?limit=10')
            .then(response => response.json())
            .then(json => json?.products);

        console.log("myData", data);
        setCarouselData(data);
        setCurrentItem(data[index]);
    }
    const handleNext = () => { 
        if (index < carouselData.length - 1){
            setIndex(prev => prev + 1);
        } else if(index === carouselData.length - 1){
            setIndex(0);
        }
        setCurrentItem(carouselData[index]);
    }
    const handlePrev = () => { 
        if(index > 0){
            setIndex(prev => prev - 1);
        }else if(index === 0){
            setIndex(carouselData.length - 1);
        }
        setCurrentItem(carouselData[index]);
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <div className='carousel-main'>
            <button className='carousel-button prev-button' onClick={handlePrev}>&lt;</button>
            <button className='carousel-button next-button' onClick={handleNext}>&gt;</button>
            <div key={currentItem?.id} className='carousel-item'>
                <img src={currentItem?.thumbnail} alt={currentItem?.title} />
                <h4>{currentItem?.title}</h4>
                <h5>Price: ${currentItem?.price}</h5>
            </div>
        </div>
    );
}

export default Carousel;