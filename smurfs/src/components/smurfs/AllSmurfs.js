import React from 'react'
import {connect} from "react-redux";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const AllSmurfs = props => {
    console.log('pop', props.smurfs);
    return (
        <div>
            <h1>Village</h1>
            <Grid container justify={"center"} spacing={2}>

                {props.smurfs.map(smurf =>
                    <Grid item sm={4} md={3}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="h2">Name: {smurf.name}</Typography>
                                <Typography variant="body2" component="p">Age: {smurf.age}</Typography>
                                <Typography variant="body2" component="p">Height: {smurf.height}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </div>
    )
};
const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
    }
};
export default connect(mapStateToProps, {})(AllSmurfs);