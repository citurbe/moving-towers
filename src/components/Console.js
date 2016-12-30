import React from 'react';
import Chooser from './Chooser'
import Controls from './Controls'
import { setup } from '../actions/action.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Console extends React.Component {


  setStart(value){
    this.props.setup(value);
  }

  render() {
    return(
      <div>
        <Chooser setStart={this.setStart.bind(this)}/>
        <Controls />
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({setup: setup}, dispatch)
}

export default connect(null, mapDispatchToProps)(Console);
