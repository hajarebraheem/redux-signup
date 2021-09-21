import React from 'react'
import { Snackbar, Button, IconButton } from '@material-ui/core'
import CancelIcon from '@material-ui/icons/Cancel';

export default function Alert(props) {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        props.setOpen(false);
    }

    return (
        <>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                open={props.open}
                autoHideDuration={3000}
                style={{ "width": "450px" }}
                onClose={handleClose}
                message={props.message}
                action={
                    <React.Fragment>
                        <Button color="secondary" size="small" onClick={handleClose}>
                        </Button>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CancelIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
        </>
    )
}
