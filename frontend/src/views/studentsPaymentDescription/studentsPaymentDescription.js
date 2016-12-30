import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
    from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

const styles = {
    propContainer: {
        width: 200,
        overflow: 'hidden',
        margin: '20px auto 0',
    },
    propToggleHeader: {
        margin: '20px auto 10px',
    },
};
const paperStyle = {
    height: 100,
    width: 1260,
    margin: 10,
    padding: 20,
    textAlign: 'center',
    display: 'inline-block',
};

const tableData = [
    {
        name: 'John Smith',
        status: 'Employed',
        selected: true,
    },
    {
        name: 'Randal White',
        status: 'Unemployed',
    },
    {
        name: 'Stephanie Sanders',
        status: 'Employed',
        selected: true,
    },
    {
        name: 'Steve Brown',
        status: 'Employed',
    },
    {
        name: 'Joyce Whitten',
        status: 'Employed',
    },
    {
        name: 'Samuel Roberts',
        status: 'Employed',
    },
    {
        name: 'Adam Moore',
        status: 'Employed',
    },
];

export default class  extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: true,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            showCheckboxes: true,
        };
    }

    handleToggle = (event, toggled) => {
        this.setState({
            [event.target.name]: toggled,
        });
    };

    handleChange = (event) => {
        this.setState({height: event.target.value});
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="box">
                            <Paper style={paperStyle} zDepth={1}>
                                <TextField
                                    hintText="NDF/PAD/13/009"
                                    floatingLabelText={<span><i className="material-icons" style={{paddingRight: 3,verticalAlign: 'middle'}}>search</i>Search records to filter</span>}
                                    fullWidth={true}
                                />
                            </Paper>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-11">
                        <div className="box">
                            <Table
                                height={this.state.height}
                                fixedHeader={this.state.fixedHeader}
                                fixedFooter={this.state.fixedFooter}
                                selectable={this.state.selectable}
                                multiSelectable={this.state.multiSelectable}
                            >
                                <TableHeader
                                    displaySelectAll={this.state.showCheckboxes}
                                    adjustForCheckbox={this.state.showCheckboxes}
                                    enableSelectAll={this.state.enableSelectAll}
                                >
                                    <TableRow>
                                        <TableHeaderColumn colSpan="4" tooltip="Super Header" style={{textAlign: 'right'}}>
                                            <i className="material-icons" style={{fontSize:30,paddingRight: 3,verticalAlign: 'middle'}}>note</i>
                                            Students' Payment Details
                                        </TableHeaderColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableHeaderColumn tooltip="Full name"> <i className="material-icons" style={{fontSize:30,paddingRight: 3,verticalAlign: 'middle'}}>perm_identity</i>Full Name</TableHeaderColumn>
                                        <TableHeaderColumn tooltip="Registration number"> <i className="material-icons" style={{fontSize:30,paddingRight: 3,verticalAlign: 'middle'}}>edit</i>Reg Num</TableHeaderColumn>
                                        <TableHeaderColumn tooltip="Student GP"> <i className="material-icons" style={{fontSize:30,paddingRight: 3,verticalAlign: 'middle'}}>linear_scale</i>GP</TableHeaderColumn>
                                        <TableHeaderColumn tooltip="Student CGPA"> <i className="material-icons" style={{fontSize:30,paddingRight: 3,verticalAlign: 'middle'}}>insert_chart</i>CGPA</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody
                                    displayRowCheckbox={this.state.showCheckboxes}
                                    deselectOnClickaway={this.state.deselectOnClickaway}
                                    showRowHover={this.state.showRowHover}
                                    stripedRows={this.state.stripedRows}
                                >
                                    {tableData.map( (row, index) => (
                                        <TableRow key={index} selected={row.selected}>
                                            <TableRowColumn>{index}</TableRowColumn>
                                            <TableRowColumn>{row.name}</TableRowColumn>
                                            <TableRowColumn>{row.status}</TableRowColumn>
                                             <TableRowColumn>{row.status}</TableRowColumn>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter
                                    adjustForCheckbox={this.state.showCheckboxes}
                                >
                                    <TableRow>
                                        <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>

                                        </TableRowColumn>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}