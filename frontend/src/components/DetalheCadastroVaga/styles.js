import { styled } from "@mui/system";

export const ContainerDetalheVaga = styled("div")`
  height: 100%;
  min-height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  

  div {
    width: 100%;
    padding: 2rem;
  }
  p {
    font-size: 1.2rem;
  }
  strong{
    &.active{
      color:var(--title-light);
    }
    &.desable{
      color:var(--error-color)
    }
  }
  button{
    width: ${(props) => props.width || "100%"};
  font-size: 1.5rem;
  padding: 1rem 3rem;
  margin-top: 1rem;
  color: #fff;
  background-color: var(--primary-color);
  border: none;
  border-radius: 0 0 0.6rem 0.6rem;
  cursor: pointer;
  transition: background-color 0.2s;
  @media (max-width: 780px) {
    width: 100%;
    margin: 0;
    padding: 1rem;
  }
  &:hover {
    filter: brightness(0.7);

    transition: 0.2s;
  }
  }

`;





