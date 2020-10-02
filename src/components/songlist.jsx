import React ,{Component} from 'react';
import {connect} from 'react-redux';
import selectedSong from '../actions/index';


class Songlist extends Component{
constructor(props)
{
    super(props)
    console.log(props)
}
    render(){

return(
    <React.Fragment>
        <div className="row">
            {
                this.props.songs.map(song=>{
                    return (
                        <div className="col-md-8" key={song.title}>
                        <div className="card text-left" style={{marginBottom:'10px',cursor:'pointer'}}
                        onClick={()=>this.props.selectedSong(song)}
                         >
                            <div className="card-body">
                                <div className="card-title">
                                  <h4>{song.title}</h4>  
                                  <p className="card-text">{song.duration}</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    )
                })
            }

        </div>
    </React.Fragment>
) 
    }
}

const mapStateToProps=(state)=>{

    console.log(state);
    return {songs:state.songs};
}




export default connect(mapStateToProps,{selectedSong})(Songlist);