import { styled } from "@mui/system";


export const ContainerDetalheVaga = styled("div")`
  height: 100%;
  min-height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
`;

export const BoxDetalhe = styled("div")`
  width: 100%;
  height: 100%;
  padding: 5px;  
  display: flex;
`;

export const TitleDetalhe = styled("h2")`
  font-weight: lighter;
`;
export const TextDetalhe = styled("p")`
  text-decoration:none;
  margin-right: 10px;
`;
export const LinkDetalhe = styled("a")`
  color: black ;
  text-decoration:none;
  margin-right: 10px;
  &:hover{
    color:#1f6357;
  }
`;

export const Buttons = styled("button")`
  width: ${(props) => props.width || "100%"};
  font-size: 1.5rem;
  //margin: 30px;
  padding: 10px 30px;
  margin-top: 10px;
  color: #fff;
  background-color: #1f6357;
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
    color: #1f6357;
    transition: 0.2s;
  }
`;
