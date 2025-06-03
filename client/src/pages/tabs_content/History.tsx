import React from 'react';

type TimelineEvent = {
  year: number;
  label: string;
};

const events: TimelineEvent[] = [
  { year: 1990, label: 'Started project' },
  { year: 2000, label: 'Milestone' },
  { year: 2010, label: 'Expansion' },
  { year: 2020, label: 'Redesign' },
  { year: 2024, label: 'Relaunch' },
];

export const History: React.FC = () => {
  return (
    <div className="overflow-x-auto w-full">
      <div className="flex items-center space-x-12 px-8 py-6 min-w-max border-t-2 border-gray-300 relative">
        {events.map((event) => (
          <div key={event.year} className="text-center flex-shrink-0">
            <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-2" />
            <div className="text-sm font-semibold text-white">{event.year}</div>
            <div className="text-xs text-white">{event.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

