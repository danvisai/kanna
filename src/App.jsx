import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled, { keyframes } from 'styled-components'

const Container = styled.div`
  text-align: center;
  padding: 2rem;
  background: #ffe6f2;
  min-height: 100vh;
  font-family: 'Comic Sans MS', cursive;
`;

const heartbeat = keyframes`
  0% { transform: scale(1); }
  25% { transform: scale(1.1); }
  50% { transform: scale(1); }
  75% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const Title = styled.h1`
  color: #ff3385;
  font-size: 3rem;
  text-shadow: 2px 2px #ffffff;
  animation: ${heartbeat} 1.5s infinite;
`;

const Message = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(255, 51, 133, 0.3);
  margin: 2rem auto;
  max-width: 500px;
`;

const Button = styled.button`
  background: #ff3385;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 1.2rem;
  cursor: pointer;
  margin: 0.5rem;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
    background: #ff0066;
  }
`;

const Heart = styled.div`
  font-size: 2rem;
  margin: 1rem;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.3);
  }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const FloatingHearts = styled.div`
  position: fixed;
  font-size: 2rem;
  animation: ${float} 3s infinite;
  opacity: 0.7;
`;

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleNoHover = () => {
    setPosition({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100
    });
    setNoCount(prev => prev + 1);
  };

  const generateHearts = () => {
    return Array.from({ length: 20 }).map((_, i) => (
      <FloatingHearts
        key={i}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`
        }}
      >
        ❤️
      </FloatingHearts>
    ));
  };

  return (
    <Container>
      {generateHearts()}
      <Title>Happy Valentine's Day! 💖</Title>
      
      <Message>
        {!showMessage ? (
          <>
            <p>Will you be my Valentine? 🌹</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button onClick={() => setShowMessage(true)}>Yes!</Button>
              <Button 
                style={{ 
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  transition: 'transform 0.3s'
                }}
                onMouseEnter={handleNoHover}
                onClick={handleNoHover}
              >
                {noCount === 0 ? 'No' : `No (${noCount})`}
              </Button>
            </div>
          </>
        ) : (
          <>
            <h2>Yay! You made my day! 🎉</h2>
            <div style={{ fontSize: '4rem', animation: `${heartbeat} 1s infinite` }}>
              💖
            </div>
            <p>Let's make wonderful memories together! 🌸</p>
          </>
        )}
      </Message>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {['❤️', '💖', '💕', '💞', '💓', '💗'].map((heart, i) => (
          <Heart key={i}>{heart}</Heart>
        ))}
      </div>
    </Container>
  );
}
export default App
