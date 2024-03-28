import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'compression';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/VirtualMoney',
	resolve: {
		alias: {
			'@': '/src',
		},
	},
	plugins: [react()],
	server: {
		middleware: [compression({ threshold: 0 })],
	},
});
