import { styled } from "@mui/system";
import { Link } from "react-router-dom";

export const ContainerHeader = styled("header")`
  width: 100%;
  min-height: 3.5rem;
  background-color: #1f6357;
  position: relative;
  display: flex;
  padding: 0.5rem;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;
`;

export const BoxHeader = styled("div")`
  flex-grow: 1;
  &:nth-of-type(1) {
    flex-grow: 3;
  }
  &:nth-of-type(2) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const BoxPerfil = styled("div")`
  width: 50px;
  height: 50px;
  position: relative;
  cursor: pointer;
  background-size: 100% 100%;
  background-image: url("${(props) => props.img}");
`;
export const BoxMenuPerfil = styled("menu")`
  width: 150px;
  min-height: 100%;
  position: absolute;
  top: 60px;
  right: 40px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  background: #95a3a6;
`;

export const MenuPerfil = styled("ul")`
  height: 100%;
  position: relative;
  list-style-type: none;
`;

export const ItemMenuPerfil = styled("li")`
  padding: 10px;
  position: relative;
  &:hover {
    background-color: #1f6357;
    transition: 0.5s;
  }
`;
export const LinkMenu = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const BoxIconPerfil = styled("div")`
  color: #fff;
  display: flex;
  justify-content:center;
  align-items:center;
  margin-right:10px;
  width: 50px;
  height: 50px;
`;

export const BoxSeach = styled("div")`
  width: 100%;
  position: relative;

`
export const InputSeach = styled("input")`
  width: 100%;
  height: 34px;
  border: none;
  border-radius: 20px;
  background-color: #fff;
`
export const IconSeach = styled("buttom")`
  display:inline-block;
  position: absolute;
  padding-top: 5px;
  right: 15px;
  color: #95a3a6;
  cursor: pointer;
`
