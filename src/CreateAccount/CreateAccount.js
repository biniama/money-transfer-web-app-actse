import React, {useState, useEffect} from 'react';
//import TextField from '@material-ui/core/TextField';
//import Button from '@material-ui/core/Button';

// preferred approach
import {TextField, Button} from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles';

import axios from 'axios';

const useStyles = makeStyles(() => ({
    textField: {
        margin: 20
    },
    button: {
        margin: 25
    }
}));

const CreateAccount = () => {

    const classes = useStyles();

    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('01/01/1990');
    const [pin, setPin] = useState();
    const [confirmPin, setConfirmPin] = useState();

    const [isSubmitClicked, setIsSubmitClicked] = useState(false);

    useEffect(() => {

        if (isSubmitClicked === true) {
            if (pin === confirmPin) {
                // axios.post("http://localhost:8080/api/account/create",
                axios.post("https://money-transfer-api-actse.herokuapp.com/api/account/create",
                    {
                        "firstName": firstName,
                        "middleName": middleName,
                        "lastName": lastName,
                        "phoneNumber": phoneNumber,
                        "email": email,
                        "pin": pin,
                        "dateOfBirth": dateOfBirth
                    }
                )
                    .then((response) => {
                            console.log(response.data);
                            alert("Account is created with id: " + response.data.id);
                        }
                    )
                    .catch((error) => {
                        console.log(error);
                        //alert(error.error);
                    })
                setIsSubmitClicked(false);
            } else {
                alert("Pin and confirmed pin are not the same!");
                setIsSubmitClicked(false);
            }
        }
    }, [firstName, middleName, lastName, phoneNumber, email, pin, confirmPin, dateOfBirth, isSubmitClicked]);

    return (
        <form>
            <TextField
                type={"text"}
                autoFocus={true}
                className={classes.textField}
                label={"First Name"}
                placeholder={"First Name"}
                variant={"outlined"}
                value={firstName}
                onChange={(event) =>
                    setFirstName(event.target.value)}
            />

            <TextField
                type={"text"}
                className={classes.textField}
                label={"Middle Name"}
                placeholder={"Middle Name"}
                variant={"outlined"}
                value={middleName}
                onChange={(event) =>
                    setMiddleName(event.target.value)}
            />

            <TextField
                type={"text"}
                className={classes.textField}
                label={"Last Name"}
                placeholder={"Last Name"}
                variant={"outlined"}
                value={lastName}
                onChange={(event) =>
                    setLastName(event.target.value)}
            />

            <TextField
                type={"tel"}
                className={classes.textField}
                label={"Phone Number"}
                placeholder={"Phone Number"}
                variant={"outlined"}
                value={phoneNumber}
                onChange={(event) =>
                    setPhoneNumber(event.target.value)}
            />

            <TextField
                type={"email"}
                className={classes.textField}
                label={"Email"}
                placeholder={"Email"}
                variant={"outlined"}
                value={email}
                onChange={(event) =>
                    setEmail(event.target.value)}
            />

            <TextField
                type={"date"}
                className={classes.textField}
                //label={"Date of Birth"}
                placeholder={"Date of Birth"}
                variant={"outlined"}
                value={dateOfBirth}
                onChange={(event) =>
                    setDateOfBirth(event.target.value)}
            />

            <TextField
                type={"number"}
                className={classes.textField}
                label={"Pin"}
                placeholder={"Pin"}
                variant={"outlined"}
                value={pin}
                onChange={(event) =>
                    setPin(event.target.value)}
            />

            <TextField
                type={"number"}
                className={classes.textField}
                label={"Confirm Pin"}
                placeholder={"Confirm Pin"}
                variant={"outlined"}
                value={confirmPin}
                onChange={(event) =>
                    setConfirmPin(event.target.value)}
            />

            <Button
                className={classes.button}
                variant={"contained"}
                color={"Primary"}
                onClick={() => setIsSubmitClicked(true)}
            >
                Create Account
            </Button>
        </form>
    );
}

export default CreateAccount;
