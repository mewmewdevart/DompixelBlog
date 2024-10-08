"use client";

import { useState } from "react";
import NextImage from "next/image";
import Link from "next/link";

import { Burger, Container, Group, Image, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { PAGES_PATH, HOME_PATH, PANEL_PATH } from '@routers/constants';

import style from "./navbar.module.css";

import logo from "@assets/logos/logo-line-blue.svg";

const links = [
  { link: HOME_PATH, label: "Blog" },
  { link: "https://dompixel.com/", label: "Site" },
  { link: PAGES_PATH + PANEL_PATH , label: "Panel" },
];

export function NavbarComponent() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const handleLinkClick = (link: string) => {
    setActive(link);
    close();
  };

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={style.link}
      data-active={active === link.link || undefined}
      onClick={() => handleLinkClick(link.link)}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={style.header}>
      <Container fluid className={style.inner}>
        <Link href="/" style={{ display: "inline-block" }}>
          <Image
            component={NextImage}
            src={logo}
            alt="Logotype of DomPixel"
            width={100}
            height={100}
            className="w-[131px]"
          />
        </Link>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Menu trigger="click-hover" openDelay={100} closeDelay={400}>
          <Menu.Target>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="xs"
              size="sm"
            />
          </Menu.Target>
          <Menu.Dropdown>{items}</Menu.Dropdown>
        </Menu>
      </Container>
    </header>
  );
}
