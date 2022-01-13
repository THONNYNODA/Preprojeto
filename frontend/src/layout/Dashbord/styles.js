import { styled } from "@mui/system";

export const ContainerDashbord = styled("div")`
  width: 100%;
  position: relative;
  max-width: 1280px;
  padding: 0 2%;
  margin: 0 auto;
`;

export const ContainerTabela = styled("div")`
  width: 100%;
  height: 100%;
  max-height: 300px;
  overflow: auto;
  border: 1px solid #ccc;
`;
export const BoxTabela = styled("div")`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #ccc;
  &:nth-last-of-type(1) {
    border-bottom: none;
  }
  &:nth-of-type(2n) {
    background: #cccccccc;
  }
`;

export const LinhaTabela = styled("div")`
  display: flex;
  align-items: center;
  padding: 10px;

  &:nth-of-type(1) {
    flex-grow: 1;
    border-right: 1px solid #ccc;
  }
`;

export const BoxIcon = styled("div")`
  color: ${(props) => props.color || "#1f6357"};
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
  margin-bottom:10px ;
  position: relative;
  
`;
export const InputSeach = styled("input")`
  width: 100%;
  position: relative;
  height: 35px;
  padding-left: 20px;
  border: none;
  border-radius: 20px;
  border: 2px solid #1f6357;
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
  color: #95a3a6;
  
`;