import React, { ReactElement } from "react";
import { Header, Nav } from "./Apppbar.styled";
import Hamburger from "./components/Hamburger";

export default function Appbar(): ReactElement {
  return (
    <Header>
      <Nav>Appbar</Nav>
      <Hamburger />
    </Header>
  );
}
