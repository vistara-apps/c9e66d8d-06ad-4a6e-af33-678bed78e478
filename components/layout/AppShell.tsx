'use client';

import { useState } from 'react';
import { Menu, X, Wallet, TrendingUp, Shield, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AppShellProps {
  children: React.ReactNode;
  variant?: 'default' | 'sidebar';
}

export function AppShell({ children, variant = 'default' }: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '#', icon: TrendingUp, current: true },
    { name: 'Staking', href: '#staking', icon: Wallet, current: false },
    { name: 'ICOs', href: '#icos', icon: Shield, current: false },
    { name: 'Settings', href: '#settings', icon: Settings, current: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar */}
      <div className={cn(
        'fixed inset-0 z-50 lg:hidden',
        sidebarOpen ? 'block' : 'hidden'
      )}>
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 w-64 bg-surface border-r border-border">
          <div className="flex items-center justify-between p-4">
            <h2 className="text-lg font-semibold text-on-surface">PUMP Hub</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 rounded-md text-muted-foreground hover:text-on-surface"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="px-4 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                  item.current
                    ? 'bg-primary text-white'
                    : 'text-muted-foreground hover:text-on-surface hover:bg-surface/50'
                )}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      {variant === 'sidebar' && (
        <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:w-64 lg:block">
          <div className="flex flex-col h-full bg-surface border-r border-border">
            <div className="flex items-center px-6 py-4">
              <h2 className="text-xl font-bold text-on-surface">PUMP Hub</h2>
            </div>
            <nav className="flex-1 px-4 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                    item.current
                      ? 'bg-primary text-white'
                      : 'text-muted-foreground hover:text-on-surface hover:bg-surface/50'
                  )}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className={cn(
        'flex flex-col',
        variant === 'sidebar' ? 'lg:ml-64' : ''
      )}>
        {/* Top bar */}
        <header className="bg-surface border-b border-border">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 rounded-md text-muted-foreground hover:text-on-surface lg:hidden"
              >
                <Menu className="w-5 h-5" />
              </button>
              <h1 className="ml-2 text-lg font-semibold text-on-surface lg:ml-0">
                PUMP Staking Hub
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-md text-muted-foreground hover:text-on-surface">
                <Wallet className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6">
          <div className="max-w-screen-lg mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
