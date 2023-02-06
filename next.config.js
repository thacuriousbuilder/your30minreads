/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    'react-native-web',
    'react-native',
    'expo',
    'expo-status-bar',
    'nativewind',
  ],
};

module.exports = nextConfig;
