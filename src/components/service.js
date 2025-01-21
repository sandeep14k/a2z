import React from 'react';
import '../css/service.css';

const Services = () => {
  const services = [
    {
      image: 's1.jpg', // Replace with actual image URL
      title: 'Commercial Events & Private Events',
      description: 'Entertainment events',
      website: 'www.brandsolution.in',
    },
    {
      image: 's2.jpg', // Replace with actual image URL
      title: 'Branding and Wall Painting Services',
      description: 'Well-Equipped used',
      website: 'www.brandsolution.in',
    },
    {
      image: 's3.jpg', // Replace with actual image URL
      title: 'Best Marketing Programs Services',
      description: 'Marketing approach',
      website: 'www.brandsolution.in',
    },
  ];

  return (
    <div className="services-section">
      <h2 className="services-heading">SERVICES</h2>
      <h3 className="services-subheading">What we do?</h3>
      <div className="services-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-info">
              <p className="service-website">
                <i className="fas fa-globe"></i> {service.website}
              </p>
              <p className="service-description">
                <i className="fas fa-comment"></i> {service.description}
              </p>
              <h4 className="service-title">{service.title}</h4>
              <button className="read-more-btn"><span>Read More</span></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
