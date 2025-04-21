import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPlane, FaGlobe, FaUsers, FaStar, FaAward, FaHandshake, FaQuoteLeft } from 'react-icons/fa';

const AboutContainer = styled.div`
  overflow: hidden;
`;

const HeroSection = styled(motion.section)`
  height: 70vh;
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

const StatsSection = styled.section`
  padding: 100px 20px;
  background: #f8f9fa;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const StatCard = styled(motion.div)`
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

const StatIcon = styled.div`
  font-size: 2.5rem;
  color: #e94560;
  margin-bottom: 20px;
`;

const TeamSection = styled.section`
  padding: 100px 20px;
  background: white;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const TeamCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const TeamImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${TeamCard}:hover & {
    transform: scale(1.1);
  }
`;

const TeamContent = styled.div`
  padding: 20px;
  text-align: center;

  h3 {
    margin-bottom: 5px;
    color: #1a1a2e;
  }

  p {
    color: #e94560;
    margin-bottom: 10px;
  }
`;

const AwardsSection = styled.section`
  padding: 100px 20px;
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  color: white;
`;

const AwardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const AwardCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const AwardIcon = styled.div`
  font-size: 2.5rem;
  color: #e94560;
  margin-bottom: 20px;
`;

const About = () => {
  const stats = [
    {
      icon: <FaPlane />,
      number: '1000+',
      label: 'Destinations',
      description: 'Curated luxury experiences across the globe'
    },
    {
      icon: <FaGlobe />,
      number: '50+',
      label: 'Countries',
      description: 'Expert local knowledge in every destination'
    },
    {
      icon: <FaUsers />,
      number: '10,000+',
      label: 'Happy Travelers',
      description: 'Creating unforgettable memories since 2010'
    },
    {
      icon: <FaStar />,
      number: '4.9',
      label: 'Average Rating',
      description: 'Consistently exceeding expectations'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      bio: 'With over 15 years in luxury travel, Sarah founded our company with a vision to create extraordinary experiences.'
    },
    {
      name: 'Michael Chen',
      role: 'Travel Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      bio: 'Michael brings his extensive knowledge of global destinations and passion for authentic experiences.'
    },
    {
      name: 'Emma Wilson',
      role: 'Customer Experience',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      bio: 'Emma ensures every journey is perfectly tailored to our clients\' preferences and expectations.'
    },
    {
      name: 'David Brown',
      role: 'Adventure Specialist',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      bio: 'David curates unique adventure experiences that combine luxury with authentic local encounters.'
    }
  ];

  const awards = [
    {
      icon: <FaAward />,
      title: 'World\'s Best Luxury Travel Agency',
      year: '2023',
      description: 'Recognized for exceptional service and innovative travel experiences'
    },
    {
      icon: <FaHandshake />,
      title: 'Excellence in Customer Service',
      year: '2022',
      description: 'Awarded for outstanding client satisfaction and personalized attention'
    }
  ];

  return (
    <AboutContainer>
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
          <h1>Our Story</h1>
          <p>Creating extraordinary travel experiences since 2010</p>
        </HeroContent>
      </HeroSection>

      <StatsSection>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>
          Our Impact
        </h2>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <StatIcon>{stat.icon}</StatIcon>
              <h2>{stat.number}</h2>
              <p>{stat.label}</p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>{stat.description}</p>
            </StatCard>
          ))}
        </StatsGrid>
      </StatsSection>

      <TeamSection>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>
          Meet Our Team
        </h2>
        <TeamGrid>
          {team.map((member, index) => (
            <TeamCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <TeamImage src={member.image} alt={member.name} />
              <TeamContent>
                <h3>{member.name}</h3>
                <p style={{ color: '#e94560', marginBottom: '0.5rem' }}>{member.role}</p>
                <p>{member.bio}</p>
              </TeamContent>
            </TeamCard>
          ))}
        </TeamGrid>
      </TeamSection>

      <AwardsSection>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>
          Our Recognition
        </h2>
        <AwardsGrid>
          {awards.map((award, index) => (
            <AwardCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <AwardIcon>{award.icon}</AwardIcon>

              <h3>{award.title}</h3>
              <p style={{ color: '#e94560', marginBottom: '0.5rem' }}>{award.year}</p>
              <p>{award.description}</p>
            </AwardCard>
          ))}
        </AwardsGrid>
      </AwardsSection>
    </AboutContainer>
  );
};

export default About; 