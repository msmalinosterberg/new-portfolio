import { MailOutlined, PhoneOutlined, HomeOutlined} from '@ant-design/icons';
import { CSSProperties } from "react";
import { Row, Col, Layout } from "antd";

function Contact () {
    return (
        
    <Layout style={contentContainer}> 
    <Row>
      
      <Col span={8}> 
        <PhoneOutlined style={{fontSize: '3rem'}} /> &nbsp; <p style={{fontSize: '1.8rem'}}> +46 739 49 53 99  </p>
      </Col>
      <Col span={8}>
        <MailOutlined style={{fontSize: '3rem'}} />&nbsp; <p style={{fontSize: '1.8rem'}}>msmalinosterberg@gmail.com </p> 
      </Col>

      <Col span={8}> 
      <HomeOutlined style={{fontSize: '3rem'}} />&nbsp; <p style={{fontSize: '1.8rem'}}>Distansgatan 15, 42174 Västra Frölunda </p> 
      </Col>
    </Row>
    </Layout>

    )
}



const contentContainer: CSSProperties = {
    background: 'lightgrey',
    height: '100vh', 
    display: 'flex', 
    justifyContent: 'space-around',
    

    
    

}


export default Contact; 