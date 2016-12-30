/**
 * Created by musbell on 12/25/16.
 */
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from "./app/app"
import Body from "./body/body"
import ProfileContainer from './profileContainer/profileContainer'
import StudentsProfile from './studentsProfile/studentsProfile'
import StudentsGrade from './studentsGrade/studentsGrade'
import StudentsNextOfKin from './studentsNextOfKin/studentsNextOfKin'
import StudentsPaymentDescription from './studentsPaymentDescription/studentsPaymentDescription'
import StudentsResult from './studentsResult/studentsResult'


export default  (<Route path='/' component={App}>
                    <Route path="/info" component={Body}>
                        <Route path="/info/profiles" component={StudentsProfile}/>
                        <Route path="/info/grades" component={StudentsGrade}/>
                        <Route path="/info/nextofkin" component={StudentsNextOfKin}/>
                        <Route path="/info/payments" component={StudentsPaymentDescription}/>
                        <Route path="/info/results" component={StudentsResult}/>
                        <Route path="/info/profile" component={ProfileContainer}/>
                    </Route>
                </Route>)