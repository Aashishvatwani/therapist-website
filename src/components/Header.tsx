'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from './ui/button'; // Assuming Shadcn UI Button component path
import { Menu } from 'lucide-react'; // Lucide React icon
import {
  Sheet,
  SheetContent,

  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose // Important for closing the sheet when a link is clicked
} from './ui/sheet'; // Assuming Shadcn UI Sheet component path

const MotionLink = motion(Link);

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' }
];

function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-40 flex justify-between items-center px-8 py-4 bg-transparent backdrop-blur-sm">
      {/* Logo/Title */}
      <motion.div
        className="text-2xl font-bold text-amber-400"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        MindCare
      </motion.div>

      {/* Desktop Navigation */}
      <motion.nav
        className="space-x-6 hidden md:flex"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {navLinks.map((link) => (
          <MotionLink
            key={link.href}
            href={link.href}
            // Use whileHover for both scale and visual changes
            whileHover={{
              scale: 1.2,
              
              // Tailwind's amber-400 hex code
            backgroundColor: 'rgba(15, 23, 42, 0.5)', // Navy blue (tailwind slate-900) with opacity
            borderRadius: '0.5rem' // Rounded corners (8px)
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="relative text-sm font-medium text-[#FFD580] transition-all duration-50 ease-in-out cursor-pointer underline-offset-4"
          >
            {link.label}
          </MotionLink>
        ))}
      </motion.nav>

      {/* Mobile Menu - Shadcn Sheet */}
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Open menu"
          className="rounded-50 shadow-lg transition-transform duration-200 hover:scale-120 hover:bg-opacity-50"
        >
          <Menu className="h-8 w-8 text-amber-400" />
        </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="bg-slate-900/90 backdrop-blur-md border-none"
        >
        <SheetHeader>
          <SheetTitle className="text-amber-400 text-center text-3xl">Navigation</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 mt-8 text-center">
          {navLinks.map((link) => (
            <SheetClose asChild key={link.href}>
            <Link
              href={link.href}
              className="text-lg font-medium text-amber-100 hover:text-amber-500 transition-colors"
            >
              {link.label}
            </Link>
            </SheetClose>
          ))}
        </nav>
        </SheetContent>
      </Sheet>
    </div>
    </header>
  );
}

export default Header;