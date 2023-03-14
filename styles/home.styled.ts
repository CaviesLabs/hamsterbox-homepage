import styled from "styled-components";

export const HomeStyled = styled.div`
  .trapezoidContainer {
    .header-container {
      display: flex;
      width: 120%;
    }

    .trapezoid {
      width: 50%;
      text-align: center;
      height: 0;
      position: relative;
      border-right: 100px solid transparent;
      /* border-top: 300px solid; */
      box-sizing: content-box;
    }

    .trapezoid-right {
      width: 60%;
      text-align: center;
      height: 0;
      position: relative;
      border-left: 100px solid transparent;
      /* border-bottom: 300px solid; */
      box-sizing: content-box;
      left: -100px;
    }

    [data-theme="dark"] {
      .trapezoid {
        border-top-color: #b998fb;
      }

      .trapezoid-right {
        border-bottom-color: #69ffb2;
      }
    }

    .trapezoid span {
      position: absolute;
      top: -30px;
      left: 25%;
      color: #fff;
    }

    .trapezoid-right span {
      position: absolute;
      bottom: -30px;
      left: 25%;
      color: #fff;
    }
  }

  .tst {
    text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff,
      -1px -1px #fff, 1px -1px #fff, -1px 1px #fff !important;
    color: #c9c0dc !important;
  }
  .tst-green {
    text-shadow: 2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000,
      -1px -1px #000, 1px -1px #000, -1px 1px #000 !important;
    color: #5ac37d !important;
  }
`;
