import React from 'react'
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './success-modal.css'

const SuccessModal = (props) => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#ecd6fc'
        },
      };
  return (
    <div >
        <Modal  isOpen={props.modalOpen} style={customStyles}>
            <div className='modal-inner'>
                <label>Expence added successfully</label>
                <i class="fa-solid fa-circle-check success-icon" ></i>
                <Link to="/">
                <div className='take-home-button'><i class="fa-sharp fa-solid fa-house"></i>Home</div>
                {/* <img src={require('../assets/images/checked.png').default } alt="Expence added" className='added-image'/> */}
                </Link>
            </div>
        </Modal>
      
    </div>
  )
}

export default SuccessModal
