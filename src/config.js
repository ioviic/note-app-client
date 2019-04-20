const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1egqmz7s8jjkh"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://gc9j7aqlkk.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_zA2v4S7cK",
    APP_CLIENT_ID: "7njo0ui4agudv6r72hd6p0ldf5",
    IDENTITY_POOL_ID: "us-east-1:d900ac93-c2b1-4679-af7f-e1a3ef317c18"
  },
  STRIPE_KEY: "pk_test_cXkn61HWTdl8Dq1UnGPgcm6e00TNRgYulT"
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-qg9shtat1c13"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://svwz2oi553.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_ekM00THqX",
    APP_CLIENT_ID: "6oqf4rqk1je05ovq1ucdvg6g11",
    IDENTITY_POOL_ID: "us-east-1:9e957840-6987-4418-bb4b-0f0bfd7f6abe"
  },
  STRIPE_KEY: "pk_test_cXkn61HWTdl8Dq1UnGPgcm6e00TNRgYulT"
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
