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
                                    floatingLabelText="Search records to filter"
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
                                        <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
                                            Students' Grade
                                        </TableHeaderColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                                        <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                                        <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
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