import {Button, Container, Menu} from "semantic-ui-react";
import React from "react";

interface Props {
    openForm: () => void;
}

export default function NavBarBE({openForm}: Props) {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item style={{ color: "black"}} header>
                    <img src='/assets/marAzores.png' alt='logo' style={{marginRight: 10}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item style={{ color: "black"}} name='Activities' />
                <Menu.Item>
                    <Button onClick={openForm} positive content='Create Activity' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}