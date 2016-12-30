import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {blue500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        return (
            <div>
                <IconButton onTouchTap={this.handleToggle} style={{color: blue500}}>
                    <i className="material-icons" style={{fontSize:30,verticalAlign: 'middle'}}>
                    menu</i>
                </IconButton>
                <Drawer
                    docked={false}
                    width={300}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <MenuItem onTouchTap={this.handleClose}>Admin Page</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Enquiries</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Facebook</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Shamlad site</MenuItem>
                </Drawer>
            </div>
        );
    }
}