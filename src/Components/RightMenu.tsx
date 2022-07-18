import { Menu } from "antd";
import { Link } from "react-router-dom";

const RightMenu = () => {
    return (
        <Menu>
            < Menu>
                <Menu.Item key="1"><Link to='/'>HOME</Link></Menu.Item>
                <Menu.Item key="2"><Link to='/education'>EDUCATION</Link></Menu.Item>
                <Menu.Item key="3"><Link to='/portfolio'>PROJECTS</Link></Menu.Item>
            </Menu >

        </Menu>
    );
};

export default RightMenu;