import { styled } from "@mui/system";

export const ContainerListaVagas = styled("div")`
  width: 100%;
  height: 100%;
  max-height: 50rem;
  margin-top: 2rem;
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
  cursor: pointer;
  border-bottom: 0.1rem solid #ccc;
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
  border-bottom: 0.1rem solid #ccc;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;
`;

export const BoxColuna = styled("div")`
  overflow-x: auto;
`;

export const LinhaTabela = styled("div")`
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 10%;
  flex-grow: 1;
  border-right: 0.1rem solid #ccc;
  &:nth-last-of-type(1) {
    flex-grow: 0;
    border-left: 0.2rem solid #ccc;
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
  padding: 0.5rem;
  cursor: pointer;
  /* &:hover {
    color: ${(props) => props.color || "rgba(31, 99, 87,0.6)"};
  } */
`;
export const BoxIconClose = styled("div")`
  color: #8f1402;
  position: absolute;
  right: -3rem;
  top: -1.5rem;
  border: 0.2rem solid #8f1402;
  border-radius: 0.5rem;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #8f1402;
    border: 0.2rem solid #fff;
  }
`;
export const BoxSeach = styled("div")`
  width: 100%;
  margin-bottom: 1rem;
  position: relative;
`;
export const InputSeach = styled("input")`
  width: 100%;
  position: relative;
  height: 3.5rem;
  padding-left: 2rem;
  border: none;
  background-color: #fff;
  &:focus {
    outline: none;
  }
`;
export const IconSeach = styled("span")`
  display: inline-block;
  position: absolute;
  top: 0.5rem;
  right: 1.5rem;
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
  max-width: 48rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  
`;

export const BoxDetalhe = styled("div")`
  width: 100%;
  padding: 0.5rem;
  display: flex;
`;

export const TitleDetalhe = styled("h2")`
  font-weight: lighter;
`;
export const TextDetalhe = styled("p")`
  text-decoration: none;
  margin-right: 1rem;
`;
export const LinkDetalhe = styled("a")`
  color: black;
  text-decoration: none;
  margin-right: 1rem;
  &:hover {
    color: var(--primary-color);
  }
`;

export const Buttons = styled("button")`
  width: ${(props) => props.width || "100%"};
  font-size: 1.5rem;
  padding: 1rem 3rem;
  margin-top: 1rem;
  color: #fff;
  background-color: var(--primary-color);
  border: none;
  border-radius: 0 0 0.6rem 0.6rem;
  cursor: pointer;
  transition: 0.2s;
  @media (max-width: 780px) {
    width: 100%;
    margin: 0;
    padding: 1rem;
  }
  &:hover {
    background-color: #fff;
    color: var(--primary-color);
    transition: 0.2s;
  }
`;
