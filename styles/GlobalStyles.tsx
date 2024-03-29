import * as styled from "styled-components";

export const GlobalStyle = styled.createGlobalStyle`
  html,
  body {
    font-size: 1vmax;
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    flex-wrap: nowrap;
    background: linear-gradient(
      170deg,
      rgb(68, 68, 68) 30%,
      var(--background-color-theme) 80%
    );
    background-repeat: no-repeat;
    background-size: cover;
    font-family: "Play";
    color: red;
    background-color: var(--background-color-theme);
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: scroll !important;
    z-index: -999;
    caret-color: transparent;
    --background-color-theme: rgba(24, 24, 24, 1);
    --alert-color-warning: rgba(255, 140, 140, 0.8);
    --alert-text-warning: rgba(0, 0, 0, 1);
    --alert-color-message: rgba(255, 250, 130, 0.8);
    --alert-text-message: rgba(0, 0, 0, 1);
    --alert-color-success: rgba(155, 240, 150, 0.8);
    --alert-text-success: rgba(10, 85, 0, 1);
  }

  /* hides all scrollbars */
  ::-webkit-scrollbar {
    display: none !important;
  }

  hr {
    border: 0;
    margin: 1rem 0 0 0;
    height: 2px;
    background-image: linear-gradient(
      to right,
      rgba(255, 0, 0, 0),
      red,
      rgba(255, 0, 0, 0)
    );
  }

  /* The width is greater than the height */
  @media screen and (min-width: 100vh) {
  }
  /* phone */
  @media (max-width: 600px) {
  }
  /* tablet portrait */
  @media (max-width: 900px) {
  }
  /* tablet landscape */
  @media (max-width: 1200px) {
  }
  /* desktop */
  @media (max-width: 1800px) {
  }
  /* >1800px = wide screen */
  @media (min-width: 1801px) {
  }
`;

const BasicLayout = ({ children }: { children: unknown }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default BasicLayout;
