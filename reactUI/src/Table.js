import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

let id = 0;


const TableHeadElement = (props) => {
    const { titles } = props;

    return <TableHead>
        <TableRow>
            {
                // titles.map((title, idx) => 
                // <TableCell key={idx} align="right">{title}</TableCell>)
                titles.map((title, idx) => idx === 0 ?
						<TableCell key={idx} component="th" scope="row">{title}</TableCell> :
						<TableCell key={idx} align="left">{title}</TableCell> )
            }

        </TableRow>
    </TableHead>;
};

const TableRowElement = (props) => {
    const { row, attributes } = props;
    return (
        <TableRow key={row.id}>
            {
                attributes.map((attribute, idx) =>  idx === 0 ?
                            <TableCell key={idx} component="th" scope="row">{row[attribute]}</TableCell> :
//                            <TableCell key={idx} align="right">{row[attribute]}</TableCell>;
                            <TableCell key={idx} align="left">
                            {(attribute === "smallImageURL" || attribute === "largeImageURL") ? <img src={row[attribute]}
                            alt={row[attribute]}/> : row[attribute]}</TableCell>)
            }
        </TableRow>
    );
};


function SimpleTable(props) {
    const { classes, titles, attributes, data } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHeadElement titles={titles} />
                <TableBody>
                    {data.map((row, idx) => (
						<TableRowElement key={idx} row={row} attributes={attributes}/>
					))}
                </TableBody>
            </Table>
        </Paper>
    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);