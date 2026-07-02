import React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import BoardMemberCard from "../components/board/board-member-card"
import BlogPosts from "../components/blog/blog-posts"
import ClubabendPosts from "../components/clubabend-post/clubabend-posts"
import LolaMap from "../components/lola-map/osm-map"
import IconedItemList from "../components/iconed-item-list/iconed-item-list"
import InfoBox from "../components/info-box/info-box"
import TextCarousel from "../components/text-carousell/text-carousell"
import ContactForm from "../components/contact-form/contact-form"

import Reactmarkdown from "react-markdown"
import gfm from 'remark-gfm'

import { Container, Row, Col } from "react-bootstrap"
import { graphql } from "gatsby"
import { GatsbyImage, StaticImage, getImage  } from "gatsby-plugin-image"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faExclamation,
  faComments,
  faThumbsUp,
  faRocket,
  faLightbulb,
  faGem,
  faHandsHelping,
  faGlassCheers,
} from "@fortawesome/free-solid-svg-icons"

import "./index.scss"

import ResponsivePlayer from "../components/responsive-player/responsive-player"

const IndexPage = ({ data }) => {
  const { allStrapiVorstandsmitglieds,
    allStrapiBlogbeitrag,
    allStrapiClubabends,
    allLocalContentWasWirSoMachen,
    strapiZehnjahresfeier,
    site } = data

  return (
    <Layout>
      <Seo title="Home" keywords="rethorik,hamburg,bergedorf,toastmasters,reden"/>
      <section>
        <ResponsivePlayer />
      </section>

      { /*<section id="10-jahresfeier-teaser-image" className="section-b">
        <Container>
          <Row>
            <Col md={12}>
              <GatsbyImage alt='10-Jahresfeier Teaser' image={getImage(strapiZehnjahresfeier.TeaserBild.localFile)} />
            </Col>
          </Row>
        </Container>
      </section>

      <section id="zehnjahresfeier_teaser" className="section-b">
        <Container>
        <Row>
            <Col md={12}>
              <h2 className="section-title">Komm' und feier mit uns unser 10-Jähriges Jubiläum!</h2>
              <Reactmarkdown remarkPlugins={[gfm]}>{strapiZehnjahresfeier.Teaser}</Reactmarkdown>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
            <p>Klicke <a href="/zehnjahresfeier">hier für die Details.</a></p>
            </Col>
          </Row>
        </Container>
  </section> */}

      <section id="was-du-willst" className="section-a">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="column-title">
                Du bist bei uns richtig, wenn du...
              </h2>
              <IconedItemList
                itemList={{
                  items: [
                    {
                      icon: faExclamation,
                      text:
                        `souveräner vor Menschen präsentieren, eine Rede halten oder
                  einen Toast aussprechen willst. Was hierbei wichtig ist und
                  wie du es schaffst, lernst du an unseren Clubabenden.`,
                    },
                    {
                      icon: faComments,
                      text:
                        `lernen möchtest zu moderieren oder einen Workshop abzuhalten.
                  Irgendwann möchtest du vielleicht nicht nur an einem unserer
                  Workshops teilnehmen, sondern dich selber als Kursleiter ausprobieren.`,
                    },
                    {
                      icon: faThumbsUp,
                      text:
                        `überzeugend vortragen willst. Die Argumente sind dabei nicht alles.
                         Worauf es wirklich ankommt, lernst du bei uns.`,
                    },
                    {
                      icon: faRocket,
                      text:
                        `diese Ziele schnell erreichen möchtest. Wenn du lieber
                  gemächlich vorankommen möchtest, ist das genauso okay. Das
                  entscheidest nur du.`,
                    },
                    {
                      icon: faLightbulb,
                      text:
                        `gerne mit Menschen zusammen bist, die sich gegenseitig
                  inspirieren – die sich auch weiterentwickeln wollen – die aus
                  Fehlern lernen und sich gegenseitig beim Lernen unterstützen.`,
                    },
                  ],
                }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section id="wer-wir-sind" className="section-b">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="section-title">Wer wir sind und was wir machen</h2>
              <p>
                Wir sind Menschen jeden Alters – vom Schüler bis zum Rentner.
                Wir kommen aus allen Gesellschaftsschichten. Wir lieben die
                Rhetorik und das Kribbeln im Bauch, wenn wir auf der Rednerbühne
                stehen. Wir genießen die Momente des Alltags, in denen wir
                merken, dass sich dadurch unser Leben verändert.
              </p>
            </Col>
            </Row>
        </Container>
      </section>

      <section id="was-wir-machen" className="section-a">
          <TextCarousel
                items={allLocalContentWasWirSoMachen.edges.map(e => { return {
                  title: e.node.title,
                  text: e.node.text,
                  image: getImage(e.node.image.childImageSharp)
                }})}
              />
      </section>


      <section className="section-b">
        <Container>
          <h2 className="section-title">
            Drei Dinge, die uns besonders machen:
          </h2>
          <Row>
            <Col md={4}>
              <InfoBox
                title="Wertschätzung"
                text="wird bei uns groß geschrieben. Das schafft eine Atmosphäre, in\
              der das Lernen Spaß macht."
                icon={faGem}
              ></InfoBox>
            </Col>
            <Col md={4}>
              <InfoBox
                title="Wir helfen uns gegenseitig"
                text="als Mentor oder in der Teamarbeit.
              Wir geben uns Rückmeldungen über das, was uns begeistert und wo
              wir Wachstum sehen."
                icon={faHandsHelping}
              ></InfoBox>
            </Col>
            <Col md={4}>
              <InfoBox
                title="Geselligkeit"
                text="Wir treffen uns auch gerne mal abseits des
              Clubabends in geselliger Runde und haben zusammen Spaß."
                icon={faGlassCheers}
              ></InfoBox>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="kontakt" className="section-a">
        <h2 className="section-title">Besuche uns</h2>
        <Container>
          <Row>
            <Col md={6}>
              <p>
                Infos zu unserem <a href="/naechster-termin">nächsten Treffen findest Du hinter diesem Link</a>. Wir treffen uns im
              </p>
              <p>
                <a href="https://www.lola-hh.de/">LOLA Kulturzentrum</a>
                <br />
                Lohbrügger Landstr. 8<br />
                21031 Hamburg
                </p>
              <p>
                Parkplätze gibt es (fast immer, falls kein Stadtfest ist) auf
                dem Lohbrügger Markt. Von dort gehst du ca. 2 Min. in die
                Lohbrügger Landstraße hoch bis zur LOLA.
              </p>
              <p>
                An der Lohbrügger Landstraße selbst sind meist alle Parkplätze
                belegt. Alternativ: In den Seitenstraßen kannst du mehr Glück
                haben.
              </p>
              <p>Hier
                <a aria-label="fb-home" href="https://www.facebook.com/Rednerclub-Bergedorf-174688412674869" className="inline-logo" rel="noreferrer" target="_blank"><StaticImage width={30} height={30} src="../../static/images/facebook-ios-icon.jpg" alt="Facebook-Logo"/></a>
                und <a aria-label="ig-home" href="https://www.instagram.com/toastmasters_rednerclub/" className="inline-logo" rel="noreferrer" target="_blank"><StaticImage width={30} height={30} src="../../static/images/instagram_logo.webp" alt="Instagram"/></a>
                findest du unsere brandaktuellen Infos.</p>
            </Col>
            <Col md={6}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>

      <section id="maps">
        <LolaMap />
      </section>

      <section id="clubleben" className="section-a">
        <div className="large-container">
          <h2 className="section-title">Erfahre, was bei uns los war:</h2>
          <ClubabendPosts data={allStrapiClubabends}></ClubabendPosts>
        </div>
      </section>

      <section id="blog" className="section-a">
        <div className="large-container">
          <hr/>
          <h2 className="section-title">Rednerclub Bergedorfs Blog</h2>
          <BlogPosts data={allStrapiBlogbeitrag}></BlogPosts>
        </div>
      </section>

      <section className="section-b">
        <div className="large-container">
          <h2 className="section-title">Das RCB-Vorstandsteam</h2>
          <div className="board-members-wrapper">
            {allStrapiVorstandsmitglieds.edges.map(document => (
              <BoardMemberCard
                key={document.node.id}
                rolle={document.node.Rolle}
                avatar={document.node.avatar}
                name={document.node.name}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-a">
        <div className="container d-flex justify-content-center">
          <div>
            <a
              href="https://www.toastmasters.org"
              id="tmi-logo"
              style={{
                backgroundImage:
                  "url(images/logos/icon-TMI-LogoWebsite-small.png)",
              }}
            >
              Toastmasters International (tm)
            </a>
          </div>
        </div>
        <div className="container d-flex justify-content-center">
          <div>
            <a href="https://www.toastmasters.org/Find-a-Club/02933296-rednerclub-bergedorf">
              Toastmasters International Club-Nr. 2933296
            </a>
            {" · Area 2 · Division A · District 95"}
          </div>
        </div>
        <div className="container d-flex justify-content-center">
          <div>
            {`Seite zuletzt geändert: ${site.buildTimeZone}`}
          </div>
        </div>
      </section>
    </Layout>
  )
}

/*
 */

export default IndexPage

export const query = graphql`
  query IndexQuery {
    strapiZehnjahresfeier {
      Teaser
      TeaserBild {
        url
        localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 500,
                  blurredOptions: {width: 100},
                  placeholder: BLURRED,
#                  aspectRatio: 1.8,
                  layout: FULL_WIDTH,
                  transformOptions: {fit: CONTAIN},
                  formats: PNG,
                  backgroundColor: "#ffffff"
                  )
              }
            }
      }
    }
    allStrapiVorstandsmitglieds(sort: { fields: ord, order: ASC}) {
      edges {
        node {
          ord
          Rolle
          avatar {
            url
          }
          id
          name
        }
      }
    }
    allStrapiClubabends(sort: { fields: datum, order: DESC }) {
      pageInfo {
        perPage
      }
      edges {
        node {
          id
          inhalt
          beitragsbild {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 700,
                  blurredOptions: {width: 10},
                  placeholder: BLURRED,
                  aspectRatio: 1,
                  transformOptions: {cropFocus: CENTER},
                  layout: FULL_WIDTH,
                  formats: JPG,
                  backgroundColor: "#ffffff")
              }
            }
          }
          titel
          datum
        }
      }
    }
    allStrapiBlogbeitrag(sort: { fields: published_at, order: DESC }) {
      pageInfo {
        perPage
      }
      edges {
        node {
          id
          published_at
          Slug
          Keywords
          Titel
          Teaser
          Beitragsbild {
            url
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 500,
                  blurredOptions: {width: 100},
                  placeholder: BLURRED,
                  aspectRatio: 1.8,
                  layout: FULL_WIDTH,
                  transformOptions: {fit: CONTAIN, trim: 1.5},
                  formats: PNG,
                  backgroundColor: "#ffffff"
                  )
              }
            }
          }
        }
      }
    }
    allLocalContentWasWirSoMachen {
      edges {
        node {
          image {
            id
            childImageSharp {
              gatsbyImageData(
              width: 770
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              transformOptions: {fit: COVER}
              aspectRatio: 1.8
              )
            }
          }
          text
          title
        }
      }
    }
    site {
      buildTimeZone
    }
  }
`
