export const data =[
    {
    "name": "firstName",
    "type": "text",
    "label": "First Name",
    "validator": {
    "required": true
    },
    "initialValue": ""
    },
    {
    "name": "lastName",
    "type": "text",
    "label": "Last Name",
    "validator": {
    "required": true
    },
    "initialValue": ""
    },
    {
    "name": "email",
    "type": "email",
    "label": "Email Address",
    "validator": {
    "required": true,
    "email": true
    },
    "initialValue": ""
    },
    {
    "name": "password",
    "type": "password",
    "label": "Password",
    "validator": {
    "required": true,
    "minLength": 6
    },
    "initialValue": ""
    },
    {
    "name": "confirmPassword",
    "type": "password",
    "label": "Confirm Password",
    "validator": {
    "required": true,
    "minLength": 6
    },
    "initialValue": ""
    }
    ]