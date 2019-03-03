module.exports = {
  type: "service_account",
  project_id: "sanguine-cloud",
  private_key_id: process.env.SANGU_GCLOUD_PRIVATE_KEY_ID,
  private_key: Buffer.from(process.env.SANGU_GCLOUD_PRIVATE_KEY, 'base64'),
  client_email: "datastore-user@sanguine-cloud.iam.gserviceaccount.com",
  client_id: "115199296874627602505",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/datastore-user%40sanguine-cloud.iam.gserviceaccount.com"
};
