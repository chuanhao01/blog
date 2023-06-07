import { defaultConfig } from './vite.config';
import { UserConfigExport, defineConfig } from 'vitest/config';

const remoteDevConfig: UserConfigExport = {
	...defaultConfig,
	server: { port: 1313, host: '0.0.0.0' }
};

export default defineConfig(remoteDevConfig);
