"use client";

import Link from 'next/link';
import { getFamilyFullName } from '@/utils/config';

const Footer = () => {
  // 获取完整姓氏名称（带"氏"字）
  const familyFullName = getFamilyFullName();
  
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        
    </footer>
  );
};

export default Footer; 
