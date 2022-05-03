import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import authStore from '../../store/authStore';
import { observer } from 'mobx-react-lite';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const ModalToken = observer(()=>{
    
    return (
      <div>
       
        <Dialog
          open={authStore.openTokenModal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Error"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {authStore.refreshTokenExpiredMessage}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Link to='/login' className='home'><Button onClick={()=>authStore.setOpenTokenModal(false)} autoFocus>
            Login
          </Button></Link>
          </DialogActions>
        </Dialog>
      </div>
    )
  })
  
  export default ModalToken