import { EnvConfig } from './env-config.interface';

const ProdConfig: EnvConfig = {
  ENV: 'PROD',
  API: 'http://simprod.mgcoders.com:8080'
};

export = ProdConfig;

