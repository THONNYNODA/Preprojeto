import React from "react";
import {
  BoxIcon,
  BoxMenu,
  ContainerMenu,
  ItemsMenu,
  LinkMenu,
  ListaMenu,
} from "./styles";

import HomeIcon from "@mui/icons-material/Home";

function Menu() {
  function Desktop() {
    return (
      <ContainerMenu>
        <BoxMenu>
          <ListaMenu>
            <ItemsMenu>
              <BoxIcon>
                <HomeIcon />
              </BoxIcon>
              <LinkMenu to="/dashboard">Pagina Principal</LinkMenu>
            </ItemsMenu>
            <ItemsMenu>
              <BoxIcon>
                <HomeIcon />
              </BoxIcon>
              <LinkMenu to="/dashboard">Pagina Principal</LinkMenu>
            </ItemsMenu>
            <ItemsMenu>
              <BoxIcon>
                <HomeIcon />
              </BoxIcon>
              <LinkMenu to="/dashboard">Pagina Principal</LinkMenu>
            </ItemsMenu>
            
          </ListaMenu>
        </BoxMenu>
      </ContainerMenu>
    );
  }

  function Mobile() {
    return <>Mobile</>;
  }

  return (
    <>
      <Desktop />
    </>
  );
}

export default Menu;
