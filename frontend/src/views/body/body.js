/**
 * Created by musbell on 12/3/16.
 */
import React from 'react'
import SideBar from '../sideNav/sideNav'


class Body extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="
                col-lg-2">
                    <div className="box">
                        <SideBar/>
                    </div>
                </div>
                <div className="
                col-lg-10">
                    <div className="box">
                        {this.props.children || <p>No pages to display</p>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Body

