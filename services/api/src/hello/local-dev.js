// tiny local dev server to simulate hello lambda
import http from 'node:http';
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Hello PawStay (local stub)' }));
});
server.listen(3001, () => console.log('Local API stub on http://localhost:3001'));
