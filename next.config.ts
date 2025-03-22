import { NextConfig } from 'next';
import { Configuration } from 'webpack'; // 引入Webpack配置类型

/** @type {NextConfig} */ 
const nextConfig = { 
  webpack: (config: Configuration) => { // 显式标注config类型
    config.resolve.fallback = { 
      ...config.resolve.fallback, 
      fs: false, 
    }; 
    return config; 
  }, 
}; 

export default nextConfig;
