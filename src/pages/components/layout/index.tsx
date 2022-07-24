import Header from "./components/Header"
import Footer from "./components/Footer"

import { createStyles, MantineTheme } from "@mantine/core"

type Props = {
  children: JSX.Element
}

const useStyles = createStyles((theme: MantineTheme) => ({
  container: {
    height: "max-content",
    width: "100vw",
  },
}))

export default function Layout({ children }: Props) {
  const { classes } = useStyles()

  return (
    <>
      <Header />
      <div className={classes.container}>{children}</div>
      <Footer />
    </>
  )
}
