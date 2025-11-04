import React from 'react';
import Header from './components/Header';
import OnboardingForm from './components/OnboardingForm';
import CsvUpload from './components/CsvUpload';
import DashboardPreview from './components/DashboardPreview';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <section className="mb-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Build muscle with clarity
            </h2>
            <p className="mt-3 text-sm text-neutral-400 sm:text-base">
              Health Ultra turns your FitNotes log into actionable hypertrophy insights — volume, intensity, progression audits, and guided next steps.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <DashboardPreview />
            <CsvUpload />
          </div>
          <div className="space-y-6">
            <OnboardingForm />
            <section className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 sm:p-6">
              <h3 className="mb-2 text-base font-semibold text-white">How it works</h3>
              <ol className="list-decimal space-y-2 pl-5 text-sm text-neutral-300">
                <li>Upload your FitNotes CSV.</li>
                <li>Set your goal and profile.</li>
                <li>Review volume, e1RM, and progression audits.</li>
                <li>Follow guided next steps for weekly improvements.</li>
              </ol>
            </section>
          </div>
        </div>
      </main>
      <footer className="mx-auto mt-8 max-w-6xl px-4 py-8 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Health Ultra. Train hard, recover smarter.
      </footer>
    </div>
  );
}
