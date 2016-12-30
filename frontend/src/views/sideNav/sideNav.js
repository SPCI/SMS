/**
 * Created by musbell on 12/3/16.
 */
import React from 'react'
import NewStudents from '../newStudents/newStudents'
import UnpaidStudents from '../unpaidStudents/unpaidStudents'


export default () => (
    <div>
        <div className="row">
            <div className="col-xs-12
                col-sm-8
                col-md-6
                col-lg-12">
                <div className="box">
                    <NewStudents/>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-12
                col-sm-8
                col-md-6
                col-lg-12">
                <div className="box">
                    {/*<UnpaidStudents/>*/}
                </div>
            </div>
        </div>
    </div>
)
