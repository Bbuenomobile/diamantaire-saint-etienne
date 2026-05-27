module.exports = {
  apps: [
    {
      name: 'diamantaire-saint-etienne',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3070',
      cwd: __dirname,
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3070,
      },
      max_memory_restart: '600M',
      autorestart: true,
      watch: false,
    },
  ],
};
