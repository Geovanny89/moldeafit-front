import React from 'react';
import './media.css'; // Puedes agregar estilos en este archivo si lo deseas
import video from '../../Assets/video.mp4'
import video2 from '../../Assets/video2.mp4'
import video3 from '../../Assets/video3.mp4'
import video4 from '../../Assets/video4.mp4'
import video5 from '../../Assets/video5.mp4'

export default function Media() {
  return (
    <div className="media-container">
    
      <video width="200" controls>
        <source src={video} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <video width="200" controls>
        <source src={video2} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <video width="200" controls>
        <source src={video3} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <video width="200" controls>
        <source src={video4} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <video width="200" controls>
        <source src={video5} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
}