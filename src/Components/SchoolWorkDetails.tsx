import { Col, Row } from "antd/lib/grid";
import { Component, CSSProperties } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { workList } from "./SchoolWork";
import { Image, Tag } from 'antd';
import "typeface-roboto";



interface State {
    work?: any;
}
interface Props extends RouteComponentProps {
    id: number
}

class SchoolWorkDetails extends Component<Props, State> {

    state: State = {
        work: {}

    }


    componentDidMount() {
        const workId = Number((this.props.match.params as any).id)
        const work = workList.find((p) => p.id === workId);
        this.setState({ work: work })
    }
    navigateBack = () => this.props.history.goBack();

    render() {
        return (

            <Row style={detailContainer}>

                <Col lg={{ span: 10 }} style={columnStyle}>
                    <h1 style={{ color: 'black', fontFamily: 'roboto' }}>Skolprojekt </h1>
                    <Image
                        width={450}
                        src={this.state.work.imageUrl}
                    />
                </Col>

                <Col lg={{ span: 10 }} style={columnStyle}>

                    <h3 style={titleStyle}>{this.state.work.title}</h3>
                    <h5 style={secondStyle}>{this.state.work.description} </h5>
                    <a href={this.state.work.link}>
                        <h5 style={secondStyle}>Länk till projektet</h5> </a>
                    <a href={this.state.work.githubRepo}>
                        <h5 style={secondStyle}> Github repo</h5> </a>
                    <h5 style={thirdStyle}> Arbetade med: <Tag color="blue">{this.state.work.tags}</Tag></h5>

                    <button style={buttonStyle} onClick={this.navigateBack}>Tillbaka</button>

                </Col>
            </Row>
        );
    }
}

export default withRouter(SchoolWorkDetails as any);

const detailContainer: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '80%',
    margin: 'auto',
    fontFamily: 'roboto'

}

const columnStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10rem',
    marginBottom: '5rem',
    fontFamily: 'roboto'

}

const titleStyle: CSSProperties = {
    fontSize: '2rem',
    fontFamily: 'roboto'

};

const buttonStyle: CSSProperties = {
    marginTop: '1rem',
    width: '8rem',
    marginBottom: '6rem',
    border: 'none',
    background: '#FFC300',
    fontFamily: 'roboto',

}

const secondStyle: CSSProperties = {
    fontSize: '1.1rem',
    fontFamily: 'roboto'

}

const thirdStyle: CSSProperties = {
    fontSize: '0.8rem',
    fontFamily: 'roboto'

}

