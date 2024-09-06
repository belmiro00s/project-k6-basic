export const options = {
    stages: [
      { duration: '30s', target: 20 }, // Aumenta o número de VUs para 20 durante 30 segundos
    ],
    thresholds: {
      http_req_duration: ['p(95)<500'], // 95% das requisições devem ser abaixo de 500ms
    },
  };
  