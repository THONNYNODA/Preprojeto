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
    left:-35%;
  }
`;

export const ContainerMenu = styled("div")`

`;
export const ContainerMenuMobile = styled(ContainerMenu)`
  width: 100%;
  max-width: 15%;
  background-color: #fff;
  position: relative;
  margin-right: 1rem;
  box-shadow: 0.5rem 0 0.5rem 0 rgba(0, 0, 0, 0.45);
  z-index: 9999;
  height: 100%;
  animation-name: ${(props) => props.animation === true ? MenuAnimation : null};
  animation-duration: 0.6s;
  position: absolute;
  @media (max-width: 780px) {
    max-width: none;
  } ;
 
`;
export const DrownMenuMobile = styled("div")`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 9998;
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
  &:hover {
    background-color: rgba(31, 99, 87, 0.35);
    transition: 0.5s;
    color: #fff;
  }
`;

export const LinkMenu = styled(Link)`
  width: 100%;
  padding: 1.5rem 0;
  text-decoration: none;
  font-weight: bold;
  color: #646e70;
`;

export const LinkMenuMobile = styled(Link)`
  width: 100%;
  padding: 1.2rem;
  font-size: 1.2rem;
  text-decoration: none;
  font-weight: bold;
  color: #646e70;
`;

export const BoxIcon = styled("div")`
  color: ${(props) => props.color || "var(--primary-color)"};
  cursor: ${(props) => props.cursor || null};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
`;
export const BoxSubMenu = styled("div")`
  display: none;
`;

export const ContainerSubMenu = styled("div")`
  &:hover div {
    display: block;
  }
`;
export const ItemsSubMenu = styled(ItemsMenu)`
  padding-left: 1.5rem;
`;
