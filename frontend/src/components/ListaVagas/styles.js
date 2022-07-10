import { styled } from "@mui/system";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import { Radio } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";

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
export const BoxIconStatus = styled("div")`
  color: ${(props) => props.color};
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;

export const TitleDetalhe = styled("h2")`
  font-weight: lighter;
`;
export const TextDetalhe = styled("p")`
  &:nth-of-type(1) {
    margin-right: 1rem;
  }
`;

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

  color: var(--text);
  border-bottom: 0.1rem solid #ccc;
  &:nth-last-of-type(1) {
    border-bottom: none;
  }
`;
export const BoxTabelaTitle = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary-color);
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 2;
`;

export const BoxColuna = styled("div")`
  overflow-x: auto;
  max-height: 48rem;
`;

export const LinhaTabela = styled("div")`
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  flex: 1;
  font-size: 1.2rem;
  border-right: 0.1rem solid #ccc;
  &:nth-last-of-type(1) {
    border-right: none;
    justify-content: center;
  }
  &:nth-of-type(2) {
    flex: 6;
    justify-content: start;
  }
`;
export const LinhaTitle = styled(LinhaTabela)`
  font-size: 1rem;
  color: #fff;
`;

export const BoxIcon = styled("div")`
  display: flex;
  color: var(--primary-color);
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  cursor: pointer;
  transition: 0.2s;
  &:hover {
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.3);
    filter: brightness(0.8);
  }
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
  display: flex;
  align-self: center;
  background-color: #ffff;
  position: relative;
`;
export const InputSeach = styled("input")`
  width: 100%;
  position: relative;
  padding: 0.5rem;

  border: none;
  background-color: #fff;
  &:focus {
    outline: none;
  }
`;
export const IconSeach = styled("span")`
  display: flex;
  align-self: center;
  padding-inline: 1rem;
  color: var(--primary-color);
`;
export const ContainerRadio = styled(FormControl)`
  position: relative;
`;
export const ContainerPortal = styled("div")`
  display: flex;
  justify-content: center;
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
  color: black;
  color: #fff;
  font-weight: lighter;
  &.Mui-focused {
    color: #fff;
  }
`;
export const TextRadio = styled(FormControlLabel)`
  &.MuiFormControlLabel-root {
    color: #fff;
    font-weight: lighter;
  }
`;

// pesquisa avançado

export const ContainerAvancado = styled("div")`
  width: 100%;
  padding: 0.5rem;
`;

export const BoxAvancado = styled("div")`
  width: 100%;
  text-align: center;
`;

export const ButtonAvancado = styled("button")`
  height: 1.7rem;
  font-size: 1.8rem;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: rgba(250, 250, 250, 0.5);
  }
`;
