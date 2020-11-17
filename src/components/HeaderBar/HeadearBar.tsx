import * as React from 'react';
import { Grid, WithStyles, withStyles } from '@material-ui/core';
import styles, { Styles } from './styles';

interface User{
    name:string;
    age:number;
    belt:string;
}

//props
interface P {
    user: User
}

//state
interface S {

}

export class HeaderBar extends React.PureComponent<P & WithStyles<Styles>>{
    public static Display = withStyles(styles as any)(HeaderBar) as React.ComponentType<P>    //Methode de lecture
    render(){
        console.log('headerbar: ',this.props)
        const { classes } = this.props;
        return(
            <Grid container className={ classes.headerBar }>
                <Grid item>Logo</Grid>
                <Grid item>Menu</Grid>
                <Grid item>{this.props.user.name}-{this.props.user.age}-{this.props.user.belt}</Grid>
            </Grid>
        )
    }
}