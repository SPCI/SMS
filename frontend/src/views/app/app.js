/**
 * Created by musbell on 12/18/16.
 */
import React from 'react'
import AppBarExampleIcon from '../navbar/navbar'
import ToolbarExamplesSimple from '../toolbar/toolbar'
import Body from '../body/body'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class App extends React.Component{
    render(){
        return (
            <MuiThemeProvider>
                <div>
                    <AppBarExampleIcon/>
                    <ToolbarExamplesSimple/>
                    {this.props.children || <h1>Welcome</h1>}
                </div>
            </MuiThemeProvider>
        )
    }
}


export default App



