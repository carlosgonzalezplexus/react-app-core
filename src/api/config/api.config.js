module.exports = {
  'users': {
    input: '../definitions/users/users.openapi.yaml',
    output: {
      target: '../generated/users/users.ts',
      mode: 'tags',
      title: 'UsersApi',
      override: {
        mutator: {
          path: '../../services/config/axios.instance.ts',
          name: 'customInstance',
        },
      },
    },
  },
};