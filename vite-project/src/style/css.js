import {  css } from "https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module";

const globalSpacing = css`16px`;
const inputFontSizeNormal = css`32px`;
const inputSize = css`150px`;

const primaryPurple = css`hsl(259, 100%, 65%)`;
const primaryLight = css`hsl(0, 100%, 67%)`;

const neutralWhite = css`hsl(0, 0%, 100%)`;
const neutralOffWhite = css`hsl(0, 0%, 94%)`;
const neutralLightgrey = css`hsl(0, 0%, 86%)`;
const neutralSmokeyGrey = css`hsl(0, 1%, 44%)`;
const neutraloffBlack = css`hsl(0, 0%, 8%)`;


export const inputStyles = css`
  .c-circle {
    background-color: ${primaryPurple};
    width: 56px;
    height: 54px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20%;

  }

  hr {
    box-sizing: content-box;
    
  }

  input {
    font-size: ${inputFontSizeNormal};
    color: ${neutralSmokeyGrey};
    font-weight: 800;
    width: ${inputSize};

  }

  label {
    color: ${neutralSmokeyGrey};
    font-weight: 700;
  }

  .o-divider {
    width: 55%;
    margin-left: 27%;
    height: 1px;
    border: 0;
    background-color: ${neutralLightgrey};
  }

  .u-flex {
    display: flex;
  }

  .u-flex-column {
    display: flex;
    flex-direction: column;
  }
  
  .u-flex-center {
    justify-content: center;
  }

  .u-flex-middle {
    align-items: center;
  }

  .u-flex-spacing {
    gap: ${globalSpacing};
  }

  



  `;

  export const fonts = css`

  `;