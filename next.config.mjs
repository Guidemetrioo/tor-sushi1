import os from 'os';

// Get all IPv4 local network IP addresses
const networkInterfaces = os.networkInterfaces();
const localIps = [];
for (const name of Object.keys(networkInterfaces)) {
  for (const net of networkInterfaces[name]) {
    if (net.family === 'IPv4' && !net.internal) {
      localIps.push(net.address);
      localIps.push(`${net.address}:3000`);
    }
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [...localIps],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
