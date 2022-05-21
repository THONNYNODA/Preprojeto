import { styled } from "@mui/system";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import { Radio } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";

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
export const ContainerRadio = styled(FormControl)`
  position: relative;
`;

export const BoxRadio = styled(RadioGroup)`
  position: relative;
  color: black;
  font-weight: lighter;
`;
export const SeachRadio = styled(Radio)`
  &.MuiRadio-colorPrimary {
    color: var(--primary-color);
    
  }
`;
export const TitleRadio = styled(FormLabel)`
  color: black;
  font-weight: lighter;
  &.Mui-focused {
    color: var(--primary-color);
  }
`;
export const TextRadio = styled(FormControlLabel)`
 &.MuiFormControlLabel-root{
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
  border: 0.1rem solid;
  background: none;  
  cursor: pointer;
  &:hover {
    color: var(--primary-color);
  }
`;
