import { createStyles, MantineTheme } from "@mantine/core"

const useStyles = createStyles((theme: MantineTheme) => ({
  footer: {
    width: "100%",
    height: 100,
    borderTop: "1px solid #eaeaea",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}))

export default function Footer() {
  const { classes } = useStyles()
  return (
    <footer className={classes.footer}>
      <a
        href="https://github.com/NoahVandy"
        target="_blank"
        rel="noopener noreferrer"
      >
        All Rights Reserved | Noah Vandy
      </a>
    </footer>
  )
}
