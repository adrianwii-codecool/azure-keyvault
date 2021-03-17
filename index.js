require('dotenv').config();
const { DefaultAzureCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");

async function main() {

    const keyVaultName = process.env["KEY_VAULT_NAME"];
    const KVUri = "https://" + keyVaultName + ".vault.azure.net";

    const credential = new DefaultAzureCredential();
    const client = new SecretClient(KVUri, credential);

    const secretName = "secret2";

    console.log("Retrieving your secret from " + keyVaultName + ".");

    const retrievedSecret = await client.getSecret(secretName);

    console.log("Your secret is '" + retrievedSecret.value + "'.");
}

main().then(() => console.log('Done')).catch((ex) => console.log(ex.message));