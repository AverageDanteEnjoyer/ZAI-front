import React, { useEffect, useRef } from 'react';
import '../css/slider.css';

const Slider = () => {
    const sliderWrapperRef = useRef(null);
    const slidesRef = useRef([]);
    const intervalIdRef = useRef(null);
    const currentSlideRef = useRef(0);
    const slideCount = 3; // Number of slides

    useEffect(() => {
        const slides = sliderWrapperRef.current.getElementsByClassName('slider-item');
        for (let idx = 0; idx < slides.length; idx++) {
            slides[idx].style.left = `${idx * 100}%`;
        }

        autoMove(autoMoveRight);

        return () => clearInterval(intervalIdRef.current);
    }, []);

    const move = (slideIndex) => {
        if (sliderWrapperRef.current) {
            sliderWrapperRef.current.style.transform = `translateX(${-slideIndex * 100}%)`;
            currentSlideRef.current = slideIndex;
        }
    };

    const moveRight = () => {
        if (currentSlideRef.current === slideCount - 1) {
            return;
        }
        clearInterval(intervalIdRef.current);
        move(currentSlideRef.current + 1);
        autoMove(autoMoveRight);
    };

    const moveLeft = () => {
        if (currentSlideRef.current === 0) {
            return;
        }
        clearInterval(intervalIdRef.current);
        move(currentSlideRef.current - 1);
        autoMove(autoMoveLeft);
    };

    const autoMoveRight = () => {
        if (currentSlideRef.current === slideCount - 1) {
            moveLeft();
            return;
        }
        move(currentSlideRef.current + 1);
    };

    const autoMoveLeft = () => {
        if (currentSlideRef.current === 0) {
            moveRight();
            return;
        }
        move(currentSlideRef.current - 1);
    };

    const autoMove = (autoMoveFunc) => {
        intervalIdRef.current = setInterval(() => {
            autoMoveFunc();
        }, 7500);
    };

    return (
        <div className="slider">
            <div id="slider-wrapper" ref={sliderWrapperRef}>
                <div className="slider-item">
                    <div className="slide-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/bilety-komunikacji-miejskiej.jpg)` }}></div>
                </div>
                <div className="slider-item">
                    <div className="slide-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/mobilet-parkingi.jpg)` }}></div>
                </div>
                <div className="slider-item">
                    <div className="slide-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/banner2a.jpg)` }}></div>
                </div>
            </div>
            <div className="arrow arrow-left" onClick={moveLeft}></div>
            <div className="arrow arrow-right" onClick={moveRight}></div>
        </div>
    );
};

export default Slider;
