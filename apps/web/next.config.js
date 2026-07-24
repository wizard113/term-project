/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  // Generates a production-ready, minimal server (.next/standalone)
  output: 'standalone',
  // Traces workspace dependencies up to the monorepo root so the
  // standalone bundle includes packages from other workspaces.
  outputFileTracingRoot: path.join(__dirname, '../../'),
};

export default nextConfig;
