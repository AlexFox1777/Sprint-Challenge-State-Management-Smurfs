import React, {useState} from 'react'
import {connect} from "react-redux";
import {addSmurf} from "../../actions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Loader from 'react-loader-spinner';

const useStyles = makeStyles(() => ({
    button: {
        background: 'linear-gradient(45deg, #47e3aa 30%, #53bfff 90%)',
        border: 0,
        fontSize: 16,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 34,
        padding: '0 30px',

    },
    card: {
      height: '150px',
      display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

const ManageSmurfs = (props) => {
    const classes = useStyles();
    const [smurf, setSmurf] = useState({name: "", age: "", height: ""});
    const handleChange = event => {
        event.preventDefault();
        setSmurf({...smurf, [event.target.name]: event.target.value})
    };
    const handleSubmit = event => {
        event.preventDefault();
        if (smurf.name !== "" && smurf.age !== "" && smurf.height !== "") {
            props.addSmurf(smurf);
        }
    };
    return (
        <Grid container justify={"center"}>
            <Grid item xs={12} sm={6}>
                <Card className={classes.card}>
                    <form onSubmit={handleSubmit}>
                        <TextField onChange={handleChange} type="text" name="name" placeholder="Name.."/>
                        <TextField onChange={handleChange} type="text" name="age" placeholder="Age"/>
                        <TextField onChange={handleChange} name='height' placeholder='Height'/>

                        <Button className={classes.button} type="submit">
                            {props.addBtn ? (<Loader  type="Puff" color="white" height="15" width="100"/> )
                            : ('Add smurf')}
                        </Button>
                    </form>
                </Card>
            </Grid>
        </Grid>

    )
};

const mapPropsToState = state =>{
    return {
        addBtn: state.isLoading,
    }
};
export default connect(mapPropsToState, {addSmurf})(ManageSmurfs);