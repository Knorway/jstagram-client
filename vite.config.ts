import path from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

const buildDir = path.resolve('..', 'server/src/main/resources/client');

export default defineConfig(({ mode }) => {
	const isBuild = mode === 'production';
	return {
		plugins: [react()],
		base: isBuild ? 'static-client' : '/',
		build: {
			outDir: buildDir,
		},
		server: {
			port: 3000,
		},
	};
});
