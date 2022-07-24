import { Group, createStyles, MantineTheme, Text } from "@mantine/core"

import Image from "next/image"
import { relative } from "node:path/win32"

import teamImg from "../../../public/team.jpg"
import noah from "../../../public/NoahPortrait.jpeg"
import ethan from "../../../public/EthanPortrait.jpg"
import isaac from "../../../public/IsaacPortrait.png"
import michael from "../../../public/MichaelPortrait.png"
import CrewInfo from "../../components/molecules/CrewInfo"

const useStyles = createStyles((theme: MantineTheme) => ({
  headerContainer: {
    height: 400,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    backgroundColor: "rgba(0,79,255)",
    width: "100%",
    paddingLeft: 200,
    color: "white",
    position: "absolute",
    zIndex: 1,
    top: 120,
  },
  meetTheCrew: {
    fontSize: 60,
    fontWeight: 1000,
  },
  contactUs: {
    width: 400,
  },
  imgContainer: {
    marginTop: 45,
    paddingLeft: 600,
  },
  crewImg: {
    borderRadius: "50%",
    objectFit: "cover",
  },
}))

export default function Contact() {
  const { classes } = useStyles()
  return (
    <>
      <div className={classes.imgContainer}>
        <Image
          src={teamImg}
          width={616}
          height={400}
          style={{
            position: "relative",
            zIndex: 1000,
          }}
        />
      </div>

      <div className={classes.headerContainer}>
        <Group className={classes.contactUs}>
          <Text className={classes.meetTheCrew}>Contact Us</Text>
          <Text size="lg">
            We'd love to hear from you! We are always up for a chat as a team,
            or feel free to reach out to one of us directly.
          </Text>
        </Group>
      </div>
      <Group
        style={{
          width: "80%",
          marginTop: 50,
        }}
        position="apart"
      >
        <CrewInfo
          imgSrc={noah}
          name="Noah Vandervelden"
          desc="Current software engineer at Cox Automotive"
          socialLinks={{
            github: "https://github.com/noahvandy",
            linkedIn: "https://www.linkedin.com/in/noahvandy/",
            email: "noah.vandy@gmail.com",
          }}
        />
        <CrewInfo
          imgSrc={isaac}
          name="Isaac Spiegel"
          desc="Current software engineer at Particle Space"
          socialLinks={{
            github: "https://github.com/spigelli",
            linkedIn: "https://www.linkedin.com/in/spigelli/",
            email: "Isaacspiegel@gmail.com",
          }}
        />
        <CrewInfo
          imgSrc={michael}
          name="Michael Ballos"
          desc="Current software engineer at Particle Space"
          socialLinks={{
            github: "https://github.com/michaelballos",
            linkedIn: "https://www.linkedin.com/in/michaelballos/",
            email: "ballos.Michael@gmail.com",
            website: "https://www.michaelballos.me/en/home",
          }}
        />
        <CrewInfo
          imgSrc={ethan}
          name="Ethan Brockway"
          desc="Recent graduate from University of Kansas' Coding Bootcamp."
          socialLinks={{
            github: "https://github.com/EthanBrockway",
            linkedIn: "https://www.linkedin.com/in/ethan-brockway/",
            email: "ebrockway01@gmail.com",
          }}
        />
      </Group>
    </>
  )
}
