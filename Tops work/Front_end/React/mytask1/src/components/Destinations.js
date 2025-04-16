import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaHeart, FaStar, FaMapMarkerAlt, FaFilter, FaPlay, FaShare, FaInfoCircle, FaTimes, FaCalendar, FaUsers, FaPlane, FaCalendarAlt, FaGlobe } from 'react-icons/fa';

const DestinationsContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(135deg, #f6f9fc 0%, #e6f3ff 100%);
  min-height: 100vh;
`;

const HeroSection = styled.section`
  position: relative;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const HeroContent = styled(motion.div)`
  max-width: 800px;
  padding: 2rem;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const SearchContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const SearchInput = styled.input`
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  width: 300px;
  background: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    background: white;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }
`;

const SearchButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  background: #3498db;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: #2980b9;
    transform: translateY(-2px);
  }
`;

const FiltersSection = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1.5rem;
  border: 2px solid #3498db;
  border-radius: 25px;
  background: ${props => props.active ? '#3498db' : 'transparent'};
  color: ${props => props.active ? 'white' : '#3498db'};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #3498db;
    color: white;
    transform: translateY(-2px);
  }
`;

const DestinationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const DestinationCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(106, 17, 203, 0.1);
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    border-color: rgba(106, 17, 203, 0.2);

    .destination-image {
      transform: scale(1.1);
    }

    .destination-overlay {
      opacity: 1;
    }

    .action-buttons {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const DestinationImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const DestinationOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const DestinationTitle = styled.h3`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const DestinationLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-size: 1rem;
`;

const DestinationInfo = styled.div`
  padding: 1.5rem;
`;

const DestinationPrice = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #3498db;
  margin-bottom: 0.5rem;
`;

const DestinationRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #f1c40f;
`;

const FavoriteButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${props => props.favorite ? '#e74c3c' : '#95a5a6'};

  &:hover {
    background: white;
    transform: scale(1.1);
  }
`;

const VideoButton = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #3498db;

  &:hover {
    background: white;
    transform: scale(1.1);
  }
`;

const ActionButtons = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.5rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
`;

const ActionButton = styled.button`
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${props => props.color || '#3498db'};

  &:hover {
    background: white;
    transform: scale(1.1);
  }
`;

const DestinationDetails = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  padding: 2rem;
  overflow-y: auto;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  z-index: 2;

  ${DestinationCard}:hover & {
    transform: translateY(0);
  }
`;

const DetailItem = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #2c3e50;
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background: white;
  border-radius: 20px;
  max-width: 800px;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const ModalHeader = styled.div`
  position: relative;
  height: 300px;
  overflow: hidden;
`;

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #2c3e50;

  &:hover {
    background: white;
    transform: scale(1.1);
  }
`;

const ModalBody = styled.div`
  padding: 2rem;
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #2c3e50;
`;

const ModalLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #3498db;
  margin-bottom: 1rem;
`;

const ModalDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
`;

const DetailCard = styled.div`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ModalDescription = styled.p`
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ModalActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: #3498db;
  font-size: 2rem;
`;

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [favorites, setFavorites] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const destinations = [
    {
      id: 1,
      title: 'Eiffel Tower, Paris',
      location: 'Paris, France',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: '$2,900',
      rating: 4.7,
      category: 'cultural',
      description: 'Experience the romance of Paris from the iconic Eiffel Tower.',
      bestTime: 'April - June',
      highlights: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame', 'Montmartre']
    },
    {
      id: 2,
      title: 'Times Square, NYC',
      location: 'New York, USA',
      image: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: '$3,000',
      rating: 4.6,
      category: 'urban',
      description: 'Feel the energy of the city that never sleeps.',
      bestTime: 'April - June',
      highlights: ['Times Square', 'Central Park', 'Statue of Liberty', 'Broadway']
    },
    {
      id: 3,
      title: 'Bali Rice Terraces',
      location: 'Bali, Indonesia',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: '$2,200',
      rating: 4.8,
      category: 'nature',
      description: 'Discover the spiritual beauty of Bali\'s landscapes.',
      bestTime: 'April - October',
      highlights: ['Ubud', 'Tanah Lot', 'Uluwatu Temple', 'Rice Terraces']
    },
    {
      id: 4,
      title: 'Great Wall of China',
      location: 'Beijing, China',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: '$2,500',
      rating: 4.9,
      category: 'cultural',
      description: 'Walk along one of the world\'s greatest architectural wonders.',
      bestTime: 'September - November',
      highlights: ['Mutianyu Section', 'Jinshanling Section', 'Forbidden City', 'Temple of Heaven']
    },
    {
      id: 5,
      title: 'Santorini Sunset',
      location: 'Santorini, Greece',
      image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: '$2,800',
      rating: 4.9,
      category: 'nature',
      description: 'Experience the magical sunsets of Santorini.',
      bestTime: 'May - September',
      highlights: ['Oia Village', 'Caldera Views', 'Red Beach', 'Ancient Akrotiri']
    },
    {
      id: 6,
      title: 'Sydney Opera House',
      location: 'Sydney, Australia',
      image: 'https://images.unsplash.com/photo-1523428096881-5bd79d043006?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: '$3,200',
      rating: 4.7,
      category: 'cultural',
      description: 'Visit the iconic symbol of Australia\'s creative culture.',
      bestTime: 'September - November',
      highlights: ['Opera House Tour', 'Harbour Bridge', 'Bondi Beach', 'Royal Botanic Garden']
    },
    {
      id: 7,
      title: 'Machu Picchu',
      location: 'Cusco, Peru',
      image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: '$2,600',
      rating: 4.9,
      category: 'cultural',
      description: 'Explore the ancient Incan citadel in the Andes.',
      bestTime: 'April - October',
      highlights: ['Sun Gate', 'Huayna Picchu', 'Temple of the Sun', 'Inca Trail']
    },
    {
      id: 8,
      title: 'Taj Mahal',
      location: 'Agra, India',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: '$1,800',
      rating: 4.8,
      category: 'cultural',
      description: 'Marvel at the world\'s most beautiful monument to love.',
      bestTime: 'October - March',
      highlights: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri', 'Mehtab Bagh']
    },
    {
      id: 9,
      title: 'Grand Canyon',
      location: 'Arizona, USA',
      image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: '$2,300',
      rating: 4.8,
      category: 'nature',
      description: 'Witness the breathtaking beauty of this natural wonder.',
      bestTime: 'March - May, September - November',
      highlights: ['South Rim', 'Havasu Falls', 'Skywalk', 'Colorado River']
    },
    {
      id: 10,
      title: 'Venice Canals',
      location: 'Venice, Italy',
      image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: '$2,700',
      rating: 4.7,
      category: 'cultural',
      description: 'Experience the romance of Venice\'s waterways.',
      bestTime: 'April - June, September - October',
      highlights: ['Grand Canal', 'St. Mark\'s Square', 'Rialto Bridge', 'Murano Island']
    }
  ];

  const filters = ['all', 'cultural', 'nature', 'urban'];

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };

  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         destination.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'all' || destination.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const handleDestinationClick = async (destination) => {
    setIsLoading(true);
    // Simulate loading time
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSelectedDestination(destination);
    setIsLoading(false);
  };

  const closeModal = () => {
    setSelectedDestination(null);
  };

  return (
    <DestinationsContainer>
      <HeroSection>
        <HeroContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroTitle>Discover World's Most Beautiful Places</HeroTitle>
          <HeroSubtitle>Explore our collection of handpicked destinations around the globe</HeroSubtitle>
          <SearchContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SearchInput
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <SearchButton>
              <FaSearch /> Search
            </SearchButton>
          </SearchContainer>
        </HeroContent>
      </HeroSection>

      <FiltersSection>
        {filters.map(filter => (
          <FilterButton
            key={filter}
            active={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </FilterButton>
        ))}
      </FiltersSection>

      <DestinationsGrid>
        <AnimatePresence>
          {filteredDestinations.map(destination => (
            <DestinationCard
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              onClick={() => handleDestinationClick(destination)}
            >
              <DestinationImage 
                src={destination.image} 
                alt={destination.title}
                className="destination-image"
              />
              <FavoriteButton
                favorite={favorites.includes(destination.id)}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(destination.id);
                }}
              >
                <FaHeart color={favorites.includes(destination.id) ? '#e94560' : '#666'} />
              </FavoriteButton>
              <VideoButton
                onClick={(e) => {
                  e.stopPropagation();
                  // Handle video play
                }}
              >
                <FaPlay />
              </VideoButton>
              <DestinationOverlay className="destination-overlay">
                <DestinationTitle>{destination.title}</DestinationTitle>
                <DestinationLocation>
                  <FaMapMarkerAlt /> {destination.location}
                </DestinationLocation>
                <ActionButtons className="action-buttons">
                  <ActionButton
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle share
                    }}
                    color="#2ecc71"
                  >
                    <FaShare />
                  </ActionButton>
                  <ActionButton
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDestinationClick(destination);
                    }}
                    color="#3498db"
                  >
                    <FaInfoCircle />
                  </ActionButton>
                </ActionButtons>
              </DestinationOverlay>
              <DestinationInfo>
                <DestinationPrice>{destination.price}</DestinationPrice>
                <DestinationRating>
                  <FaStar />
                  {destination.rating}
                </DestinationRating>
              </DestinationInfo>
              <DestinationDetails>
                <DetailItem>
                  <FaMapMarkerAlt /> {destination.location}
                </DetailItem>
                <DetailItem>
                  <FaStar /> Rating: {destination.rating}/5
                </DetailItem>
                <DetailItem>
                  Price: {destination.price}
                </DetailItem>
                <DetailItem>
                  Category: {destination.category}
                </DetailItem>
              </DestinationDetails>
            </DestinationCard>
          ))}
        </AnimatePresence>
      </DestinationsGrid>

      <AnimatePresence>
        {selectedDestination && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <ModalContent
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={e => e.stopPropagation()}
            >
              {isLoading ? (
                <LoadingSpinner>
                  <FaPlane className="fa-spin" />
                </LoadingSpinner>
              ) : (
                <>
                  <ModalHeader>
                    <ModalImage src={selectedDestination.image} alt={selectedDestination.title} />
                    <ModalCloseButton onClick={closeModal}>
                      <FaTimes />
                    </ModalCloseButton>
                  </ModalHeader>
                  <ModalBody>
                    <ModalTitle>{selectedDestination.title}</ModalTitle>
                    <ModalLocation>
                      <FaMapMarkerAlt /> {selectedDestination.location}
                    </ModalLocation>
                    <ModalDetails>
                      <DetailCard>
                        <FaStar /> Rating: {selectedDestination.rating}/5
                      </DetailCard>
                      <DetailCard>
                        <FaCalendar /> Best Time: {selectedDestination.bestTime}
                      </DetailCard>
                      <DetailCard>
                        <FaUsers /> Highlights: {selectedDestination.highlights.join(', ')}
                      </DetailCard>
                    </ModalDetails>
                    <ModalDescription>
                      {selectedDestination.description}
                    </ModalDescription>
                    <ModalActions>
                      <ActionButton primary>
                        <FaCalendar /> Book Now
                      </ActionButton>
                      <ActionButton>
                        <FaShare /> Share
                      </ActionButton>
                    </ModalActions>
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </DestinationsContainer>
  );
};

export default Destinations; 