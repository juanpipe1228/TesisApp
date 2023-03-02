import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function Modal() {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Uso de la aplicación"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Esta aplicación tiene como proposito realizar un comparativo entre
            distintos micrófonos; en la pestaña de Características se puede
            elegir un máximo de 3 micrófonos para visualizar sus
            especificaciones y gráficas. En la pestaña de audios se puede elegir
            los distintos instrumentos grabados para reproducir los audios.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button class="button-alert" onClick={handleClose}>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
