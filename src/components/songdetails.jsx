import React from 'react';
import {connect} from 'react-redux';
const Songdetails=(props)=>{
    if(!props.fetchselectedSongData)
    {return null;}

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            {props.fetchselectedSongData.title}
                        </div>
                        <hr/>
                        <div>
                            {props.fetchselectedSongData.duration}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps=state=>{
  //  console.log()
    return {fetchselectedSongData:state.selectedSong}
}

export default connect(mapStateToProps)(Songdetails);