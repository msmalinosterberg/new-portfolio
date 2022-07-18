import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer, Layout } from 'antd';
import { CSSProperties, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';



const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  let { pathname: location } = useLocation();
  useEffect(() => {
    setVisible(false);
  }, [location]);


  return (
    <nav className="navbar">
      <Layout>
        <Layout.Header className="nav-header">
          <div className="logo">
            <h3 className="brand-font">
              MÖ
            </h3>
          </div>
          <div className="navbar-menu">
            <div className="leftMenu">
              <LeftMenu />
            </div>
            <Button className="menuButton" type="text" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
            <Drawer
              title={"Malin"}
              placement="right"
              closable={true}
              onClose={showDrawer}
              visible={visible}
              style={hamburgerMenuStyle}
            >
              <RightMenu />
            </Drawer>
          </div>
        </Layout.Header>
      </Layout>
    </nav>
  );
};

export default Navbar;

const hamburgerMenuStyle: CSSProperties = {
  zIndex: 99999,
}
