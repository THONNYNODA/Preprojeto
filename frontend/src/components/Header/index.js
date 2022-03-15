import React, { useState } from "react";
import {
  BoxHeader,
  BoxMenuPerfil,
  BoxPerfil,
  ContainerHeader,
  ItemMenuPerfil,
  LinkMenu,
  MenuPerfil,
  BoxIconPerfil,
  BoxSeach,
  IconSeach,
  InputSeach,
  ContainerPerfil,
  Text,
  Title,
  Divisorio,
  BoxIconClouse,
} from "./styles";
import PerfilMan from "../../assets/PerfilMan.svg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Badge from "@mui/material/Badge";
import { BoxIcon } from "../Menu/styles";
import { Mobile } from "../Menu";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenuPerfil, setOpenMenuPerfil] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  const handleOpenMenuPerfil = () => {
    setOpenMenuPerfil(true);
  };

  function SeacherHeader() {
    return (
      <BoxSeach>
        <InputSeach type="text" placeholder="Pesquisar..." />
        <IconSeach>
          <SearchIcon />
        </IconSeach>
      </BoxSeach>
    );
  }

  function MenuPerfilHeader(props) {
    const handleCloseMenu = () => {
      props.setOpenMenuPerfil(false);
    };

    return (
      <BoxMenuPerfil>
        <BoxIconClouse onClick={handleCloseMenu} onClose={handleCloseMenu}>
          <CloseIcon />
        </BoxIconClouse>
        <ContainerPerfil>
          <BoxPerfil img={PerfilMan} />
          <Title>Tony Takeharo Noda</Title>
          <Text>Aux TI</Text>
        </ContainerPerfil>
        <Divisorio width="100%" minHeight="2px" />
        <MenuPerfil>
          <ItemMenuPerfil>
            <LinkMenu to="/edtarperfil">Perfil</LinkMenu>
          </ItemMenuPerfil>
          <ItemMenuPerfil>
            <LinkMenu to="/">Sair</LinkMenu>
          </ItemMenuPerfil>
        </MenuPerfil>
      </BoxMenuPerfil>
    );
  }

  return (
    <>
      <ContainerHeader>
        <BoxHeader>
          <BoxIcon
            onChange={handleOpenMenu}
            onClick={handleOpenMenu}
            color="#fff"
            cursor="pointer"
          >
            <MenuIcon />
          </BoxIcon>
        </BoxHeader>
       
        <BoxHeader>
          <BoxPerfil
            cursor="pointer"
            img={PerfilMan}
            onChange={handleOpenMenuPerfil}
            onClick={handleOpenMenuPerfil}
          />
          {openMenuPerfil ? (
            <MenuPerfilHeader {...{ setOpenMenuPerfil }} />
          ) : null}
          <BoxIconPerfil>
            <Badge badgeContent={2} color="error">
              <NotificationsIcon />
            </Badge>
          </BoxIconPerfil>
        </BoxHeader>
      </ContainerHeader>
      {openMenu ? (
        <Mobile {...{ openMenu, setOpenMenu, handleOpenMenu }} />
      ) : null}
    </>
  );
}

export default Header;
