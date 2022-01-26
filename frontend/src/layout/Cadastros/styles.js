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
  };
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



//**Modal */

export const ModalDetalhe = styled("div")`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 99;
`;

export const ContainerDetalhe = styled("div")`
  max-width: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;

export const BoxDetalhe = styled("div")`
  width: 100%;
  padding: 10px;
  display: flex;
`;

export const TitleDetalhe = styled("h2")`
  font-weight: lighter;
`;
export const TextDetalhe = styled("p")`
  &:nth-of-type(1) {
    margin-right: 10px;
  }
`;