import React from 'react';
import { connect } from 'react-redux';
import { modelClose } from '../../actions/modal_actions';
import LoginFormContainer from '../log_in_form_container';
import SignUpFormContainer from '../sign_up_form_container';

function Modal({ modal, modelClose }) {
    if (!modal){
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
          component = < LoginFormContainer />
          break;
        case 'signup':
          component = < SignUpFormContainer />
          break;
        default:
            return null;
    }

    return (
      <div className='modal-background' onClick={modelClose}>
          <div className="modal-child" onClick={e => e.stopPropagation()}>
              { component }
          </div>
      </div>
    );
}

const mSTP = state => ({
    modal: state.ui.modal
});

const mDTP = dispatch => ({
    modelClose: ()=> dispatch(modelClose())
});

export default connect(mSTP, mDTP)(Modal);