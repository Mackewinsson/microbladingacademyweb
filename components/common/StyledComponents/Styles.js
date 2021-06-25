import React from "react";

import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
`;

export const MainTitle = styled.h1`
  font-weight: bold;
  margin-top: 50px;
  letter-spacing: 0.3em;
`;

export const Subtitle = styled.h3`
  font-weight: 400;
  margin-top: 0;
  text-transform: uppercase;
`;

export const CenterContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const ALink = styled.a`
  text-decoration: none;
  color: #2a2a2a;
  font-weight: bold;
  margin: 20px 10px;
  &:hover {
    font-size: 1.1em;
    background-color: #2a2a2a;
    color: #fff;
    border-radius: 50px;
    padding: 10px;
  }
`;
