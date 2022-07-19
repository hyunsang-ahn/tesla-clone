import React from 'react';
import styled from 'styled-components'
import Section from './Section';
const Home = () => {
  return (
    <Container>
      <Section
        title="모델 3"
        description="시승신청"
        backgroundImg="model-3.jpg"
        LeftBtnText="주문하기"
        rightBtnText="자세히 알아보기"
      />
      <Section
        title="모델 Y"
        description="시승신청"
        backgroundImg="model-y.jpg"
        LeftBtnText="주문하기"
        rightBtnText="자세히 알아보기"
      />
      <Section
        title="모델 S"
        description="시승신청"
        backgroundImg="model-s.jpg"
        LeftBtnText="주문하기"
        rightBtnText="자세히 알아보기"
      />
      <Section
        title="모델 X"
        description="시승신청"
        backgroundImg="model-x.jpg"
        LeftBtnText="주문하기"
        rightBtnText="자세히 알아보기"
      />
      <Section
        title="태양광 패널"
        description="시승신청"
        backgroundImg="solar-panel.jpg"
        LeftBtnText="주문하기"
        rightBtnText="자세히 알아보기"
      />
      <Section
        title="태양광 지붕"
        description="시승신청"
        backgroundImg="solar-roof.jpg"
        LeftBtnText="주문하기"
        rightBtnText="자세히 알아보기"
      />
      <Section
        title="악세서리"
        description=""
        backgroundImg="accessories.jpg"
        LeftBtnText="주문하기"
      />

    </Container>
  );
};

export default Home;


const Container = styled.div`
  height : 100vh;

`