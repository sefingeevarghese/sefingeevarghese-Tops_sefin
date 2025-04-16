import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { FaPlane, FaHotel, FaUtensils, FaMountain, FaStar, FaGlobe, FaUsers, FaTimes, FaCalendarAlt, FaUserFriends, FaMapMarkerAlt } from 'react-icons/fa';

// Enhanced styled components with Wix-like animations
const HomeContainer = styled.div`
  overflow: hidden;
`;

const HeroSection = styled(motion.section)`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')
      center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(233, 69, 96, 0.3), rgba(0, 0, 0, 0.7));
    z-index: 1;
  }
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 20px;

  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;

const CTAButton = styled(motion.button)`
  background: #e94560;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.2rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(233, 69, 96, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(233, 69, 96, 0.4);
  }
`;

const FeaturesSection = styled.section`
  padding: 100px 20px;
  background: #f8f9fa;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled(motion.div)`
  background: white;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: #e94560;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);

    &::before {
      transform: scaleX(1);
    }
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: #e94560;
  margin-bottom: 20px;
`;

const PopularDestinations = styled.section`
  padding: 100px 20px;
  background: white;
`;

const DestinationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const DestinationCard = styled(motion.div)`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  height: 400px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const DestinationOverlay = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
`;

const DestinationTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: white;
`;

const DestinationDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 15px;
  color: rgba(255, 255, 255, 0.9);
`;

const DestinationDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const DestinationPrice = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: #e94560;
`;

const DestinationRating = styled.div`
  display: flex;
  align-items: center;
  color: #ffd700;
  
  span {
    margin-left: 5px;
    color: white;
  }
`;

const TestimonialsSection = styled.section`
  padding: 100px 20px;
  background: #f8f9fa;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialCard = styled(motion.div)`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;

  &::before {
    content: '"';
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 4rem;
    color: #e94560;
    opacity: 0.2;
    font-family: serif;
  }
`;

const TestimonialImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const StatsSection = styled.section`
  padding: 100px 20px;
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  color: white;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const StatCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #e94560, #ff6b6b);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const StatIcon = styled.div`
  font-size: 2.5rem;
  color: #e94560;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;

  ${StatCard}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`;

const StatNumber = styled(motion.h2)`
  font-size: 3.5rem;
  margin-bottom: 10px;
  color: #e94560;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #e94560, transparent);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const StatLabel = styled.p`
  font-size: 1.2rem;
  color: #333;
  font-weight: 500;
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled(motion.div)`
  background: white;
  border-radius: 20px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  padding: 2rem;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #1a1a2e;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #e94560;
  }
`;

const ModalHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    color: #1a1a2e;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    font-size: 1.1rem;
  }
`;

const JourneyOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 2rem;
`;

const OptionCard = styled(motion.div)`
  background: #f8f9fa;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-5px);
    background: white;
    border-color: #e94560;
  }

  &.selected {
    background: white;
    border-color: #e94560;
  }
`;

const OptionIcon = styled.div`
  font-size: 2rem;
  color: #e94560;
  margin-bottom: 1rem;
`;

const JourneyForm = styled.form`
  display: grid;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: grid;
  gap: 10px;

  label {
    color: #1a1a2e;
    font-weight: 500;
  }

  input, select, textarea {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: #e94560;
    }
  }
`;

const SubmitButton = styled.button`
  background: #e94560;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 30px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(233, 69, 96, 0.3);
  }
`;

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    travelDate: '',
    groupSize: '',
    message: ''
  });

  const stats = {
    destinations: 100,
    travelers: 1000,
    rating: 5
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setShowModal(false);
  };

  const features = [
    {
      icon: <FaPlane />,
      title: 'Luxury Travel',
      description: 'Experience the world in style with our premium travel services.'
    },
    {
      icon: <FaHotel />,
      title: 'Premium Accommodations',
      description: 'Stay at the finest hotels and resorts around the globe.'
    },
    {
      icon: <FaUtensils />,
      title: 'Gourmet Dining',
      description: 'Savor exquisite culinary experiences at world-class restaurants.'
    },
    {
      icon: <FaMountain />,
      title: 'Unique Experiences',
      description: 'Discover hidden gems and create unforgettable memories.'
    }
  ];

  const destinations = [
    {
      image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'Santorini, Greece',
      description: 'Experience the magic of white-washed buildings and stunning sunsets in this iconic Greek island paradise.',
      price: '$2,500',
      rating: 4.9,
      bestTime: 'May - September',
      highlights: ['Oia Sunset Views', 'Caldera Cruises', 'Ancient Akrotiri', 'Wine Tasting']
    },
    {
      image: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'Kyoto, Japan',
      description: 'Discover ancient temples, traditional tea houses, and the beauty of cherry blossoms in Japan\'s cultural heart.',
      price: '$3,200',
      rating: 4.8,
      bestTime: 'March - May, October - November',
      highlights: ['Fushimi Inari Shrine', 'Arashiyama Bamboo Forest', 'Kinkaku-ji Temple', 'Gion District']
    },
    {
      image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'Machu Picchu, Peru',
      description: 'Explore the ancient Incan citadel nestled in the Andes mountains, a UNESCO World Heritage site.',
      price: '$2,800',
      rating: 4.9,
      bestTime: 'April - October',
      highlights: ['Sun Gate', 'Huayna Picchu', 'Temple of the Sun', 'Inca Trail']
    },
    {
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'Paris, France',
      description: 'Experience the romance and culture of the City of Light, from the Eiffel Tower to the Louvre.',
      price: '$2,900',
      rating: 4.7,
      bestTime: 'April - June, September - October',
      highlights: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame', 'Montmartre']
    },
    {
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'Bali, Indonesia',
      description: 'Immerse yourself in the spiritual and natural beauty of Bali\'s temples, beaches, and rice terraces.',
      price: '$2,200',
      rating: 4.8,
      bestTime: 'April - October',
      highlights: ['Ubud', 'Tanah Lot', 'Uluwatu Temple', 'Tegallalang Rice Terraces']
    },
    {
      image: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'New York City, USA',
      description: 'Experience the energy of the Big Apple, from Times Square to Central Park and beyond.',
      price: '$3,000',
      rating: 4.6,
      bestTime: 'April - June, September - November',
      highlights: ['Times Square', 'Central Park', 'Statue of Liberty', 'Broadway Shows']
    }
  ];

  const testimonials = [
    {
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      name: 'Sarah Johnson',
      role: 'Travel Enthusiast',
      quote: 'The best travel experience I\'ve ever had. Every detail was perfect!'
    },
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      name: 'Michael Chen',
      role: 'Adventure Seeker',
      quote: 'Unforgettable experiences and exceptional service. Highly recommended!'
    },
    {
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      name: 'Emma Wilson',
      role: 'Luxury Traveler',
      quote: 'Exceeded all my expectations. The attention to detail was remarkable.'
    }
  ];

  return (
    <HomeContainer>
      <HeroSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroContent
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1>Discover Your Next Adventure</h1>
          <p>Experience the world's most breathtaking destinations with our luxury travel services</p>
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowModal(true)}
          >
            Start Your Journey
          </CTAButton>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </FeaturesSection>

      <PopularDestinations>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>
          World-Famous Destinations
        </h2>
        <DestinationGrid>
          {destinations.map((destination, index) => (
            <DestinationCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img src={destination.image} alt={destination.title} />
              <DestinationOverlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <DestinationTitle>{destination.title}</DestinationTitle>
                <DestinationDescription>{destination.description}</DestinationDescription>
                <DestinationDetails>
                  <DestinationPrice>{destination.price}</DestinationPrice>
                  <DestinationRating>
                    <FaStar />
                    <span>{destination.rating}</span>
                  </DestinationRating>
                </DestinationDetails>
              </DestinationOverlay>
            </DestinationCard>
          ))}
        </DestinationGrid>
      </PopularDestinations>

      <TestimonialsSection>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>
          What Our Travelers Say
        </h2>
        <TestimonialGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <TestimonialImage src={testimonial.image} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
              <p style={{ color: '#e94560', marginBottom: '1rem' }}>{testimonial.role}</p>
              <p>{testimonial.quote}</p>
            </TestimonialCard>
          ))}
        </TestimonialGrid>
      </TestimonialsSection>

      <StatsSection id="stats-section">
        <StatsGrid>
          <StatCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <StatIcon><FaGlobe /></StatIcon>
            <StatNumber>
              {stats.destinations}+
            </StatNumber>
            <StatLabel>Destinations</StatLabel>
          </StatCard>

          <StatCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <StatIcon><FaUsers /></StatIcon>
            <StatNumber>
              {stats.travelers}+
            </StatNumber>
            <StatLabel>Happy Travelers</StatLabel>
          </StatCard>

          <StatCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <StatIcon><FaStar /></StatIcon>
            <StatNumber>
              {stats.rating.toFixed(1)}
            </StatNumber>
            <StatLabel>Average Rating</StatLabel>
          </StatCard>
        </StatsGrid>
      </StatsSection>

      <AnimatePresence>
        {showModal && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <ModalContent
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <ModalCloseButton onClick={() => setShowModal(false)}>
                <FaTimes />
              </ModalCloseButton>
              
              <ModalHeader>
                <h2>Plan Your Dream Journey</h2>
                <p>Let us help you create the perfect travel experience</p>
              </ModalHeader>

              <JourneyOptions>
                <OptionCard
                  className={selectedOption === 'luxury' ? 'selected' : ''}
                  onClick={() => handleOptionSelect('luxury')}
                  whileHover={{ scale: 1.05 }}
                >
                  <OptionIcon><FaHotel /></OptionIcon>
                  <h3>Luxury Getaway</h3>
                  <p>5-star accommodations and premium experiences</p>
                </OptionCard>

                <OptionCard
                  className={selectedOption === 'adventure' ? 'selected' : ''}
                  onClick={() => handleOptionSelect('adventure')}
                  whileHover={{ scale: 1.05 }}
                >
                  <OptionIcon><FaMountain /></OptionIcon>
                  <h3>Adventure Trip</h3>
                  <p>Thrilling experiences and outdoor activities</p>
                </OptionCard>

                <OptionCard
                  className={selectedOption === 'cultural' ? 'selected' : ''}
                  onClick={() => handleOptionSelect('cultural')}
                  whileHover={{ scale: 1.05 }}
                >
                  <OptionIcon><FaGlobe /></OptionIcon>
                  <h3>Cultural Experience</h3>
                  <p>Immerse yourself in local traditions</p>
                </OptionCard>
              </JourneyOptions>

              <JourneyForm onSubmit={handleSubmit}>
                <FormGroup>
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="destination">Preferred Destination</label>
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <FormGroup>
                    <label htmlFor="travelDate">Travel Date</label>
                    <input
                      type="date"
                      id="travelDate"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleInputChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <label htmlFor="groupSize">Group Size</label>
                    <select
                      id="groupSize"
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select size</option>
                      <option value="1">1 person</option>
                      <option value="2">2 people</option>
                      <option value="3-5">3-5 people</option>
                      <option value="6+">6+ people</option>
                    </select>
                  </FormGroup>
                </div>

                <FormGroup>
                  <label htmlFor="message">Additional Information</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Tell us about your travel preferences and any special requirements..."
                  />
                </FormGroup>

                <SubmitButton type="submit">
                  Submit Your Request
                </SubmitButton>
              </JourneyForm>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </HomeContainer>
  );
};

export default Home; 