import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { keyframes } from "@emotion/react";

export const MenuAnimation = keyframes`
  from{
   left:-35%;
  }
  to{
    left:0%;
  }`;

export const MenuAnimationReverso = keyframes`
  from{
   left:0%;
  }
  to{
    left:100%;
  }
`;

export const ContainerMenu = styled("div")`
  width: 100%;
  max-width: 200px;
  height: calc(100vh - 3.5rem);
  background-color: #fff;
  position: relative;
  margin-right: 10px;
  box-shadow: 5px 0px 5px 0px rgba(0, 0, 0, 0.45);
`;
export const ContainerMenuMobile = styled(ContainerMenu)`
  width: 35%;
  height: 100%;
  animation-name: ${props => props.animation};
  animation-duration: 1s;
  position: relative;
  
`;
export const DrownMenuMobile = styled("div")`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.45);
`;

export const BoxMenu = styled("nav")`
  width: 100%;
  position: relative;
`;

export const ListaMenu = styled("ul")`
  height: 100%;
  position: relative;
  list-style-type: none;
`;

export const ItemsMenu = styled("li")`
  display: flex;
  align-items: stretch;
  position: relative;
  //border-bottom: 1px outset rgba(255, 255, 255, 1);
  &:hover {
    background-color: rgba(31, 99, 87, 0.35);
    transition: 0.5s;
    color: #fff;
  }
`;

export const LinkMenu = styled(Link)`
  width: 100%;
  padding: 15px 0;
  text-decoration: none;
  font-weight: bold;
  color: #646e70;
`;

export const LinkMenuMobile = styled(Link)`
  width: 100%;
  padding: 15px;
  text-decoration: none;
  font-weight: bold;
  color: #646e70;
`;

export const BoxIcon = styled("div")`
  color: ${(props) => props.color || "#1f6357"};
  cursor: ${(props) => props.cursor || null};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
`;
