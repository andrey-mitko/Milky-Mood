import styled from "styled-components";

export const Image = styled.div.attrs(({ $movedX, $movedY }) => ({
  style: {
    transform: `translate(${$movedX}px, ${$movedY}px)`
  }
}))`
  background-image: url("/image.jpeg");
  background-size: 400px 600px;
  height: 100px;
  width: 100px;
  position: relative;
  background-position: ${({ $initialX, $initialY }) =>
    `-${$initialX * 100}px -${$initialY * 100}px`};
  @media (max-width: 700px) {
    background-size: 300px 450px;
    height: 75px;
    width: 75px;
    background-position: ${({ $initialX, $initialY }) =>
      `-${$initialX * 75}px -${$initialY * 75}px`};
  }
`;
