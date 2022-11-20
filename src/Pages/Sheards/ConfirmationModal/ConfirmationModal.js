import React from 'react';

const ConfirmationModal = ({title, message,closeModal,successAction,modalData}) => {
    return (
        <div>
            
            <input type="checkbox" id="confirmation-delete" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="py-4">{message}</p>
                <div className="modal-action">
                    <label onClick={closeModal} htmlFor="confirmation-delete" className="btn">Cancel</label>
                    <label onClick={()=>successAction(modalData)} htmlFor="confirmation-delete" className="btn btn-error">Confirm</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;