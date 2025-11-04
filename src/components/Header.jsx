import React from 'react';
import { Activity, Settings, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-neutral-800/60 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-emerald-500 to-sky-500 text-neutral-900">
            <Activity className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight text-white">Health Ultra</h1>
            <p className="text-xs text-neutral-400">Hypertrophy & performance insights</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-800">
            <Settings className="h-4 w-4" />
            Settings
          </button>
          <button className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-800">
            <User className="h-4 w-4" />
            Profile
          </button>
        </div>
      </div>
    </header>
  );
}
