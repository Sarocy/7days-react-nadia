import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2vw;
  margin: 2vw auto;
  border-radius: 20px;
  max-width: 82vw;

  @media (max-width: 768px) {
    justify-content: center;
    width: 82vw;
  }
`;

export const ChartBox = styled.div`
  background: #fff;
  padding: 2vw;
  border-radius: 1.5vw;
  text-align: center;
  width: ${(props) => (props.fullWidth ? "100%" : "48%")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  h3 {
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 2vw;
    color: #333;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    width: 90vw;

    h3 {
      font-size: 3.5vw;
    }
  }
`;



