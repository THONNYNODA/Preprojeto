import { styled } from "@mui/system";

export const ContainerCadastros = styled("div")`
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const BoxCadastros = styled("div")`
  width: 100%;
  
  margin: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover h2 {
    cursor: pointer;
    color: green;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const IconCadastro = styled("div")`
  width: 15rem;
  height: 15rem;
  background-image: url(${(props) => props.img});
  background-size: 100% 100%;
`;



