import { Button, Container, Menu } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import React from "react";
import { useStore } from "../stores/store";

export default function NavBarBE() {
  const { activityStore } = useStore()

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item style={{ color: "black" }} header>
          <img
            src="/assets/marAzores.png"
            alt="logo"
            style={{ marginRight: 10 }}
          />
          Reactivities
        </Menu.Item>
        <Menu.Item style={{ color: "black" }} name="Activities" />
        <Menu.Item>
          <Button
            onClick={() => activityStore.openForm()}
            positive
            content="Create Activity"
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
