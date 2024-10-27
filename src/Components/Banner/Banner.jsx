import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Paper } from '@mui/material';
import { allBanner } from '../../Redux/Action';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './banner.css';

export default function Banner() {
  const dispatch = useDispatch();
  const banners = useSelector((state) => state.banners);

  useEffect(() => {
    // Llamada a la acción que obtiene los banners (puede ser al cargar el componente)
    dispatch(allBanner());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Agrega esta línea
    autoplaySpeed: 3000, // Puedes ajustar la velocidad de reproducción automática
  };
  

  return (
    <div className="slider-container">
      <Paper elevation={3} className="paper">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div key={index}>
              <img
                src={URL.createObjectURL(new Blob([new Uint8Array(banner.image.data)], { type: 'image/png' }))}
                alt={`Banner ${index}`}
                
              />
            </div>
          ))}
        </Slider>
      </Paper>
    </div>
  );
}
