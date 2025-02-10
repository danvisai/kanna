import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import dog from '../src/assets/Subject.png';
import img1 from '../src/assets/1.jpg';
import img2 from '../src/assets/2.jpg';
import img3 from '../src/assets/3.jpg';
import img4 from '../src/assets/4.jpg';
import img5 from '../src/assets/5.jpg';
import img6 from '../src/assets/6.jpg';
import img7 from '../src/assets/7.png';
import img8 from '../src/assets/8.jpg';
import img9 from '../src/assets/9.png';
import img10 from '../src/assets/10.jpg';
import img11 from '../src/assets/11.jpg';

const imageList = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10, img11
];

/* --- Keyframes --- */
const heartbeat = keyframes`
  0% { transform: scale(1); }
  25% { transform: scale(1.1); }
  50% { transform: scale(1); }
  75% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const float = keyframes`
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.8;
  }
  100% {
    transform: translateY(-200px) scale(1.2);
    opacity: 0;
  }
`;

/* --- Styled Components --- */
const Container = styled.div`
  text-align: center;
  padding: 2rem;
  min-height: 100vh;
  font-family: 'Verdana', cursive;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  
  /* Adjust container for mobile */
  @media (max-width: 768px) {
    padding: 1rem;
    position: static;
    height: auto;
    overflow-y: auto;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 4rem);
  text-shadow: 1px 1px rgb(58, 45, 45);
  animation: ${heartbeat} 1.5s infinite;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`;

const Message = styled.div`
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(255, 51, 133, 0.3);
  margin: 2rem auto;
  max-width: 500px;
  transform: rotateY(10deg) rotateX(5deg);
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backdrop-filter: blur(5px);
  position: relative;
  z-index: 2;
  
  &:hover {
    transform: rotateY(0deg) rotateX(0deg) scale(1.05);
  }
  
  /* Remove rotation and adjust for mobile */
  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 1rem;
    transform: none;
  }
`;

const Button = styled.button`
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 1.2rem;
  cursor: pointer;
  margin: 0.5rem;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 5px 15px rgba(255, 51, 133, 0.3);
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(255, 51, 133, 0.5);
  }
`;

const jump = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-30px) rotate(-10deg); }
  50% { transform: translateY(0) rotate(10deg); }
  75% { transform: translateY(-15px) rotate(-5deg); }
`;

const FloatingDog = styled.img`
  width: 150px;
  position: absolute;
  bottom: 20px;
  animation: ${jump} 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
  cursor: pointer;
  
  @media (max-width: 768px) {
    width: 120px;
  }
`;

const messages = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Think again!",
  "Please?",
  "Just reconsider!",
  "Don't do this!",
  "I'm gonna cry...",
  "You're breaking my heart!",
  "Last chance!"
];

// Gallery for horizontal scrolling of photos
const Gallery = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
  margin-top: 1rem;
  width: 100%;
  overflow-x: auto;
  padding: 0 1rem;
`;

const GalleryImage = styled.img`
  width: 150px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

// Styled component for a floating heart
const FloatingHeart = styled.div`
  position: absolute;
  font-size: 24px;
  color: rgba(255, 0, 0, 0.5);
  animation: ${float} 10s linear infinite;
  pointer-events: none;
  z-index: 1;
`;

// Component to render several floating hearts
function FloatingHearts() {
  return (
    <>
      <FloatingHeart style={{ left: '10%', top: '80%', animationDelay: '0s' }}>❤️</FloatingHeart>
      <FloatingHeart style={{ left: '30%', top: '85%', animationDelay: '1s' }}>❤️</FloatingHeart>
      <FloatingHeart style={{ left: '50%', top: '90%', animationDelay: '2s' }}>❤️</FloatingHeart>
      <FloatingHeart style={{ left: '70%', top: '80%', animationDelay: '3s' }}>❤️</FloatingHeart>
      <FloatingHeart style={{ left: '90%', top: '85%', animationDelay: '4s' }}>❤️</FloatingHeart>
    </>
  );
}

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [buttonPos, setButtonPos] = useState({ x: 0, y: 0 });
  
  // Moves the "No" button randomly.
  const handleNoHover = () => {
    setButtonPos({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100
    });
  };

  // Increments the "No" button counter.
  const handleNoClick = () => {
    setNoCount(prev => prev + 1);
  };

  return (
    <Container>
      {/* Render floating hearts in the background */}
      <FloatingHearts />
      
      <Title>Kanna...! 💖</Title>
      
      <Message>
        {!showMessage ? (
          <>
            <p>Will you be my Valentine? 🌹</p>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button onClick={() => setShowMessage(true)}>Yes! 💖</Button>
              <Button 
                style={{ 
                  transform: `translate(${buttonPos.x}px, ${buttonPos.y}px)`,
                  transition: 'transform 0.3s ease-out'
                }}
                onMouseEnter={handleNoHover}
                onClick={() => {
                  handleNoClick();
                  handleNoHover();
                }}
                onTouchStart={() => {
                  handleNoClick();
                  handleNoHover();
                }}
              >
                {messages[Math.min(noCount, messages.length - 1)]}
              </Button>
            </div>
          </>
        ) : (
          <>
            <p>Yay! oppukunnanduku 💋💋😘😘</p>
            <h2>Naa favourite moments/pics kuda ivve 💖💖 !</h2>
            <p>Inka ilantivi kaavali unte pettu lekapoina parle time undi create chedam💋💋😘😘</p>
            <Gallery>
              {imageList.map((image, index) => (
                <GalleryImage
                  key={index}
                  src={image}
                  alt={`Photo ${index + 1}`}
                />
              ))}
            </Gallery>
          </>
        )}
      </Message>
      
      <FloatingDog 
        src={dog} 
        alt="Jumping Dog" 
        onClick={() => alert("Woof! Hiiiii!! Oppuko plsss 🐶")}
      />
    </Container>
  );
}

export default App;
