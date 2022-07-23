import Header from "./components/Header"
import Footer from "./components/Footer"

import { Container, createStyles, MantineTheme } from "@mantine/core"

type Props = {
  children: JSX.Element
}

const useStyles = createStyles((theme: MantineTheme) => ({
  container: {
    height: "100%",
  },
}))

export default function Layout({ children }: Props) {
  const { classes } = useStyles()

  return (
    <>
      <Header />
      <Container className={classes.container}>{children}</Container>
      <Footer />
    </>
  )
}
