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
  background: #1f6357;
  color: #fff;
  border-bottom: 1px solid #ccc;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  z-index: 2;
`;

export const BoxColuna = styled('div')`
  overflow-x: auto;
  //max-height: 400px;
`

export const LinhaTabela = styled("div")`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 10%;
  
  &:nth-of-type(1) {
    flex-grow: 1;
    border-right: 1px solid #ccc;
  }
  &:nth-of-type(2) {
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
  &:hover {
    color: ${(props) => props.color || "rgba(31, 99, 87,0.6)"};
  }
`;

export const BoxSeach = styled("div")`
  width: 100%;
  //max-width: 200px;
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

//Detalhe Stylo


export const ContainerDetalhe = styled('div')`
  width: 480px;
  height: 300px;
  position: absolute;
  top: 50%;
  left:50%;
  transform:translate( -50%, -50%);
  background: #fff;
  
`
