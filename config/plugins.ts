export default ({ env }: { env: any }) => ({
  i18n: {
    enabled: true,
    config: {
      defaultLocale: 'it',
      locales: ['it', 'en'],
    },
  },
  'users-permissions': {
    enabled: true,
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
})
