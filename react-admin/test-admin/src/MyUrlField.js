import * as React from "react";
import { useRecordContext } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
        color:'red'
    },
    icon: {
        width: '0.6em',
        height: '0.6em',
        paddingLeft: 4,
        boxShadow: '5px 5px 5px gray'
    },
});

const MyUrlField = ({ source }) => {
    const record = useRecordContext();
    const classes = useStyles();

    return record ? (
        <a href={'http://' + record[source]} className={classes.link}>
            {record[source]}
            <LaunchIcon className={classes.icon}/>
        </a>
    ) : null;
}

export default MyUrlField;