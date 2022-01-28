import { styled } from "@mui/system";

export const ContainerCadastros = styled("div")`
  height: 100%;
  top: 80px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const BoxCadastros = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  //justify-content: center;
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
  width: 150px;
  height: 150px;
  background-image: url(${(props) => props.img});
  background-size: 100% 100%;
`;



