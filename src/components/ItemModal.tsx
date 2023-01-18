import React from "react";
import { FetchedData } from "../interfaces";
import { productDescriptionModal } from "../stringResources";
import { Paper, Modal, Box, TableContainer, Table, TableBody, TableRow, TableCell, TableHead } from "@mui/material";
import { modalStyle, tableCellHeaderStyle } from "../styles/styles";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    dataForModal?: FetchedData
}


const ItemModal: React.FC<ModalProps> = (props) => {

    if (!props.isOpen) return null

    const tableRowModal = (dataForModal: FetchedData) => (
        <TableRow sx={{background: dataForModal.color}}>
            <TableCell align="center">{dataForModal.id}</TableCell>
            <TableCell align="center">{dataForModal.name}</TableCell>
            <TableCell align="center">{dataForModal.year}</TableCell>
            <TableCell align="center">{dataForModal.color}</TableCell>
            <TableCell align="center">{dataForModal.pantone_value}</TableCell>
        </TableRow>
    )

    return (
        <Modal
            open={props.isOpen}
            onClose={props.onClose}
            aria-labelledby="modal-table">
            <Box sx={modalStyle}>
                <TableContainer component={Paper}>
                <Table aria-label='modal-table'>
                    <TableHead>
                        <TableRow>
                            {productDescriptionModal.map((desc, key) =>
                                <TableCell align="center" sx= {tableCellHeaderStyle} key={desc}>{desc}</TableCell>
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.dataForModal ? tableRowModal(props.dataForModal) : null}
                    </TableBody>
                </Table>
                </TableContainer>
            </Box>
        </Modal>
    // sx={{ mt: 2 }}
    )
}

export  default ItemModal;