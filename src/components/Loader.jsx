"use client";
import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="flex flex-col justify-center items-center text-center py-48">
        <p className="text-2xl mb-4">Proses Sedang Berlangsung</p>
        <div className="loaderBar" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loaderBar {
    width: calc(160px / 0.707);
    height: 10px;
    background: #f9f9f9;
    border-radius: 10px;
    border: 1px solid #006dfe;
    position: relative;
    overflow: hidden;
  }

  .loaderBar::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: 5px;
    background: repeating-linear-gradient(45deg, #0031f2 0 30px, #006dfe 0 40px)
      right/200% 100%;
    animation: fillProgress 6s ease-in-out infinite,
      lightEffect 1s infinite linear;
    animation-fill-mode: forwards;
  }

  @keyframes fillProgress {
    0% {
      width: 0;
    }

    33% {
      width: 33.333%;
    }

    66% {
      width: 66.67%;
    }

    100% {
      width: 100%;
    }
  }

  @keyframes lightEffect {
    0%,
    20%,
    40%,
    60%,
    80%,
    100% {
      background: repeating-linear-gradient(
          45deg,
          #0031f2 0 30px,
          #006dfe 0 40px
        )
        right/200% 100%;
    }

    10%,
    30%,
    50%,
    70%,
    90% {
      background: repeating-linear-gradient(
          45deg,
          #0031f2 0 30px,
          #006dfe 0 40px,
          rgba(255, 255, 255, 0.3) 0 40px
        )
        right/200% 100%;
    }
  }
`;

export default Loader;
