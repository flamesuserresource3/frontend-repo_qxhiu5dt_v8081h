import React, { useState } from 'react';
import { User, Target, Scale, Ruler } from 'lucide-react';

export default function OnboardingForm() {
  const [form, setForm] = useState({
    goal: 'Hypertrophy',
    age: '',
    gender: 'Male',
    height_cm: '',
    weight_kg: '',
  });

  const [message, setMessage] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Simple client-side validation
    const ageNum = Number(form.age);
    const hNum = Number(form.height_cm);
    const wNum = Number(form.weight_kg);
    if (!ageNum || ageNum < 10 || ageNum > 100) {
      setMessage('Please enter a valid age between 10 and 100.');
      return;
    }
    if (!hNum || hNum < 100 || hNum > 250) {
      setMessage('Height should be in centimeters (100–250).');
      return;
    }
    if (!wNum || wNum < 30 || wNum > 300) {
      setMessage('Weight should be in kilograms (30–300).');
      return;
    }
    setMessage('Saved locally. Backend connection will store this profile when available.');
  };

  return (
    <section className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 sm:p-6">
      <div className="mb-4 flex items-center gap-2">
        <User className="h-5 w-5 text-emerald-400" />
        <h2 className="text-base font-semibold text-white">Onboarding</h2>
      </div>
      <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1">
          <span className="text-sm text-neutral-300">Primary Goal</span>
          <div className="relative">
            <Target className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
            <select
              name="goal"
              value={form.goal}
              onChange={onChange}
              className="w-full appearance-none rounded-md border border-neutral-800 bg-neutral-900/80 px-9 py-2 text-sm text-neutral-100 outline-none ring-emerald-500/30 focus:ring"
            >
              <option>Hypertrophy</option>
              <option>Strength</option>
              <option>Endurance</option>
              <option>Body Recomp</option>
            </select>
          </div>
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm text-neutral-300">Gender</span>
          <select
            name="gender"
            value={form.gender}
            onChange={onChange}
            className="w-full rounded-md border border-neutral-800 bg-neutral-900/80 px-3 py-2 text-sm text-neutral-100 outline-none ring-emerald-500/30 focus:ring"
          >
            <option>Male</option>
            <option>Female</option>
          </select>
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm text-neutral-300">Age</span>
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={onChange}
            placeholder="e.g., 28"
            className="w-full rounded-md border border-neutral-800 bg-neutral-900/80 px-3 py-2 text-sm text-neutral-100 outline-none ring-emerald-500/30 focus:ring"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm text-neutral-300">Height (cm)</span>
          <div className="relative">
            <Ruler className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
            <input
              type="number"
              name="height_cm"
              value={form.height_cm}
              onChange={onChange}
              placeholder="e.g., 178"
              className="w-full rounded-md border border-neutral-800 bg-neutral-900/80 px-9 py-2 text-sm text-neutral-100 outline-none ring-emerald-500/30 focus:ring"
            />
          </div>
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm text-neutral-300">Weight (kg)</span>
          <div className="relative">
            <Scale className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
            <input
              type="number"
              name="weight_kg"
              value={form.weight_kg}
              onChange={onChange}
              placeholder="e.g., 78"
              className="w-full rounded-md border border-neutral-800 bg-neutral-900/80 px-9 py-2 text-sm text-neutral-100 outline-none ring-emerald-500/30 focus:ring"
            />
          </div>
        </label>

        <div className="sm:col-span-2 mt-2">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md border border-emerald-600/30 bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-500"
          >
            Save Profile
          </button>
          {message && (
            <p className="mt-2 text-sm text-emerald-300/90">{message}</p>
          )}
        </div>
      </form>
    </section>
  );
}
