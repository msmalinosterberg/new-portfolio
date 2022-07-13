import { Component, CSSProperties } from 'react';
import { Card, Col, List, Row } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { workList } from './SchoolWork';

const { Meta } = Card;
class WorkCard extends Component {


    render() {
        return (
            <Row style={cardContainer}>
                <Col span={24} style={columnStyle}>
                    <List
                        grid={{
                            gutter: 25,
                            xs: 1,
                            sm: 1,
                            md: 1,
                            lg: 3,
                            xl: 3,
                            xxl: 3,
                        }}
                        dataSource={workList}
                        renderItem={item => (
                            <List.Item>
                                <Link to={'/portfolio/' + item.id}>
                                    <Card
                                        hoverable
                                        style={{ width: 'auto', height: 400 }}
                                        cover={<img alt="" src={item.imageUrl} />}
                                    >
                                        <Meta title={item.title} description={item.tags} />

                                    </Card>

                                </Link>
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        )
    }
}

export default withRouter(WorkCard as any);

const cardContainer: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const columnStyle: CSSProperties = {
    display: 'flex',
    width: '80%',
}
