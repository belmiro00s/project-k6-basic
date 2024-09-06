import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,           // Número de usuários virtuais
  duration: '30s',   // Duração do teste
};

export default function () {
  const res = http.get('http://localhost:3000/api/endpoint'); // Substitua pelo seu endpoint
  check(res, {
    'status 200': (r) => r.status === 200,
  });
  sleep(1);
}
