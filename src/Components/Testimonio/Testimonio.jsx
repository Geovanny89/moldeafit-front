import React from 'react';
import test1 from '../../Assets/test1.png';
import test2 from '../../Assets/test2.jpg';
import test3 from '../../Assets/test3.jpg';
import test4 from '../../Assets/test4.jpg';
import test5 from '../../Assets/test5.jpg';

import './testimonio.css';

export default function Testimonio() {
  return (
    <div className="testimonio-container text-center my-5">
      <h2>Nuestros Clientes</h2>
      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-4">
                <div className="card testimonial-card">
                  <div className="profile-image">
                    <img 
                      src={test1}
                      alt="Testimonio 1"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="testimonial-name">Ada Harrison</h5>
                    <p className="card-text">Fajas realmente buenas y realmente confiables</p>
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star text-warning"></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card testimonial-card">
                  <div className="profile-image">
                    <img 
                      src={test2} 
                      alt="Testimonio 2"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="testimonial-name">John Doe</h5>
                    <p className="card-text">Excelente producto, me ayudó mucho.</p>
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star text-warning"></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card testimonial-card">
                  <div className="profile-image">
                    <img 
                      src={test3}
                      alt="Testimonio 3"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="testimonial-name">Jane Smith</h5>
                    <p className="card-text">Altamente recomendado, gran calidad.</p>
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star text-warning"></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4">
                <div className="card testimonial-card">
                  <div className="profile-image">
                    <img 
                      src={test4}
                      alt="Testimonio 4"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="testimonial-name">Carlos Ruiz</h5>
                    <p className="card-text">Me encantan los productos, muy efectivos.</p>
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star text-warning"></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card testimonial-card">
                  <div className="profile-image">
                    <img 
                      src={test5}
                      alt="Testimonio 5"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="testimonial-name">María López</h5>
                    <p className="card-text">Un cambio total en mi vida, gracias.</p>
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star text-warning"></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card testimonial-card">
                  <div className="profile-image">
                    <img 
                      src={test1} 
                      alt="Testimonio 6"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="testimonial-name">Luis Fernández</h5>
                    <p className="card-text">Definitivamente vale la pena la inversión.</p>
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star text-warning"></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Agrega más "carousel-item" con grupos de 3 testimonios según sea necesario */}
        </div>
        
        {/* Controles del carrusel */}
        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  );
}

