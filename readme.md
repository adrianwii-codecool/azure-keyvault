## CREATE KEY VAULT ON AZURE

Create KeyVault, add secret variables, and change the name in .env file.

## BEFORE START

Before you run the program, login to Azure Service from Azure CLI with below command:
`az login`;

Also remeber to install dependencies `npm install`.

## ADD ACCESS POLICY TO THE LOGGED USER

`az keyvault set-policy --name [KEY_VAULT_NAME] --object-id [USER_OBJECT_ID] --secret-permissions delete get list set purge`

You can retrieve user object id with below command:

`az ad user list`

and read the "objectId" property.

## RUN PROGRAM

Type `node index.js` in terminal to run the program.

## MORE

You can read more about how to delete, set, read keys from KeyVault here: 
https://docs.microsoft.com/en-us/azure/key-vault/secrets/quick-create-node


Feel free to learn some examples from [keynote](keynote/keyVault.pdf).

