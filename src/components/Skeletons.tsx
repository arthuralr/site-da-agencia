import React from 'react';

export const PortfolioCardSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col justify-between rounded-2xl bg-slate-900/60 border border-slate-800/80 overflow-hidden animate-pulse">
      <div>
        {/* Mockup Image Placeholder */}
        <div className="relative aspect-[16/10] bg-slate-800/60 flex items-center justify-center overflow-hidden">
          {/* Subtle moving shimmer highlight */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-750/30 to-transparent -translate-x-full animate-[shimmer_1.8s_infinite]" />

          {/* Floating badge skeleton */}
          <div className="absolute top-3 left-3 w-28 h-5 rounded-md bg-slate-700/60" />
          <div className="absolute bottom-3 right-3 w-32 h-5 rounded bg-slate-700/60" />
        </div>

        {/* Content Placeholder */}
        <div className="p-6 space-y-4">
          <div className="w-24 h-3 rounded bg-slate-700/50" />
          <div className="w-3/4 h-5 rounded bg-slate-700/80" />

          <div className="space-y-2 pt-1">
            <div className="w-full h-3 rounded bg-slate-800/80" />
            <div className="w-5/6 h-3 rounded bg-slate-800/80" />
          </div>

          {/* Feature checklist placeholders */}
          <div className="space-y-2 pt-3 border-t border-slate-800/60">
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-slate-700/60 shrink-0" />
              <div className="w-4/5 h-2.5 rounded bg-slate-700/50" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-slate-700/60 shrink-0" />
              <div className="w-2/3 h-2.5 rounded bg-slate-700/50" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Actions Placeholder */}
      <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-800/50 mt-2">
        <div className="w-32 h-4 rounded bg-slate-700/50" />
        <div className="w-7 h-7 rounded-lg bg-slate-800/80" />
      </div>
    </div>
  );
};

export const TestimonialCardSkeleton: React.FC = () => {
  return (
    <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80 flex flex-col justify-between animate-pulse">
      <div>
        {/* Rating & Niche tag placeholders */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-3.5 h-3.5 rounded-sm bg-slate-700/60" />
            ))}
          </div>
          <div className="w-24 h-4 rounded bg-slate-800" />
        </div>

        {/* Quote text placeholder lines */}
        <div className="space-y-2.5 mb-8">
          <div className="w-full h-3.5 rounded bg-slate-800/90" />
          <div className="w-11/12 h-3.5 rounded bg-slate-800/90" />
          <div className="w-4/5 h-3.5 rounded bg-slate-800/90" />
        </div>
      </div>

      {/* Author & Results Tag Placeholders */}
      <div className="pt-5 border-t border-slate-800/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-1.5">
          <div className="w-36 h-4 rounded bg-slate-700/80" />
          <div className="w-48 h-3 rounded bg-slate-800/80" />
        </div>

        <div className="w-36 h-6 rounded-md bg-slate-800/90 shrink-0" />
      </div>
    </div>
  );
};
