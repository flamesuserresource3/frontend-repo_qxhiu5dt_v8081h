import React, { useRef, useState } from 'react';
import { UploadCloud, FileSpreadsheet } from 'lucide-react';

export default function CsvUpload() {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState('');
  const [hint, setHint] = useState('FitNotes CSV with Date, Exercise, Category, Weight, Weight Unit, Reps');

  const onDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.name.toLowerCase().endsWith('.csv')) {
      setFileName(file.name);
      setHint('Ready to upload. In a later step this will send to the backend API.');
    }
  };

  const onBrowse = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setHint('Ready to upload. In a later step this will send to the backend API.');
    }
  };

  return (
    <section className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 sm:p-6">
      <div className="mb-4 flex items-center gap-2">
        <FileSpreadsheet className="h-5 w-5 text-sky-400" />
        <h2 className="text-base font-semibold text-white">Upload Training Log</h2>
      </div>

      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-neutral-700/80 bg-neutral-900/40 p-6 text-center transition hover:border-neutral-600"
        onClick={() => inputRef.current?.click()}
      >
        <UploadCloud className="h-8 w-8 text-neutral-300" />
        <div className="space-y-1">
          <p className="text-sm text-neutral-200">Drag & drop your FitNotes CSV here</p>
          <p className="text-xs text-neutral-400">or click to browse</p>
        </div>
        <input
          ref={inputRef}
          type="file"
          accept=".csv,text/csv"
          className="hidden"
          onChange={onBrowse}
        />
        {fileName && (
          <p className="mt-2 text-xs text-emerald-300">Selected: {fileName}</p>
        )}
        <p className="mt-1 text-xs text-neutral-500">{hint}</p>
      </div>
    </section>
  );
}
