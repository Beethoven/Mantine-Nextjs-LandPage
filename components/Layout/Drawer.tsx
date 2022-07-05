import { useState } from 'react';
import { createStyles, Drawer, Burger } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },
}));

interface HeaderLinks {
  links: { link: string; label: string }[];
}

export function DrawerUI({ links }: HeaderLinks) {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Register"
        padding="xl"
        size="xl"
        withCloseButton={false}
      >
        {items}
      </Drawer>
      <Burger
        size="lg"
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        title={title}
        className={classes.burger}
      />
    </>
  );
}
