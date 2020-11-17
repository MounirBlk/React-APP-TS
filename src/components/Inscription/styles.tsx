/* eslint-disable import/no-anonymous-default-export */
import { createStyles, Theme } from '@material-ui/core';//makeStyles

export type Styles = "paper" | "avatar" | "form" | "submit" | "bg";// add class create

export default (theme: Theme) => createStyles<Styles,{}>({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    bg: {
        backgroundColor: 'lightgray',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});