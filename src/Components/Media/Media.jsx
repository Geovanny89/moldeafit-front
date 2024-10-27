import React from 'react';
import './media.css'; // Puedes agregar estilos en este archivo si lo deseas
import video from '../../Assets/video.mp4'

export default function Media() {
  return (
    <div className="media-container">
    
      <video width="200" controls>
        <source src={video} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
}