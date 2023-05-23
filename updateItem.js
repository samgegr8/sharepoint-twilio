/*const axios = require("axios");
const { getAuth } = require("node-sp-auth");

const siteUrl = "https://cloudwavedev.sharepoint.com/sites/TwilioIntegration"; // Replace with your SharePoint site URL
const listName = "SMSList"; // Replace with the name of your SharePoint list
const itemId = "SamratSMS"; // Replace with the ID of the item you want to update
const clientId = "cdff1002-d5be-442d-b6ae-bbd942c867dc"; // Replace with the Azure AD App client ID
const clientSecret = "b1781892-dc79-48e6-81e0-829db41997df"; // Replace with the Azure AD App client secret

const updateItem = async () => {
  try {
    // Authenticate with SharePoint using OAuth
    const authOptions = {
      siteUrl: siteUrl,
      clientId: clientId,
      clientSecret: clientSecret,
    };
    console.log("authoptions :: ", authOptions);
    const { headers } = await getAuth(authOptions);

    // Update item
    const updateResponse = await axios.post(
      `${siteUrl}/_api/web/lists/getbytitle('${listName}')/items('${itemId}')`,
      {
        __metadata: { type: "SP.Data.SMSList" }, // Replace <ListName> with your list name
        Title: "Updated Title", // Replace with the field you want to update and its new value
        // Add more fields as needed
      },
      {
        headers: {
          "If-Match": "*",
          "X-HTTP-Method": "MERGE",
          Accept: "application/json;odata=verbose",
          "Content-Type": "application/json;odata=verbose",
        },
      }
    );

    console.log("Item updated successfully:", updateResponse.data.d);
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      console.error("Error updating item:", error.response.data.error);
    } else {
      console.error("Error updating item:", error);
    }
  }
};

updateItem();*/

/*const axios = require("axios");
const qs = require("qs");

const tenantId = "2c89afa4-050e-4ce8-99ef-99eef6756b96"; // Replace with your Azure AD tenant ID
const clientId = "82f98f73-3693-43f4-962b-815aaea51bcb"; // Replace with your Azure AD App client ID
const clientSecret = "4C38Q~.-hwEICD9mgImmw4xEwu1MTrLZt8vdda6Q"; // Replace with your Azure AD App client secret

const getToken = async () => {
  try {
    const tokenEndpoint = `https://login.microsoftonline.com/2c89afa4-050e-4ce8-99ef-99eef6756b96/oauth2/v2.0/token`;
    const formData = qs.stringify({
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
      scope: "https://graph.microsoft.com/.default",
    });
    const tokenResponse = await axios.post(tokenEndpoint, formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const accessToken = tokenResponse.data.access_token;
    console.log("Access Token:", accessToken);
  } catch (error) {
    console.error(
      "Error getting access token:",
      error.response.data.error_description
    );
  }
};

const siteId = "TwilioIntegration"; // Replace with the ID of your SharePoint site
const listId = "SMSList"; // Replace with the ID of your SharePoint list
const itemId = "SamratSMS"; // Replace with the ID of the item you want to update
//const accessToken = getToken(); // Replace with a valid access token for Microsoft Graph API

const updateListItem = async () => {
  const accessToken = await getToken(); // Replace with a valid access token for Microsoft Graph API
  try {
    const updateData = {
      fields: {
        Title: "Updated Title", // Replace with the field you want to update and its new value
        // Add more fields as needed
      },
    };

    const updateResponse = await axios.patch(
      `https://graph.microsoft.com/v1.0/sites/${siteId}/lists/${listId}/items/${itemId}`,
      updateData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Item updated successfully:", updateResponse.data);
  } catch (error) {
    console.error("Error updating item:", error.response.data.error);
  }
};

updateListItem();*/

/*const { ClientSecretCredential } = require("@azure/identity");
const { Client } = require("@microsoft/microsoft-graph-client");

const siteId = "b2d743ba-307f-47f1-b7b9-2d9079852c05"; // Replace with the ID of your SharePoint site
const listId = "SMSList"; // Replace with the ID of your SharePoint list
const itemId = "SamratSMS"; // Replace with the ID of the item you want to update

const tenantId = "2c89afa4-050e-4ce8-99ef-99eef6756b96"; // Replace with your Azure AD tenant ID
const clientId = "82f98f73-3693-43f4-962b-815aaea51bcb"; // Replace with your Azure AD App client ID
const clientSecret = "4C38Q~.-hwEICD9mgImmw4xEwu1MTrLZt8vdda6Q"; // Replace with your Azure AD App client secret

const updateListItem = async () => {
  try {
    const credential = new ClientSecretCredential(
      tenantId,
      clientId,
      clientSecret
    );
    const client = Client.initWithMiddleware({
      authProvider: {
        getAccessToken: async (scopes) => {
          const token = await credential.getToken(
            "https://graph.microsoft.com/.default"
          );
          return token.token;
        },
      },
    });

    // Update SharePoint list item
    const updateData = {
      fields: {
        Title: "Updated Title",
      },
    };

    const response = await client
      .api(`/sites/${siteId}/lists/${listId}/items/${itemId}`)
      .patch(updateData);

    console.log("Item updated successfully:", response);
  } catch (error) {
    console.error("Error updating item:", error);
  }
};
updateListItem();*/

const { ClientSecretCredential } = require("@azure/identity");
const { Client } = require("@microsoft/microsoft-graph-client");

const tenantId = "2c89afa4-050e-4ce8-99ef-99eef6756b96"; // Replace with your Azure AD tenant ID
const clientId = "82f98f73-3693-43f4-962b-815aaea51bcb"; // Replace with your Azure AD App client ID
const clientSecret = "4C38Q~.-hwEICD9mgImmw4xEwu1MTrLZt8vdda6Q"; // Replace with your Azure AD App client secret

const siteName = "TwilioIntegration";
const companyName = "cloudwavedev";
const listName = "SMSList";
const itemName = "SamratSMS";

const updateListItem = async () => {
  try {
    const credential = new ClientSecretCredential(
      tenantId,
      clientId,
      clientSecret
    );
    const client = Client.initWithMiddleware({
      authProvider: {
        getAccessToken: async (scopes) => {
          const token = await credential.getToken(
            "https://graph.microsoft.com/.default"
          );
          return token.token;
        },
      },
    });

    // Find the list by its name
    const siteResponse = await client
      .api(`/sites/${companyName}.sharepoint.com:/sites/${siteName}`)
      .get();
    const listsResponse = await client
      .api(`/sites/${siteResponse.id}/lists`)
      .get();
    const list = listsResponse.value.find((l) => l.displayName === listName);
    console.log("list ::", list);
    if (!list) {
      throw new Error(`List '${listName}' not found.`);
    }
    const listId = list.id;

    // Find the item by its name
    const itemsResponse = await client
      .api(`/sites/${siteResponse.id}/lists/${listId}/items`)
      /* .header("Prefer", "HonorNonIndexedQueriesWarningMayFailRandomly")
      .filter(`fields/Title eq '${itemName}'`)*/
      .select("*")
      .get();
    console.log("itemsResponse ::", itemsResponse);
    if (!itemsResponse || itemsResponse.value.length === 0) {
      throw new Error(`Item '${itemName}' not found.`);
    }
    const itemId = itemsResponse.value[1].id;

    // Update SharePoint list item
    const updateData = {
      fields: {
        SMSResponse: "SMS Failed",
      },
    };

    const response = await client
      .api(`/sites/${siteResponse.id}/lists/${listId}/items/${itemId}`)
      .patch(updateData);

    console.log("Item updated successfully:", response);
  } catch (error) {
    console.error("Error updating item:", error);
  }
};

updateListItem();
