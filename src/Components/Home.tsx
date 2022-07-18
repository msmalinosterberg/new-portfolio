import Col from "antd/lib/grid/col";
import Row from "antd/lib/grid/row";
import Layout from "antd/lib/layout";
import { CSSProperties } from "react";
import { Image } from 'antd';
import { GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";
import { Divider } from 'antd';
import { SlidingFromLeftAnimation } from "./PageAnimation";



const { Content } = Layout;

function Home() {
    return (
        <Layout style={layoutContainer}>
            <Content>
                <Row style={detailContainer}>

                    <Col lg={{ span: 12 }} style={columnStyle}>
                        <div className="home">
                            <SlidingFromLeftAnimation>
                                <h1 className="slidingText" style={{ fontSize: '3.5rem', marginRight: '3rem' }}>
                                    Hello there, I'm Malin
                                </h1>
                            </SlidingFromLeftAnimation>
                        </div>
                        <p style={pStyle}>
                            I'm a front end developer with a background in marketing and communication. I love solving problems, coming up with creative solutions and make them come to life.

                            <br />
                            <br />

                            <b> I'm currently looking for a job in the area of Gothenburg or Stockholm.
                                <br />
                                I'm open for working remote as well.</b>  </p>
                        <Divider plain> Let's keep in touch</Divider>
                        <div style={{ fontSize: '2.3rem', display: 'flex', justifyContent: 'space-around', marginTop: '1rem', marginRight: '5rem' }}>
                            <a href="https://github.com/msmalinosterberg/" style={{ color: 'black' }}>
                                <GithubOutlined />
                            </a>
                            <a href="https://www.linkedin.com/in/malin-osterberg/" style={{ color: 'black' }}>
                                <LinkedinOutlined />
                            </a>
                            <a href="mailto:msmalinosterberg@gmail.com" style={{ color: 'black' }}> <MailOutlined />  </a>

                        </div>
                    </Col>


                    <Col lg={{ span: 12 }}>
                        <Image
                            width={350}
                            style={imageStyle}
                            src="https://user-images.githubusercontent.com/73331860/112337361-222d4880-8cbe-11eb-84a6-0e47cc562162.png"
                        />


                    </Col>
                </Row>
            </Content>
        </Layout >
    )
}



const layoutContainer: CSSProperties = {
    background: 'white',
    color: 'black',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'roboto'

}

const imageStyle: CSSProperties = {
    borderRadius: '3.8rem',


}

const detailContainer: CSSProperties = {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    margin: 'auto',
    fontFamily: 'roboto',

}

const columnStyle: CSSProperties = {
    fontFamily: 'roboto',
    marginTop: '7rem',
    marginBottom: '6rem',
}

const pStyle: CSSProperties = {
    fontSize: '16px',
    justifyContent: 'center',
    alignContent: 'center'
}

export default Home; 