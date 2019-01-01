import React from 'react';
import CreateNotebookFormContainer from './create_notebook_container';
import EditNotebookFormContainer from './edit_notebook_container';
import MoveNoteContainer from '../notes/textbox/move_modal_container';


function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'createNb':
      component = <CreateNotebookFormContainer />;
      break;
    case 'editNb':
      component = <EditNotebookFormContainer />;
      break;
    case 'moveNote':
      component = <MoveNoteContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}


export default Modal;
