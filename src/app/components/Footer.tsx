"use client";

import Link from 'next/link';
import { getFamilyFullName } from '@/utils/config';

const Footer = () => {
  // 获取完整姓氏名称（带"氏"字）
  const familyFullName = getFamilyFullName();
  
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* 左侧 - 关于 */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold leading-6 text-gray-900">关于族谱</h3>
            <p className="text-sm leading-6 text-gray-600">
              
            </p>
          </div>

          {/* 中间 - 开源信息 */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold leading-6 text-gray-900">开源信息</h3>
            <p className="text-sm leading-6 text-gray-600">
             
            </p>
            <p className="text-sm leading-6 text-gray-600">

              </Link>
            </p>
          </div>

          {/* 右侧 - 友情链接 */}
          <div className="space-y-4">
            <ul role="list" className="mt-2 space-y-2">
              <li>

              </li>
            </ul>
          </div>
        </div>

        {/* 底部版权信息 */}
        <div className="mt-8 border-t border-gray-200 pt-6">
          
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
