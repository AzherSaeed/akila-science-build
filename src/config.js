const globalVars = {
  emails: {
    hello: 'hello@AkilaAnalytics.com',
    support: 'support@AkilaAnalytics.com',
    billing: 'billing@AkilaAnalytics.com',
    errors: 'errors@AkilaAnalytics.com',
    admin: 'admin@AkilaAnalytics.com',
    test: 'v7',
  },
  messages: {
    contactForm: {
      success:
        "Thank you for reaching out. We successfully received your message, and we'll follow up shortly.",
      error:
        /* eslint-disable-next-line no-multi-str */
        'There was an error submitting the message. You can contact us directly at hello@AkilaAnalytics.com.com.\
      Our engineers have been notified, and we will resolve this as quickly as possible.',
    },
  },
};

const local = {
  BASE_URL: 'http://localhost:3000',
  stripe: {
    STRIPE_API_KEY:
      'pk_test_51Kpd0iJKv6FdgRdllF56aaIl1ebM2ILDgVeeEmhAed8pjmuMb1LREacvja6KaO9fHznDx0jYuYiApInqCMGKYQk8002Zfx92sf',
    AWS_WEBHOOK_ENDPOINT: 'https://26n56xvff5.execute-api.us-east-1.amazonaws.com/auth',
    AWS_WEBHOOK_GENERATE_SECRET:
      'https://26n56xvff5.execute-api.us-east-1.amazonaws.com/generate-secret',
  },
  s3: {
    REGION: 'YOUR_DEV_S3_UPLOADS_BUCKET_REGION',
    BUCKET: 'YOUR_DEV_S3_UPLOADS_BUCKET_NAME',
  },
  apiGateway: {
    CONTACT: 'https://1ypzx9uwq7.execute-api.us-east-1.amazonaws.com/',
  },
  cognito: {
    REGION: 'YOUR_DEV_COGNITO_REGION',
    USER_POOL_ID: 'us-east-1_W8a7nvwWL',
    APP_CLIENT_ID: 'YOUR_DEV_COGNITO_APP_CLIENT_ID',
    IDENTITY_POOL_ID: 'YOUR_DEV_IDENTITY_POOL_ID',
  },
  login: {
    UserPoolId: 'us-east-1_W8a7nvwWL',
    ClientId: '3oq82502l4p58r5uk2vcri7h',
  },
};

const testing = {
  BASE_URL: 'staging.akilacap.com',
  stripe: {
    STRIPE_API_KEY:
      'pk_test_51Kpd0iJKv6FdgRdllF56aaIl1ebM2ILDgVeeEmhAed8pjmuMb1LREacvja6KaO9fHznDx0jYuYiApInqCMGKYQk8002Zfx92sf',
    AWS_WEBHOOK_ENDPOINT: 'https://26n56xvff5.execute-api.us-east-1.amazonaws.com/auth',
    AWS_WEBHOOK_GENERATE_SECRET:
      'https://26n56xvff5.execute-api.us-east-1.amazonaws.com/generate-secret',
  },
  s3: {
    REGION: 'YOUR_DEV_S3_UPLOADS_BUCKET_REGION',
    BUCKET: 'YOUR_DEV_S3_UPLOADS_BUCKET_NAME',
  },
  apiGateway: {
    CONTACT: 'https://1ypzx9uwq7.execute-api.us-east-1.amazonaws.com/',
  },
  cognito: {
    REGION: 'YOUR_DEV_COGNITO_REGION',
    USER_POOL_ID: 'us-east-1_W8a7nvwWL',
    APP_CLIENT_ID: 'YOUR_DEV_COGNITO_APP_CLIENT_ID',
    IDENTITY_POOL_ID: 'YOUR_DEV_IDENTITY_POOL_ID',
  },
  login: {
    UserPoolId: 'us-east-1_W8a7nvwWL',
    ClientId: '3oq82502l4p58r5uk2vcri7h',
  },
};

const prod = {
  BASE_URL: 'akilacap.com',
  stripe: {
    STRIPE_API_KEY:
      'pk_test_51Kpd0iJKv6FdgRdllF56aaIl1ebM2ILDgVeeEmhAed8pjmuMb1LREacvja6KaO9fHznDx0jYuYiApInqCMGKYQk8002Zfx92sf',
    aws_webhook_endpoint: 'https://26n56xvff5.execute-api.us-east-1.amazonaws.com/auth',
    AWS_WEBHOOK_GENERATE_SECRET:
      'https://26n56xvff5.execute-api.us-east-1.amazonaws.com/generate-secret',
  },
  s3: {
    REGION: 'YOUR_PROD_S3_UPLOADS_BUCKET_REGION',
    BUCKET: 'YOUR_PROD_S3_UPLOADS_BUCKET_NAME',
  },
  apiGateway: {
    CONTACT: 'https://1ypzx9uwq7.execute-api.us-east-1.amazonaws.com/',
  },
  cognito: {
    REGION: 'YOUR_PROD_COGNITO_REGION',
    USER_POOL_ID: 'YOUR_PROD_COGNITO_USER_POOL_ID',
    APP_CLIENT_ID: 'YOUR_PROD_COGNITO_APP_CLIENT_ID',
    IDENTITY_POOL_ID: 'YOUR_PROD_IDENTITY_POOL_ID',
  },
  login: {
    UserPoolId: 'us-east-1_EGEnE2k0F',
    ClientId: '4ivctk1uo1u09achjomdjgfhu8',
  },
};

const config = {
  ...(process.env.REACT_APP_STAGE === 'prod' ? prod : local),
  ...globalVars,
};

export default config;
