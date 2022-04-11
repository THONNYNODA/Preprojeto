import { styled } from "@mui/system";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import { Radio } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";

export const ContainerListaVagas = styled("div")`
  width: 100%;
  //padding: 25px;
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
  //color: ${(props) => props.color || "#1f6357"};
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
  //border: 2px solid #1f6357;
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
export const ContainerRadio = styled(FormControl)`
  position: relative;
`;

export const BoxRadio = styled(RadioGroup)`
  //display: block;
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
 &.MuiFormControlLabel-root{
  color: #fff;
  font-weight: lighter;
 }
`;

// pesquisa avançado

export const ContainerAvancado = styled("div")`
  width: 100%;
  padding: 10px;
`;

export const BoxAvancado = styled("div")`
  width: 100%;
  text-align: center;
`;

export const ButtonAvancado = styled("button")`
  height: 27px;
  font-size: 18px;
  border-radius: 30px;
  border: 1px solid;
  background: none;  
  color: #fff;
  cursor: pointer;
  &:hover {
    color: rgba(250,250,250,0.5);
  }
`;
