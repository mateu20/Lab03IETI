import React from "react";
import { CardContent, CssBaseline, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import './CardTask.css';

export class CardTask extends React.Component {

    constructor(props) {
        super(props);
        this.state = { username: "", password: "" };
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Card className="margin" elevation={5}>
                        <CardContent>
                            <div className="gridCard">
                                <div>
                                    <Typography variant="h4">
                                        {this.props.info.description}
                                    </Typography>
                                </div>                                
                            </div>
                            <Typography variant="h6">
                                {this.props.info.status} - {new Date(this.props.info.dueDate).toDateString()}
                            </Typography>
                            <Typography variant="h6">
                                {this.props.info.responsible.name}
                            </Typography>
                        </CardContent>
                    </Card>
                </main>
            </React.Fragment>
        );
    }
}