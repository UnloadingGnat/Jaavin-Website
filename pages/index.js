import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import JSConfetti from "js-confetti";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  let serverconf = null;
  if (typeof window !== "undefined") {
    // browser code
    document.getElementById("html").style.overflow = "hidden";
    document.getElementById("body").style.overflow = "scroll";

    const jsConfetti = new JSConfetti();
    setTimeout(() => {
      jsConfetti.addConfetti({ emojis: ["👋"], confettiNumber: 4 });
    }, 500);

    serverconf = jsConfetti;
  }

  return (
    <>
      <Head>
        <title>Jaavin&apos;s Website</title>
        <meta name="description" content="Jaavin's Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.header}>
            Hello
            <span
              className={styles.wave}
              onClick={() =>
                serverconf.addConfetti({
                  emojis: ["👋"],
                  confettiNumber: 20,
                })
              }
              style={{ cursor: "pointer" }}
            >
              👋
            </span>
            , I&apos;m Jaavin.
          </div>
          <div className={styles.headerinfo}>
            I like solving complex problems and nothing can stop me. I am a
            first-year engineering student at McMaster University interested in
            blockchain, ai, robotics, and rockets!{" "}
            <a className={styles.linkres} href="JaavinMohanakumarResume.pdf">
              [Resume]
            </a>
          </div>
          <div className={styles.images}>
            <div className={styles.gallery}>
              <img
                className={styles.imagedrag}
                src="jaavin.png"
                alt="me"
                onClick={() =>
                  serverconf.addConfetti({
                    emojis: ["👨‍💻"],
                    confettiNumber: 20,
                  })
                }
                style={{ cursor: "pointer" }}
              />
              <div className={styles.subtitle}>Me :)</div>
            </div>
            <div className={styles.gallery2}>
              <img
                className={styles.imagedrag}
                src="1325.jpg"
                alt="Team 1325 2022 Robot Overtime"
                onClick={() =>
                  serverconf.addConfetti({
                    emojis: ["🤖"],
                    confettiNumber: 20,
                  })
                }
                style={{ cursor: "pointer" }}
              />
              <div className={styles.subtitle2}>
                1325 at 2022 FIRST Ontario Provincial Championship
              </div>
            </div>
            <div className={styles.gallery3}>
              <img
                className={styles.imagedrag}
                src="macrocket.png"
                alt="Marauder 1"
                onClick={() =>
                  serverconf.addConfetti({
                    emojis: ["🚀"],
                    confettiNumber: 20,
                  })
                }
                style={{ cursor: "pointer" }}
              />
              <div className={styles.subtitle2}>
                Marauder 1 at Launch Canada
              </div>
            </div>
          </div>
          <div className={styles.bio}>
            <div className={styles.biotitle}>What I&apos;m Doing Now</div>
            <div className={styles.biocontent}>
              I am currently a Project Lead for the{" "}
              <a className={styles.link} href="https://www.mcmasterai.com">
                McMaster AI Society
              </a>
              . Founder and President of the{" "}
              <a className={styles.link} href="https://www.macblockchain.ca/">
                McMaster Blockchain Club
              </a>
              . A member of the{" "}
              <a
                className={styles.link}
                href="https://www.eng.mcmaster.ca/programs/engineering-i/#tab-content-our-team"
              >
                Engineering 1 Operating Committee
              </a>
              . The Assistant Project Manager for the{" "}
              <a className={styles.link} href="https://www.macrocketry.ca">
                McMaster Rocketry Team
              </a>
              . And pursuing an engineering degree in my spare time.
            </div>
            <div className={styles.whitespace}></div>
          </div>
        </div>

        <div className={styles.grid}>
          <Link
            href="/projects"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>Projects</h2>
          </Link>

          <a href="#/" className={styles.cardactive} rel="noopener noreferrer">
            <h2 className={inter.className}>About</h2>
          </a>

          <Link
            href="/contact"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>Contact</h2>
          </Link>
        </div>
      </main>
    </>
  );
}
