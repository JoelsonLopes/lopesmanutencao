/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ativa o build estático puro (SSG) na pasta 'out/'
  images: {
    unoptimized: true, // Necessário para exportação estática
  },
};

export default nextConfig;
