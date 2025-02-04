import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  margin: 20px auto;
  padding: 15px 0px;
  border-radius: 20px;
  max-width: 1120px;
  width: 98%;
  
`;

export const ChartBox = styled.div`
  background: #fff;
  padding: 25px;
  border-radius: 15px;
  text-align: center;
  width: ${(props) => (props.fullWidth ? "100%" : "40%")};
  min-width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
    color: #333;
    text-transform: uppercase;
  }
`;
