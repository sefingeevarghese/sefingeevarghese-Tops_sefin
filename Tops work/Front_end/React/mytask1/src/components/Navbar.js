import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPlane, FaSearch, FaUser, FaSignOutAlt, FaCog, FaBell } from 'react-icons/fa';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent'};
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: all 0.3s ease;
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${props => props.scrolled ? '#2c3e50' : 'white'};
  font-size: 1.5rem;
  font-weight: bold;
  transition: color 0.3s ease;

  svg {
    margin-right: 0.5rem;
    font-size: 1.8rem;
  }
`;

const SearchBar = styled(motion.div)`
  position: relative;
  width: 300px;
  margin: 0 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  padding-left: 2.5rem;
  border: none;
  border-radius: 25px;
  background-color: ${props => props.scrolled ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.2)'};
  color: ${props => props.scrolled ? '#2c3e50' : 'white'};
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &::placeholder {
    color: ${props => props.scrolled ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.7)'};
  }

  &:focus {
    outline: none;
    background-color: ${props => props.scrolled ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.3)'};
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.scrolled ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.7)'};
  font-size: 1rem;
`;

const NavLinks = styled(motion.div)`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.scrolled ? '#2c3e50' : 'white'};
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #3498db;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    color: #3498db;
    &::after {
      width: 100%;
    }
  }
`;

const UserMenu = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const UserButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.scrolled ? '#2c3e50' : 'white'};
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.scrolled ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.1)'};
  }
`;

const NotificationBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #e74c3c;
  color: white;
  font-size: 0.7rem;
  padding: 0.2rem 0.4rem;
  border-radius: 50%;
`;

const DropdownMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  min-width: 200px;
  z-index: 1000;
`;

const DropdownItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1rem;
  color: #2c3e50;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  svg {
    font-size: 1rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.scrolled ? '#2c3e50' : 'white'};
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.98);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 1001;
  backdrop-filter: blur(10px);

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileSearchBar = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1rem;
`;

const MobileNavLink = styled(Link)`
  text-decoration: none;
  color: #2c3e50;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  transition: color 0.3s ease;

  &.active {
    color: #3498db;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 2rem;
  background: none;
  border: none;
  color: #2c3e50;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const userMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <NavContainer scrolled={scrolled}>
      <NavContent>
        <Logo to="/" scrolled={scrolled}>
          <FaPlane />
          World Explorer
        </Logo>

        <SearchBar
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSearch}>
            <SearchInput
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              scrolled={scrolled}
            />
            <SearchIcon scrolled={scrolled} />
          </form>
        </SearchBar>

        <NavLinks
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <NavLink
            to="/"
            scrolled={scrolled}
            className={location.pathname === '/' ? 'active' : ''}
          >
            Home
          </NavLink>
          <NavLink
            to="/destinations"
            scrolled={scrolled}
            className={location.pathname === '/destinations' ? 'active' : ''}
          >
            Destinations
          </NavLink>
          <NavLink
            to="/about"
            scrolled={scrolled}
            className={location.pathname === '/about' ? 'active' : ''}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            scrolled={scrolled}
            className={location.pathname === '/contact' ? 'active' : ''}
          >
            Contact
          </NavLink>
        </NavLinks>

        <UserMenu ref={userMenuRef}>
          <UserButton
            scrolled={scrolled}
            onClick={() => setUserMenuOpen(!userMenuOpen)}
          >
            <FaUser />
          </UserButton>
          <UserButton scrolled={scrolled}>
            <FaBell />
            <NotificationBadge>3</NotificationBadge>
          </UserButton>

          <AnimatePresence>
            {userMenuOpen && (
              <DropdownMenu
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <DropdownItem to="/profile">
                  <FaUser /> Profile
                </DropdownItem>
                <DropdownItem to="/settings">
                  <FaCog /> Settings
                </DropdownItem>
                <DropdownItem to="/logout">
                  <FaSignOutAlt /> Logout
                </DropdownItem>
              </DropdownMenu>
            )}
          </AnimatePresence>
        </UserMenu>

        <MobileMenuButton
          onClick={toggleMobileMenu}
          scrolled={scrolled}
        >
          <FaBars />
        </MobileMenuButton>

        <AnimatePresence>
          {mobileMenuOpen && (
            <MobileMenu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
            >
              <CloseButton onClick={closeMobileMenu}>
                <FaTimes />
              </CloseButton>
              <MobileSearchBar>
                <form onSubmit={handleSearch}>
                  <SearchInput
                    type="text"
                    placeholder="Search destinations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    scrolled={true}
                  />
                  <SearchIcon scrolled={true} />
                </form>
              </MobileSearchBar>
              <MobileNavLink
                to="/"
                className={location.pathname === '/' ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                Home
              </MobileNavLink>
              <MobileNavLink
                to="/destinations"
                className={location.pathname === '/destinations' ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                Destinations
              </MobileNavLink>
              <MobileNavLink
                to="/about"
                className={location.pathname === '/about' ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                About
              </MobileNavLink>
              <MobileNavLink
                to="/contact"
                className={location.pathname === '/contact' ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                Contact
              </MobileNavLink>
              <MobileNavLink
                to="/profile"
                onClick={closeMobileMenu}
              >
                Profile
              </MobileNavLink>
              <MobileNavLink
                to="/settings"
                onClick={closeMobileMenu}
              >
                Settings
              </MobileNavLink>
              <MobileNavLink
                to="/logout"
                onClick={closeMobileMenu}
              >
                Logout
              </MobileNavLink>
            </MobileMenu>
          )}
        </AnimatePresence>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar; 