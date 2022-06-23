import React, { useState } from "react";
import {
  BoxMenu,
  BoxSubMenu,
  ContainerMenuMobile,
  ContainerSubMenu,
  DrownMenuMobile,
  ItemsMenu,
  ItemsSubMenu,
  LinkMenuMobile,
  ListaMenu,
} from "./styles";

export function Mobile(props) {
  const [animation, setAnimation] = useState(true);

  return (
    <>
      <DrownMenuMobile onClick={props.handleOpenMenu} />
      <ContainerMenuMobile animation={animation}>
        <BoxMenu>
          <ListaMenu>
            <ItemsMenu>
              <LinkMenuMobile to="/pagina_principal">
                Pagina Principal
              </LinkMenuMobile>
            </ItemsMenu>
            <ItemsMenu>
              <LinkMenuMobile to="/vagas">Vagas</LinkMenuMobile>
            </ItemsMenu>
            <ItemsMenu>
              <LinkMenuMobile to="/candidatos">Candidatos</LinkMenuMobile>
            </ItemsMenu>
            <ContainerSubMenu>
              <ItemsMenu>
                <LinkMenuMobile to="#">Cadastros</LinkMenuMobile>
              </ItemsMenu>
              <BoxSubMenu>
                <ItemsSubMenu>
                  <LinkMenuMobile to="/cadastros/vagas">Vagas</LinkMenuMobile>
                </ItemsSubMenu>
              </BoxSubMenu>
            </ContainerSubMenu>
          </ListaMenu>
        </BoxMenu>
      </ContainerMenuMobile>
    </>
  );
}
