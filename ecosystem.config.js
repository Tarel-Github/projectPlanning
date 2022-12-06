module.exports = {
  apps: [
    {
      /* 개발 환경용 서버 */
      name: "app",
      script: "./app.js",
      instances: 1, // 단일 쓰레드
      autorestart: false,
      watch: false,
      env: {
        Server_PORT: 4000,
        NODE_ENV: "development",
      },
    },
    {
      /* 배포 환경용 서버 */
      name: "app",
      script: "./app.js",
      instances: -1, // 클러스터 모드
      autorestart: false,
      watch: false,
      env: {
        Server_PORT: 1234,
        NODE_ENV: "production",
      },
    },
  ],
};
