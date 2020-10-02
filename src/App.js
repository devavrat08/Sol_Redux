import React ,{Component} from 'react';
import Songdetails from './components/songdetails';
import Songlist from './components/songlist';

class App extends Component{
    render(){
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                    <div className='col-md-8'>
                    <Songlist/>
                    </div>

                    <div className='col-md-4'>
                      <Songdetails/>  
                    </div>
                    </div>
                   

                </div>
               
            </React.Fragment>
        )
    }
}

export default App;