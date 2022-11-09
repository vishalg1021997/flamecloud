import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import SubMenu_Button from './SubMenu_Button';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius:'10px',
//   '&:not(:last-child)': {
//     borderBottom: '1px',
//   },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<AddBoxOutlinedIcon sx={{ fontSize: 'rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  position:'relative',
  left:'-27px',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
    
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '0px solid rgba(0, 0, 0, .125)',
}));

export default function Options_Button() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  
  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
        // expanded={expanded === 'panel1'}
        // onChange={handleChange(index + 1)}
        sx={{marginBottom: '10px' }}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header"
          expandIcon={
            expanded === 'panel1' ? <IndeterminateCheckBoxOutlinedIcon /> : 
                                                  <AddBoxOutlinedIcon />
          }
          sx={{ backgroundColor: 'transparent', 
          border: '0px solid #e0dede', 
          borderRadius: '10px', 
          height: '20px',
         }}
        >
          <Typography sx={{marginTop:'10px'}}>Wordpress</Typography>
          <div style={{textAlign:'right',width:'100%'}}><SubMenu_Button /></div>
        </AccordionSummary>
        
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
        // expanded={expanded === 'panel1'}
        // onChange={handleChange(index + 1)}
        sx={{marginBottom: '10px' }}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel2d-header"
          expandIcon={
            expanded === 'panel2' ? <IndeterminateCheckBoxOutlinedIcon /> : 
                                                  <AddBoxOutlinedIcon />
          }
          sx={{ backgroundColor: 'transparent', border: '0px solid #e0dede', borderRadius: '10px', height: '20px' }}
        >
          <Typography sx={{marginTop:'10px'}}>Google Drive</Typography>
          <div style={{textAlign:'right',width:'91.2%'}}><SubMenu_Button /></div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            pointer
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
