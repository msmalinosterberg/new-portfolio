import { Col, Row } from "antd/lib/grid";
import { Component, CSSProperties } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { educationList } from "./EducationList"

import "typeface-roboto";



interface State {
    education?: any;
}
interface Props extends RouteComponentProps {
    id: number
}

class EducationDetails extends Component<Props, State> {

    state: State = {
        education: {}

    }


    componentDidMount() {
        const educationId = Number((this.props.match.params as any).id)
        const education = educationList.find((p: { id: number; }) => p.id === educationId);
        this.setState({ education: education })
    }
    navigateBack = () => this.props.history.goBack();

    render() {
        return (

            <Row style={detailContainer}>
                <Col lg={{ span: 24 }} style={columnStyle}>

                    <h5 style={titleStyle}>{this.state.education.title}</h5>
                    <p style={secondStyle}>{this.state.education.description} </p>

                    <button style={buttonStyle} onClick={this.navigateBack}>Back</button>
                </Col>
            </Row>
        );
    }
}

export default withRouter(EducationDetails as any);

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
}

const titleStyle: CSSProperties = {
    fontSize: '2rem',
    marginTop: -10,

};

const buttonStyle: CSSProperties = {
    marginTop: '1rem',
    width: '8rem',
    marginBottom: '6rem',
    border: 'none',
    background: '#FFC300',


}

const secondStyle: CSSProperties = {
    fontSize: '1.1rem',
    fontFamily: 'roboto'

}



