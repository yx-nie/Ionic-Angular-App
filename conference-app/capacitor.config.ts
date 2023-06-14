import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'conference-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
