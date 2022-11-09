import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Custom_Accordion from './Custom_Accordion';
import New_Plan from './New_Plan';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Action_plans = () => {
    const [openNewPlan, setopenNewPlan] = React.useState(false);
    const handleopenNewPlan = () => setopenNewPlan(true);
    const handleCloseNewPlan = () => setopenNewPlan(false);
    return (
        <Box
            sx={{
                m: 10,
                width: '88%',
                boxSizing: 'border-box'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    marginBottom: '30px'
                }}
            >
                <Box>
                    <p>SOP</p>
                    <h1>Action Plans</h1>
                </Box>

                <Box>
                    <Button variant="outlined"
                        startIcon={<PeopleAltOutlinedIcon />}
                        sx={{
                            textTransform: 'none',
                            marginRight: '10px'
                        }}>
                        Manage Access
                    </Button>
                    <Button variant="contained"
                        startIcon={<AddBoxIcon />}
                        sx={{ textTransform: 'none' }}
                        onClick={handleopenNewPlan}
                    >
                        New Plan
                    </Button>
                </Box>
            </Box>

            <Custom_Accordion />
            <Modal
                open={openNewPlan}
                onClose={handleCloseNewPlan}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Plan Name
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.  facere!
                    </Typography>
                    <TextField id="outlined-basic" label="Name Your Plan" variant="outlined" sx={{ width: '400px', marginTop: '15px' }} />
                    <div
                        sx={{width:'400px',marginTop:'15px',justifyContent:'space-between'}}>
                    <Button color="error">Cancel</Button>
                    <Button variant="contained" color="success">
                        Create
                    </Button>
                    </div>
                </Box>
            </Modal>
        </Box>

    )
}

export default Action_plans