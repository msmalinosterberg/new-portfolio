import { Card, List } from "antd";
import { Component, CSSProperties } from "react";
import Col from "antd/lib/grid/col";
import Row from "antd/lib/grid/row";
import { withRouter } from "react-router-dom";
import { educationList } from "./EducationList";

const { Meta } = Card;
class EducationCard extends Component {


  render() {
    return (
      <Row style={cardContainer}>
        <Col span={12} style={columnStyle}>
          <List

            grid={{
              gutter: 25,
              xs: 1,
              sm: 1,
              md: 1,
              lg: 1,
              xl: 1,
              xxl: 1,
            }}
            dataSource={educationList}
            renderItem={item => (

              <List.Item>

                {/* <Link to={'/portfolio/' + item.id}> */}
                <Card
                  hoverable
                  style={{
                    width: 'auto',
                    height: 'auto',

                  }}
                >

                  <Meta title={item.title} description={item.description} />
                  <span> {item.date}</span>
                </Card>
                {/* </Link> */}
              </List.Item>
            )}

          />

        </Col>
      </Row >
    )
  }
}

export default withRouter(EducationCard as any);

const cardContainer: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const columnStyle: CSSProperties = {


  marginTop: '3rem',
  // marginBottom: '3rem',


}





















// const { Content } = Layout;
// function TimeLine() {
//   return (
//     <Layout>
//       <Content>
//         <Row>
//           <Col lg={{ span: 24 }}>

//             <h1 style={{ fontSize: "2rem", fontFamily: 'roboto' }}> EDUCATION</h1>
//             <Timeline style={timeLineStyle}>
//               <Timeline.Item color="#FFC300" style={{ fontSize: "18px", fontFamily: 'roboto' }}>
//                 {" "}
//                 2020-2022 Front end developer Medieinstitutet <br />
//                 Lästa kurser: HTML, CSS 20-yhp. Grundkurs JavaScript 60yhp.
//                 Projektarbete med agila metoder 15yhp. JavaScript fördjupningskurs
//                 40yhp. Dynamisk webbutveckling 45yhp (pågår){" "}
//               </Timeline.Item>

//               <Timeline.Item color="#FFC300" style={{ fontSize: "18px", fontFamily: 'roboto' }}>
//                 2019 - Distanskurs i copywriting Forsbergs <br />
//                 Identifiera tydliga målgrupper och anpassa budskapet och
//                 innehållet till dem. <br />
//                 Öva på att tänka strategiskt, kreativt och konceptuellt och skapa
//                 budskap utifrån mina insikter. Jag skrev för sociala medier, print
//                 och i brevform.{" "}
//               </Timeline.Item>
//               <Timeline.Item style={{ fontSize: "18px", fontFamily: 'roboto' }}>
//                 {" "}
//                 2014-2016 - Webbkommunikatör Nordic Business Institute <br />
//                 Utbildningen behandlade allt från skrivande till strategisk
//                 kommunikation och har gett mig kompetens inom kommunikation,
//                 marknadsföring, sociala medier, digital produktion, SEO och
//                 journalistiskt skrivande. <br />
//                 Vi arbetade i olika CMS (Wordpress, Drupal) program (t ex Adobe
//                 Premiere, Photoshop, Google Analytics m.m.) samt med dem största
//                 vedertagna sociala kanalerna.
//               </Timeline.Item>
//               <Timeline.Item style={{ fontSize: "18px", fontFamily: 'roboto' }}>
//                 2008-2013 Fil.kand examen i Socialantropologi - Göteborgs
//                 Universitet <br />
//                 Socialantroplogi 90hp, Humanekologi 60hp, Globala
//                 utvecklingsstudier 30hp
//               </Timeline.Item>

//               <Timeline.Item style={{ fontSize: "18px", fontFamily: 'roboto' }}>
//                 {" "}
//                 2011 - Intensivkurs i projektledning - Upp!Göteborg / Club Global{" "}
//                 <br />
//                 Intensivkurs i projektledning med fokus på starta eget och
//                 ledarskap. Kursen gav mig kunskaper inom projektledning, ekonomi
//                 och budget samt ledarskap.
//               </Timeline.Item>
//             </Timeline>

//           </Col>
//         </Row>
//       </Content>
//     </Layout>
//   );
// }

// const layoutStyle: CSSProperties = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   height: "100vh",
//   margin: "auto",
//   fontFamily: 'roboto',

// };

// const timeLineStyle: CSSProperties = {
//   justifyContent: "center",
//   alignItems: "center",
//   display: 'flex',


// }

// export default TimeLine;
