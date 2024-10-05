'use client'; // Add this line to make it a client component
import Link from 'next/link';
import React from 'react';
import { ReloadIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

export function ButtonLoading() {
  return (
    <Button disabled>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  )
}

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 text-white py-4 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <ReloadIcon className="mr-2 h-6 w-6 animate-spin" />
          <span className="text-lg font-bold">My Website</span>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:bg-gray-700 p-2 rounded">
              Beranda
            </Link>
          </li>
          <li>
            <Link href="/agenda" className="hover:bg-gray-700 p-2 rounded">
              Agenda
            </Link>
          </li>
          <li>
            <Link href="/album" className="hover:bg-gray-700 p-2 rounded">
              Album
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
