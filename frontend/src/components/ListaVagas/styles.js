import { styled } from "@mui/system";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import { Radio } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";

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
  max-height: 48rem;
`;

export const LinhaTabela = styled("div")`
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 10%;

  &:nth-of-type(1) {
    flex-grow: 1;
    border-right: 0.1rem solid #ccc;
  }
  &:nth-of-type(2) {
    justify-content: center;
  }
`;
export const LinhaTitle = styled(LinhaTabela)`
  width: 10%;
`;

export const BoxIcon = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  
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
  z-index: 99;
`;

export const ContainerDetalhe = styled("div")`
  max-width: 48rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;

export const BoxDetalhe = styled("div")`
  width: 100%;
  padding: 1rem;
  display: flex;
`;

export const TitleDetalhe = styled("h2")`
  font-weight: lighter;
`;
export const TextDetalhe = styled("p")`
  &:nth-of-type(1) {
    margin-right: 1rem;
  }
`;

export const ContainerRadio = styled(FormControl)`
  position: relative;
`;

export const BoxRadio = styled(RadioGroup)`
  position: relative;
  color: #fff;
  font-weight: lighter;
  
`;
export const SeachRadio = styled(Radio)`
  &.MuiRadio-colorPrimary {
    color: #fff;
  }
`;
export const TitleRadio = styled(FormLabel)`
  color: #fff;
  font-weight: lighter;
  &.Mui-focused {
    color: rgba(255, 255, 255, 1);
  }
`;
export const TextRadio = styled(FormControlLabel)`
  &.MuiFormControlLabel-root {
    color: blue;
    font-weight: lighter;
  }
`;

// pesquisa avançado

export const ContainerAvancado = styled("div")`
  width: 100%;
  padding: 1rem;
`;

export const BoxAvancado = styled("div")`
  width: 100%;
  text-align: center;
`;

export const ButtonAvancado = styled("button")`
  height: 2.7rem;
  font-size: 1.8rem;
  border-radius: 3rem;
  border: 0.1rem solid #fff;
  color: #ffffff;
  background: none;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;
