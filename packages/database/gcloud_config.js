module.exports = JSON.parse(Buffer.from(process.env.GCLOUD_SERVICE_ACCOUNT, 'base64').toString());
