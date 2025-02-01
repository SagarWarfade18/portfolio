import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { dataimages } from '../../data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${({ translateX }) => translateX}%);
  width: 100%;
`;

const CarouselItem = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 10px;
  cursor: pointer;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${({ theme, disabled }) => (disabled ? theme.disabled : theme.card)};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  z-index: 2;
  ${({ direction }) => (direction === 'left' ? 'left: 10px;' : 'right: 10px;')}

  &:hover {
    background: ${({ theme, disabled }) => (disabled ? theme.disabled : theme.text_primary)};
    color: ${({ theme }) => theme.background};
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  width: 100%;
  max-width: 1000px;
  max-height: 100vh;
  border-radius: 16px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgb(177, 178, 179);
  border: none;
  padding: 8px 15px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 10px;
`;

const ModalImage = styled.img`
  width: 100%;
  max-width: 1000px;
  max-height: 100vh;
  border-radius: 16px;
`;

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (modalImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modalImage]);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < dataimages.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <Container id="testimonials">
      <Wrapper>
        <Title>Testimonials</Title>
        <Desc>Here are some of my skills on which I have been working on for the past 2 years.</Desc>

        <CarouselContainer>
          <Arrow direction="left" onClick={handlePrev} disabled={currentIndex === 0}>
            &#8592;
          </Arrow>

          <CarouselWrapper translateX={-currentIndex * 100}>
            {dataimages.map((data, index) => (
              <CarouselItem key={index}>
                <Image src={data.image} alt={data.name} onClick={() => openModal(data.image)} />
              </CarouselItem>
            ))}
          </CarouselWrapper>

          <Arrow direction="right" onClick={handleNext} disabled={currentIndex === dataimages.length - 1}>
            &#8594;
          </Arrow>
        </CarouselContainer>
      </Wrapper>

      {modalImage && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent>
            <CloseButton onClick={closeModal}>X</CloseButton>
            <ModalImage src={modalImage} alt="Zoomed Image" />
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default Testimonials;
