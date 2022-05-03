import { styled } from "@mui/system";

export const ContainerListaVagas = styled("div")`
  width: 100%;
  position: relative;
`;

export const ContainerTabela = styled("div")`
  width: 100%;
  position: relative;
  background: #fff;
`;
export const BoxTabela = styled("div")`
  width: 100%;
  display: flex;
  position: relative;
  border-bottom: 1px solid #ccc;
  &:nth-last-of-type(1) {
    border-bottom: none;
  }
  &:hover {
    background: rgba(31, 99, 87, 0.2);
    
  }
`;
export const BoxTabelaTitle = styled("div")`
  width: 100%;
  display: flex;
  position: relative;
  cursor: pointer;
  background: #1f6357;
  color: #fff;
  border-bottom: 1px solid #ccc;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  z-index: 2;
`;

export const BoxColuna = styled("div")`
  overflow-x: auto;
  max-height: 480px;
`;

export const LinhaTabela = styled("div")`
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding: 10px;
  width: 10%;
  border-right: 1px solid #ccc;
  &:nth-of-type(1) {
    flex-grow: 0;
    justify-content: center;
  }
  &:nth-of-type(3) {
    flex-grow: 4;
    border-right: 1px solid #ccc;
  }
  &:nth-last-child(1) {
    flex-grow: 0;
    justify-content: center;
  }
`;
export const LinhaTitle = styled(LinhaTabela)`
  width: 10%;
`;

export const BoxIcon = styled("div")`
  color: ${(props) => props.color || "#1f6357"};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  /* &:hover {
    color: ${(props) => props.color || "rgba(31, 99, 87,0.6)"};
    background-color: rgba(200, 200, 200, 0.6);
    border-radius: 30px;
  } */
`;
export const BoxIconClose = styled("div")`
  color: #8f1402;
  position: absolute;
  right: -30px;
  top: -15px;
  border: 2px solid #8f1402;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #8f1402;
    border: 2px solid #fff;
  }
`;
export const BoxSeach = styled("div")`
  width: 100%;
  margin-bottom: 10px;
  position: relative;
`;
export const InputSeach = styled("input")`
  width: 100%;
  position: relative;
  height: 35px;
  padding-left: 20px;
  border: none;
  background-color: #fff;
  &:focus {
    outline: none;
  }
`;
export const IconSeach = styled("span")`
  display: inline-block;
  position: absolute;
  top: 5px;
  right: 15px;
  color: #1f6357;
`;

export const BoxButton = styled("div")`
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const ButtonAdd = styled("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  color: #fff;
  background: none;
  padding: 0.4rem;
  margin-bottom: 1rem;
  &:hover {
    color: rgba(230, 230, 230, 1);
  }
`;

//Detalhe Stylo

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
