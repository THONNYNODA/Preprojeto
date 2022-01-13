import { styled } from "@mui/system";

export const ContainerTabela = styled("div")`
  width: 100%;
  height:100%;
  max-height:400px;
  overflow:auto;
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
  align-items:center;
  padding:10px;
  
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
