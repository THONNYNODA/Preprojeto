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
  color: var(--text);
  border-bottom: 0.1rem solid #ccc;
  &:nth-last-of-type(1) {
    border-bottom: none;
  }
`;
export const BoxTabelaTitle = styled("div")`
  width: 100%;
  display: flex;
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
  color:var(--text);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  flex: 1;
  font-size: 1.2rem;
  border-right: 0.1rem solid #ccc;
  &:nth-last-of-type(1) {    
    border-right: none;
  };
  &:nth-of-type(1){
    flex:5;
    justify-content: left;
  }
`;
export const LinhaTitle = styled(LinhaTabela)`
  font-size: 1rem;
  color: #fff;
`;

export const BoxIcon = styled("div")`
  display: flex;
  color:var(--primary-color);
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.8);
    border-radius: 20px;
    background: rgba(255,255,255,0.3);
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
export const Countain = styled("div")`
  display: flex;
  justify-content: space-between;
  align-self: center;

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

// pesquisa avan??ado

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
