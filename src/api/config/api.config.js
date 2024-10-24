module.exports = {
  'petstore-file': {
    input: '../definitions/pockemon/pockemon.openapi.yaml',
    output: '../generated/petstore.ts',
  },
  'credentials': {
    input: '../definitions/credentials/credentials.openapi.yaml',
    output: {
      target: '../generated/credentials/credentials.ts',
      mode: 'tags',
      title: 'LoginApi',
      override: {
        mutator: {
          path: '../../services/config/axios.instance.ts',
          name: 'customInstance',
        },
      },
    },
  },
};