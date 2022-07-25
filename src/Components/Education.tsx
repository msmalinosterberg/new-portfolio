import { Card, List } from "antd";
import { Component, CSSProperties } from "react";
import Col from "antd/lib/grid/col";
import Row from "antd/lib/grid/row";
import { Link, withRouter } from "react-router-dom";
import { educationList } from "./EducationList";

const { Meta } = Card;
class EducationCard extends Component {
    render() {
        return (
            <Row style={cardContainer}>
                <Col lg={{ span: 12 }} md={{ span: 24 }} sm={{ span: 24 }} style={columnStyle}>
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

                            <List.Item >

                                <Card size="small" title={item.title} extra={<Link to={'/education/' + item.id}>More</Link>} style={{ width: 'auto', height: 'auto' }}
                                    hoverable
                                >
                                    <Meta description={item.description} />
                                    <span> {item.date}</span>
                                </Card>

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
}
