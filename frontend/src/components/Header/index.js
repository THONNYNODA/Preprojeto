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
} from "./styles";
import PerfilMan from "../../assets/PerfilMan.svg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";

import Badge from "@mui/material/Badge";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  function MenuPerfilHeader() {
    return (
      <BoxMenuPerfil>
        <MenuPerfil>
          <ItemMenuPerfil>
            <LinkMenu to="/edtarperfil">Perfil</LinkMenu>
          </ItemMenuPerfil>
          <ItemMenuPerfil>
            <LinkMenu to="/config">Configurar</LinkMenu>
          </ItemMenuPerfil>
          <ItemMenuPerfil>
            <LinkMenu to="/">Sair</LinkMenu>
          </ItemMenuPerfil>
        </MenuPerfil>
      </BoxMenuPerfil>
    );
  }

  return (
    <ContainerHeader>
      <BoxHeader>
        <BoxSeach>
          <InputSeach/>
          <IconSeach>
            <SearchIcon />
          </IconSeach>
        </BoxSeach>
      </BoxHeader>
      <BoxHeader>
        <BoxPerfil
          img={PerfilMan}
          onChange={handleOpenMenu}
          onClick={handleOpenMenu}
        />
        {openMenu ? <MenuPerfilHeader /> : null}
        <BoxIconPerfil>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
        </BoxIconPerfil>
      </BoxHeader>
    </ContainerHeader>
  );
}

export default Header;
