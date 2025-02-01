import React from 'react';
import styled from 'styled-components';
import { links } from '../../data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 20px;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  width: 100%;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 600px;
  text-align: left;
  line-height: 1.5;
`;

const Dot = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid #9c27b0;
  display: inline-block;
  margin-right: 8px;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.text_secondary};
  }
`;

const ThinkOutOfTheBox = () => {
  return (
    <Container id="thinkoutofthebox">
      <Wrapper>
        <Title>Think Out Of The Box</Title>
        <Desc>Explore new dimensions of creativity and innovation with these key principles.</Desc>
        <Paragraph>
          <Dot /> Explore new dimensions of creativity and innovation with these key principles. <Link href={links[0].url} target="_blank">Problem Solving</Link> helps navigate challenges efficiently.
        </Paragraph>
        <Paragraph>
          <Dot /> Explore new dimensions of creativity and innovation with these key principles. <Link href={links[1].url} target="_blank">Innovative Thinking</Link> leads to groundbreaking ideas.
        </Paragraph>
        <Paragraph>
          <Dot /> Explore new dimensions of creativity and innovation with these key principles. <Link href={links[2].url} target="_blank">Critical Analysis</Link> ensures well-informed decisions.
        </Paragraph>
        <Paragraph>
          <Dot /> Explore new dimensions of creativity and innovation with these key principles. <Link href={links[3].url} target="_blank">Strategic Decision Making</Link> improves long-term success.
        </Paragraph>
        <Paragraph>
          <Dot /> Explore new dimensions of creativity and innovation with these key principles. <Link href={links[4].url} target="_blank">Out-of-the-Box Ideas</Link> fosters creative solutions.
        </Paragraph>
      </Wrapper>
    </Container>
  );
};

export default ThinkOutOfTheBox;
