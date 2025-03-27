module.exports = {
  output: 'export',
  images: {
    unoptimized: true, // Desativa a API de Otimização de Imagens
  },
};
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Desativa a API de Otimização de Imagens
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'], // Configuração para suportar SVGs como componentes React
    });
    return config;
  },
};

export default nextConfig;