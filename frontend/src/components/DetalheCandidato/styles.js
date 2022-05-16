import { styled } from "@mui/system";

export const ContainerListaVagas = styled("div")`
  width: 100%;
  height: 100%;
  max-height: 500px;
  margin-top: 2rem;
  position: relative;
`;

export const ContainerTabela = styled("div")`
  width: 100%;
  position: relative;
  //padding: 5px;
  background: #fff;
`;
export const BoxTabela = styled("div")`
  width: 100%;
  display: flex;
  position: relative;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
  &:nth-last-of-type(1) {
    border-bottom: none;
  }
  &:hover {
    background: rgba(31, 99, 87, 0.9);
    color: #fff !important;
  }
`;
export const BoxTabelaTitle = styled("div")`
  width: 100%;
  display: flex;
  position: relative;
  cursor: pointer;
  background: var(--primary-color);
  color: #fff;
  border-bottom: 1px solid #ccc;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  z-index: 2;
`;

export const BoxColuna = styled("div")`
  overflow-x: auto;
  //max-height: 400px;
`;

export const LinhaTabela = styled("div")`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 10%;
  flex-grow: 1;
  border-right: 1px solid #ccc;
  &:nth-last-of-type(1) {
    flex-grow: 0;
    border-left: 2px solid #ccc;
    justify-content: center;
  }
`;
export const LinhaTitle = styled(LinhaTabela)`
  width: 10%;
`;

export const BoxIcon = styled("div")`
  //color: ${(props) => props.color || "var(--primary-color)"};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  /* &:hover {
    color: ${(props) => props.color || "rgba(31, 99, 87,0.6)"};
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
  //border-radius: 20px;
  //border: 2px solid var(--primary-color);
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
  color: var(--primary-color);
`;

//Detalhe Stylo

export const ModalDetalhe = styled("div")`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 999;
`;

export const ContainerDetalhe = styled("div")`
  max-width: 480px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  
`;

export const BoxDetalhe = styled("div")`
  width: 100%;
  padding: 5px;
  display: flex;
`;

export const TitleDetalhe = styled("h2")`
  font-weight: lighter;
`;
export const TextDetalhe = styled("p")`
  text-decoration: none;
  margin-right: 10px;
`;
export const LinkDetalhe = styled("a")`
  color: black;
  text-decoration: none;
  margin-right: 10px;
  &:hover {
    color: var(--primary-color);
  }
`;

export const Buttons = styled("button")`
  width: ${(props) => props.width || "100%"};
  font-size: 1.5rem;
  //margin: 30px;
  padding: 10px 30px;
  margin-top: 10px;
  color: #fff;
  background-color: var(--primary-color);
  border: none;
  border-radius: 0px 0px 0.6rem 0.6rem;
  cursor: pointer;
  transition: 0.2s;
  @media (max-width: 780px) {
    width: 100%;
    margin: 0;
    padding: 10px;
  }
  &:hover {
    background-color: #fff;
    color: var(--primary-color);
    transition: 0.2s;
  }
`;
