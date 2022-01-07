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
  TitleLogo,
} from "./styles";
import PerfilMan from "../../assets/PerfilMan.svg";
import Logo from "../../assets/logo-footer.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";

import Badge from "@mui/material/Badge";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  const handleCloseMenu = () => {
    setOpenMenu(null);
  };

  function SeacherHeader() {
    return (
      <BoxSeach>
        <InputSeach placeholder="Pesquisar..." />
        <IconSeach>
          <SearchIcon />
        </IconSeach>
      </BoxSeach>
    );
  }

  function MenuPerfilHeader() {
    return (
      <BoxMenuPerfil>
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
        <BoxPerfil img={Logo}/>
        <TitleLogo>Cemil</TitleLogo>
      </BoxHeader>
      <BoxHeader>
        <SeacherHeader />
      </BoxHeader>

      <BoxHeader>
        <BoxPerfil
          cursor="pointer"
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
