/**
 * Created by musbell on 12/25/16.
 */
import React from 'react'
import Profile from '../profile/profile'
import VerticalLinearStepper from '../stepper/stepper'


export default () => (
    <div className="row">
        <div className="col-lg-10" >
            <div className="box">
                <Profile/>
            </div>
        </div>
        <div className="col-lg-2" >
            <div className="box">
                <VerticalLinearStepper/>
            </div>
        </div>
    </div>
)
