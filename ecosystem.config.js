module.exports = {
  apps: [
    {
      name: 'strapi',
      script: 'node_modules/.bin/strapi',
      args: 'start',
      cwd: './',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=384',
      },
      error_file: '../logs/strapi-error.log',
      out_file: '../logs/strapi-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      restart_delay: 5000,
      max_restarts: 5,
    },
  ],
}
