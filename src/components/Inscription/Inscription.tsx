/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { WithStyles, withStyles,Grid,Typography,Box,Container,Link,Checkbox,FormControlLabel,TextField,CssBaseline,Button, Avatar} from '@material-ui/core';
import {MuiPickersUtilsProvider,KeyboardTimePicker,KeyboardDatePicker,} from '@material-ui/pickers'
import styles, { Styles } from './styles';

//props
interface P {}

//state
interface S {}

export class Inscription extends React.PureComponent<P & WithStyles<Styles>>{
    Copyright = () => {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © DropBox '}{new Date().getFullYear()}
            </Typography>
        );
    }
    
    public static Display = withStyles(styles as any)(Inscription) as React.ComponentType<P>    //Methode de lecture
    render(){
        const { classes } = this.props;
        return(
            <Container className={classes.bg} component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Inscription
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="Prénom"
                        autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Nom"
                        name="lastName"
                        autoComplete="lname"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        name="username"
                        variant="outlined"
                        required
                        fullWidth
                        id="username"
                        label="Pseudo"
                        autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        name="civilite"
                        variant="outlined"
                        required
                        fullWidth
                        id="civilite"
                        label="Civilité"
                        autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        {/*<KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date picker inline"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />*/}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        variant="outlined"
                        fullWidth
                        id="portable"
                        label="Portable"
                        name="portable"
                        autoComplete="lportable"
                        />
                    </Grid>
                    </Grid>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    >
                    S'inscrire
                    </Button>
                    <Grid container justify="flex-end">
                    <Grid item>
                        <Link href="#" variant="body2">
                            Retour connexion ?
                        </Link>
                    </Grid>
                    </Grid>
                </form>
                </div>
                <Box mt={10}>
                    { this.Copyright }
                </Box>
            </Container>
        );
    }
}