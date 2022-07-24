import { createStyles, Group, MantineTheme, Text } from "@mantine/core"

import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

import {
  BrandGithub,
  BrandLinkedin,
  Mail,
  BrandChrome,
} from "tabler-icons-react"

const useStyles = createStyles((theme: MantineTheme) => ({
  crewImg: {
    borderRadius: "50%",
    objectFit: "cover",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    width: 210,
    textAlign: "center",
    marginBottom: 25,
  },
  social: {
    cursor: "pointer",
  },
}))

type props = {
  imgSrc: string | StaticImageData
  name: string
  desc: string
  socialLinks: socialLinks
}

type socialLinks = {
  github: string
  linkedIn: string
  email: string
  website?: string
}

export default function CrewInfo({ imgSrc, name, desc, socialLinks }: props) {
  const router = useRouter()

  const { classes } = useStyles()

  return (
    <Group className={classes.container}>
      <Image
        src={imgSrc}
        className={classes.crewImg}
        height={200}
        width={200}
      />
      <Text>{name}</Text>
      <Text>{desc}</Text>
      <Group>
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
          <BrandGithub className={classes.social} />
        </a>
        <a
          href={socialLinks.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BrandLinkedin className={classes.social} />
        </a>
        <a href={`mailto:${socialLinks.email}`}>
          <Mail className={classes.social} />
        </a>
        {socialLinks.website && (
          <a
            href={socialLinks.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BrandChrome className={classes.social} />
          </a>
        )}
      </Group>
    </Group>
  )
}
