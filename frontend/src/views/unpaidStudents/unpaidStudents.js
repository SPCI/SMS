/**
 * Created by musbell on 12/18/16.
 */
/**
 * Created by musbell on 12/3/16.
 */
import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Progress from '../progress/progress'



const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
    >
        <MoreVertIcon color={grey400}/>
    </IconButton>
);


class UnpaidStudents extends Component{
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
            <div className="sideNav">
                <div>
                    <List>
                        <Subheader><i className="material-icons" style={{paddingRight: 3,verticalAlign: 'middle'}}>group_add</i>Recent added students</Subheader>
                        <div>
                            {this.props.data.allProgramme.edges.map((student) => {
                                return(
                                    <div>
                                        <Divider inset={true} />
                                        <ListItem
                                            leftAvatar={<Avatar src="images/ok-128.jpg" />}
                                            primaryText={student.node.student.regNum}
                                            secondaryText={
                                                <p>
                                                    <span style={{color: darkBlack}}>{student.node.student.student.surName} {student.node.student.student.firstName} </span><br />
                                                    {student.node.duration}
                                                </p>
                                            }
                                            secondaryTextLines={2}
                                            key={student.node.id}
                                        />
                                        <Divider inset={true} />
                                    </div>
                                )
                            })}
                        </div>
                    </List>
                </div>
            </div>
        )
    }
}

const RecentStudentQuery = gql` query RecentStudentQuery{
  allProgramme{
    edges{
      node{
        id
        program
        programCode
        duration
        student{
        regNum
          student{
            surName
            firstName
          }
        }
      }
    }
  }
}
`

const StudentWithData = graphql(RecentStudentQuery)(UnpaidStudents );
export default StudentWithData


