const ipAddress = 'smart-education-fe';
const port = 8080;
export const environment = {
  production: false,
  enableDebug: true,
  apiRootUrl: 'http://' + ipAddress + ':' + port + '/api/root',
  apiAuthUrl: 'http://' + ipAddress + ':' + port + '/api/auth',
  apiUserUrl: 'http://' + ipAddress + ':' + port + '/api/user',
  apiOpenUrl: 'http://' + ipAddress + ':' + port + '/api/open'
};
