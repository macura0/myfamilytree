import { NextConfig } from 'next'; // 引入NextConfig类型定义[1](@ref)

/** @type {NextConfig} */ // 通过JSDoc标注类型[1](@ref)
const nextConfig = {
  webpack: (config) => {
    // 排除Node.js核心模块fs[3](@ref)
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};

export default nextConfig;
