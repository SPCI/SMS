/**
 * Created by musbell on 12/2/16.
 */
import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RegisterStudent from '../registerStudent/registerStudent'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import TextFieldExampleSimple from '../seachBox/searchBox'
import {Link} from 'react-router'

export default class ToolbarExamplesSimple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1,
        };
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                    <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                        <MenuItem value={1} primaryText={<span><i className="material-icons" style={{fontSize:30,paddingRight: 3,verticalAlign: 'middle'}}>group</i>Students profile</span>} containerElement={<Link to="/info/profile"/>}/>
                        <MenuItem value={2} primaryText={<span><i className="material-icons" style={{fontSize:30,paddingRight: 3,verticalAlign: 'middle'}}>people_outline</i>Students Next of Kin</span>} containerElement={<Link to="/info/nextofkin"/>}/>
                        <MenuItem value={3} primaryText={<span><i className="material-icons" style={{fontSize:30,paddingRight: 3,verticalAlign: 'middle'}}>monetization_on</i>Students payment detail</span>} containerElement={<Link to="/info/payments"/>}/>
                        <MenuItem value={4} primaryText={<span><i className="material-icons" style={{fontSize:30,paddingRight: 3,verticalAlign: 'middle'}}>equalizer</i>Students grade</span>} containerElement={<Link to="/info/grades"/>}/>
                        <MenuItem value={5} primaryText={<span><i className="material-icons" style={{fontSize:30,paddingRight: 3,verticalAlign: 'middle'}}>book</i>Students result</span>} containerElement={<Link to="/info/results"/>}/>
                    </DropDownMenu>
                </ToolbarGroup>
                <ToolbarGroup>
                    <TextFieldExampleSimple/>
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarTitle text="The clear ultimate in practical computing..." />
                    <FontIcon className="muidocs-icon-custom-sort" />
                    <ToolbarSeparator />
                        <RegisterStudent/>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}
