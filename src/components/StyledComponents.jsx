import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <Container>
      <Title>- Styled Components -</Title>
      <Button>FIGHT</Button>
    </Container>
  );
};

const Container = styled.div`
    width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;
const Title = styled.p`
    color: red;
    font-size: 18px;
`;

const Button = styled.button`
    color: #fff;
    background-color: cyan;
    padding: 8px;
`;