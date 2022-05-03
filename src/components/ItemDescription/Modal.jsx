import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';

const Modal = ({handleClose,open}) => {
    
  return (
    <div>
     
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Warning"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please login to get access to the resource
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Link to='/login' className='home'><Button onClick={handleClose} autoFocus>
            Login
          </Button></Link>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Modal