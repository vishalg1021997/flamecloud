import React from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AddBoxIcon from '@mui/icons-material/AddBox';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import Menu_Button from './Menu_Button';
import Options_Button from './Options_Button';

const Custom_Accordion = () => {
  const [expanded, setExpanded] = React.useState(false)
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <div>
      <Accordion
        elevation={0}
        expanded={expanded === 'panel1'}
        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}
        sx={{ marginBottom: '10px' }}>
        <AccordionSummary
          aria-controls='panel1-content'
          id='panel1-header'
          sx={{ backgroundColor: '#e0dede', border: '0', borderRadius: '10px', height: '20px' }}
          expandIcon={<ExpandMoreIcon />}>
          <div
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
            <div
              style={{ display: 'flex' }}>
              <ViewCompactIcon sx={{ rotate: '90deg', marginRight: '10px' }} />
              <Typography sx={{ fontWeight: 'bold' }} >Marketing</Typography>
            </div>
            <Menu_Button />

          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Options_Button />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        elevation={0}
        expanded={expanded === 'panel2'}
        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}
        sx={{ marginBottom: '10px' }}>
        <AccordionSummary
          aria-controls='panel2-content'
          id='panel2-header'
          sx={{ backgroundColor: '#e0dede', border: '0', borderRadius: '10px', height: '20px' }}
          expandIcon={<ExpandMoreIcon />}>
          <div
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
            <div
              style={{ display: 'flex' }}>
              <ViewCompactIcon sx={{ rotate: '90deg', marginRight: '10px' }} />
              <Typography sx={{ fontWeight: 'bold' }} >Sales</Typography>
            </div>
            <Menu_Button />

          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Options_Button />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        elevation={0}
        expanded={expanded === 'panel3'}
        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}
        sx={{ marginBottom: '10px' }}>
        <AccordionSummary
          aria-controls='panel3-content'
          id='panel3-header'
          sx={{ backgroundColor: '#e0dede', border: '0', borderRadius: '10px', height: '20px' }}
          expandIcon={<ExpandMoreIcon />}>
            <div
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
            <div
              style={{ display: 'flex' }}>
              <ViewCompactIcon sx={{ rotate: '90deg', marginRight: '10px' }} />
              <Typography sx={{ fontWeight: 'bold' }} >Design</Typography>
            </div>
            <Menu_Button />

          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Options_Button />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Custom_Accordion