import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
    from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { propType } from 'graphql-anywhere'
import gql from 'graphql-tag'
import Progress from '../progress/progress'
import { graphql } from 'react-apollo'

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

class NextOfKin  extends React.Component {
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

    static propTypes = {
        data: React.PropTypes.shape({
            loading: React.PropTypes.bool,
            error: React.PropTypes.object,
        }).isRequired,
    };
    render(){
        if (this.props.data.loading) {
            return (<Progress/>)
        }

        if (this.props.data.error) {
            console.log(this.props.data.error);
            return (<div>An unexpexted error occured</div>)
        }
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
                                        <TableHeaderColumn colSpan="5" tooltip="Super Header" style={{textAlign: 'right'}}>
                                            <i className="material-icons" style={{fontSize:30,paddingRight: 3,verticalAlign: 'middle'}}>note</i>
                                            Students' Next of Kin
                                        </TableHeaderColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableHeaderColumn tooltip="Full name"> <i className="material-icons" style={{fontSize:30,paddingRight: 3,verticalAlign: 'middle'}}>perm_identity</i>Referer</TableHeaderColumn>
                                        <TableHeaderColumn tooltip="Registration number"> <i className="material-icons" style={{fontSize:30,paddingRight: 3,verticalAlign: 'middle'}}>edit</i>Surname</TableHeaderColumn>
                                        <TableHeaderColumn tooltip="Student GP"> <i className="material-icons" style={{fontSize:30,paddingRight: 3,verticalAlign: 'middle'}}>linear_scale</i>Other name</TableHeaderColumn>
                                        <TableHeaderColumn tooltip="Student CGPA"> <i className="material-icons" style={{fontSize:30,paddingRight: 3,verticalAlign: 'middle'}}>insert_chart</i>Relationship</TableHeaderColumn>
                                        <TableHeaderColumn tooltip="Student CGPA"> <i className="material-icons" style={{fontSize:30,paddingRight: 3,verticalAlign: 'middle'}}>insert_chart</i>Phone number</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody
                                    displayRowCheckbox={this.state.showCheckboxes}
                                    deselectOnClickaway={this.state.deselectOnClickaway}
                                    showRowHover={this.state.showRowHover}
                                    stripedRows={this.state.stripedRows}
                                >
                                    {this.props.data.allRegistered.edges.map( (nextOfKin, index) => (
                                        <TableRow key={nextOfKin.node.id}>
                                            <TableRowColumn>{nextOfKin.node.student.nextofkin.referrer.surName} {nextOfKin.node.student.nextofkin.referrer.firstName}</TableRowColumn>
                                            <TableRowColumn>{nextOfKin.node.student.nextofkin.surName}</TableRowColumn>
                                            <TableRowColumn>{nextOfKin.node.student.nextofkin.otherName}</TableRowColumn>
                                            <TableRowColumn>{nextOfKin.node.student.nextofkin.relationship}</TableRowColumn>
                                            <TableRowColumn>{nextOfKin.node.student.nextofkin.telephone}</TableRowColumn>
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

const NextOfKinQuery = gql` query NextOfKinQuery{
  allRegistered{
    edges{
      node{
        id
        regNum
        student{
          nextofkin{
            surName
            otherName
            relationship
            telephone
            referrer{
              surName
              firstName
            }
          }
        }
      }
    }
  }
}
`

const StudentWithData = graphql(NextOfKinQuery)(NextOfKin);
export default StudentWithData


