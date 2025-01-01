'use client';

import { Header } from './(components)/header';

export default function Home() {
  return (
    <div className={'text-sm flex w-full h-full flex-col'}>
      <Header />
      {/* canvas */}
      <div className="w-full h-full bg-blue-700"></div>
    </div>
  );
}
