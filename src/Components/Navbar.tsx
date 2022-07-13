import { Col, Layout, Menu, Row } from 'antd';
import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  const { Header } = Layout;

  return (

    <Header style={layoutStyle}>
      <Row style={{ width: '100%' }}>
        {/*<Col span={8}>
           <Link to='/'><img src={} alt="logo" style={} /></Link>
          </Col>*/}
        <Col span={24}>
          <Menu mode="horizontal" style={menuStyle}>
            <Menu.Item key="1"><Link to='/' style={{ color: 'white' }}>HOME</Link></Menu.Item>
            <Menu.Item key="1"><Link to='/education' style={{ color: 'white' }}>EDUCATION</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/portfolio' style={{ color: 'white' }}>PROJECTS</Link></Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  );
}



const layoutStyle: CSSProperties = {
  width: '100%',
  background: '#FFC300',
  height: '6rem',
  textDecoration: 'none',
  zIndex: 100,
  display: 'flex',
  justifyContent: 'space-around',
  borderBottom: 'none',

}




const menuStyle: CSSProperties = {
  background: '#FFC300',
  color: 'white',
  marginTop: '1.2rem',
  fontSize: '1.5rem'
}

export default Navbar; 