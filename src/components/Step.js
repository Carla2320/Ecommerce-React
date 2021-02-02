import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkout from './Checkout';
import Pago from './Pago';
import { Ticket } from './Ticket';
import { useHistory } from "react-router-dom";
import { useStateValue } from '../reducers/StateProvider';
import {UserContext} from "../hooks/UseContext";
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Tus productos', 'Verifica los datos de envio', 'El producto se enviara en las proximas horas'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Checkout />;
    case 1:
      return <Pago/>;
    case 2:

      return <Ticket />;
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const [{ basket }] = useStateValue();
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const history = useHistory();
  const [pago, setPago]=useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const carro=()=>{
    if (activeStep===0 && basket.length===0){
      
      return false 
    }else{
      return true
    }
    
  }

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <UserContext.Provider value={{
      pago, setPago
  }}>
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (history.push("/home")
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
               <Button variant="contained" disabled={(activeStep===0 && basket.length===0)&&(activeStep===1 && pago>0)}color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button> 
              {/* { (activeStep===0 && basket.length===0) && (
        // <Button className="btn btn-success" disabled = "false" onClick={handleNext}>
        //   Next
        // </Button>
        // )(activeStep===1 && pago>0 )&& (
        // <Button className="btn btn-warning" disable = "false" onClick={handleNext}>
        //   Borrar
        // </Button>
        )} */}
            </div>
          </div>
        )}
      </div>
    </div>
    </UserContext.Provider>
  );
}
