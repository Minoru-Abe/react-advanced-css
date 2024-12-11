/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "styled-components";

export const Emotion = () => {
  const containerStyle = css`
    width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  `;
  const titleStyle = css`
    color: red;
    font-size: 18px;
  `;
  const buttonStyle = css`
    color: #fff;
    background-color: blue;
    padding: 8px;
  `;
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>--Emotion--</p>
      <SButton>FIGHT!!</SButton>
    </div>
  );
};

const SButton = styled.button`
    color: #fff;
    background-color: red;
    padding: 8px;
`;