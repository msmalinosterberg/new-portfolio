import { Layout, Row, Col, Timeline } from "antd";
import { CSSProperties } from "react";

function TimeLine() {
  return (
    <Row>
      <Col span={24}>
        <Layout style={layoutStyle}>
          <h1 style={{ fontSize: "2rem",fontFamily: 'roboto' }}> UTBILDNING</h1>
          <Timeline mode="alternate">
            <Timeline.Item color="red" style={{ fontSize: "18px",fontFamily: 'roboto' }}>
              {" "}
              2020 - pågår (2022) Front end developer Medieinstitutet <br />
              Lästa kurser: HTML, CSS 20-yhp. Grundkurs JavaScript 60yhp.
              Projektarbete med agila metoder 15yhp. JavaScript fördjupningskurs
              40yhp. Dynamisk webbutveckling 45yhp (pågår){" "}
            </Timeline.Item>

            <Timeline.Item style={{ fontSize: "18px",fontFamily: 'roboto' }}>
              2019 - Distanskurs i copywriting Forsbergs <br />
              Identifiera tydliga målgrupper och anpassa budskapet och
              innehållet till dem. <br />
              Öva på att tänka strategiskt, kreativt och konceptuellt och skapa
              budskap utifrån mina insikter. Jag skrev för sociala medier, print
              och i brevform.{" "}
            </Timeline.Item>
            <Timeline.Item style={{ fontSize: "18px",fontFamily: 'roboto' }}>
              {" "}
              2014-2016 - Webbkommunikatör Nordic Business Institute <br />
              Utbildningen behandlade allt från skrivande till strategisk
              kommunikation och har gett mig kompetens inom kommunikation,
              marknadsföring, sociala medier, digital produktion, SEO och
              journalistiskt skrivande. <br />
              Vi arbetade i olika CMS (Wordpress, Drupal) program (t ex Adobe
              Premiere, Photoshop, Google Analytics m.m.) samt med dem största
              vedertagna sociala kanalerna.
            </Timeline.Item>
            <Timeline.Item style={{ fontSize: "18px",fontFamily: 'roboto' }}>
              2008-2013 Fil.kand examen i Socialantropologi - Göteborgs
              Universitet <br />
              Socialantroplogi 90hp, Humanekologi 60hp, Globala
              utvecklingsstudier 30hp
            </Timeline.Item>

            <Timeline.Item style={{ fontSize: "18px",fontFamily: 'roboto' }}>
              {" "}
              2011 - Intensivkurs i projektledning - Upp!Göteborg / Club Global{" "}
              <br />
              Intensivkurs i projektledning med fokus på starta eget och
              ledarskap. Kursen gav mig kunskaper inom projektledning, ekonomi
              och budget samt ledarskap.
            </Timeline.Item>
          </Timeline>
        </Layout>
      </Col>
    </Row>
  );
}

const layoutStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  margin: "auto",
  fontFamily: 'roboto'

};

export default TimeLine;
