/* eslint-disable import/no-extraneous-dependencies */
const fetch = require('node-fetch');
require('dotenv').config({ path: '.env.local' });

async function config() {
  // Generate an access token to be able
  const res = await fetch(`https://${process.env.VITE_AUTH0_DOMAIN}/oauth/token`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: process.env.GQL_CODEGEN_AUTH0_CLIENT_ID,
      client_secret: process.env.GQL_CODEGEN_AUTH0_CLIENT_SECRET,
      audience: process.env.VITE_AUTH0_AUDIENCE,
    }),
  });
  const body = await res.json();
  return {
    overwrite: true,
    schema: {
      // Use the access token to access the schema
      'http://localhost:3001': {
        headers: {
          authorization: `Bearer ${body.access_token}`,
        },
      },
    },
    documents: 'src/queries/*.graphql',
    generates: {
      'src/generated/graphql.ts': {
        plugins: [
          'typescript',
          'typescript-operations',
          'typescript-vue-apollo',
        ],
        config: {
          nonOptionalTypename: true,
          scalars: {
            Date: 'string',
            MongoID: 'string',
          },
          vueCompositionApiImportFrom: 'vue',
        },
      },
    },
  };
}

module.exports = config();
