import { Route, Switch } from "react-router-dom";
import Education from "./Education";
import EducationDetails from "./EducationDetails";
import Home from "./Home";
import Navbar from "./Navbar";
import PageAnimation from "./PageAnimation";
import SchoolWorkDetails from "./SchoolWorkDetails";
import WorkCard from "./Work";

export default function MasterView() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path='/portfolio/:id' component={SchoolWorkDetails}>
                </Route>
                <Route path='/portfolio'>
                    <PageAnimation>
                        <WorkCard />
                    </PageAnimation>
                </Route>
                <Route path='/education/:id' component={EducationDetails}>
                </Route>
                <Route path='/education'> <Education /> </Route>

                <Route exact path='/' component={Home} />
            </Switch>
        </>
    );
}