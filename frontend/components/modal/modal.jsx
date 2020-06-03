import React from 'react';
import { connect } from 'react-redux';
import { modalClose } from '../../actions/modal_actions';
import LoginFormContainer from '../log_in_form_container';
import SignUpFormContainer from '../sign_up_form_container';

function Modal({ modal, modalClose }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
          component = < LoginFormContainer />;
          break;
        case 'signup':
          component = < SignUpFormContainer />;
          break;
        default:
            return null;
    }

    return (
      <div className='modal-background' onClick={modalClose}>
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
    modalClose: ()=> dispatch(modalClose())
});

export default connect(mSTP, mDTP)(Modal);