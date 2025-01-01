import { useCallback, useEffect, useState } from 'react';

interface TimeFormatOptions {
  readonly hour: 'numeric';
  readonly minute: 'numeric';
  readonly second: 'numeric';
  readonly hour12: boolean;
}

const TIME_FORMAT_OPTIONS: TimeFormatOptions = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true,
} as const;

const REFRESH_INTERVAL = 1000;

/**
 * A React hook that provides a real-time clock display.
 * Returns the current time formatted as HH:MM:SS AM/PM and updates every second.
 *
 * @example
 * ```tsx
 * const Clock = () => {
 *   const time = useTime();
 *   return <div>{time}</div>;
 * };
 * ```
 *
 * @returns {string} The formatted time string in 12-hour format with seconds
 */
export const useTime = (): string => {
  const getFormattedTime = useCallback((): string => {
    return new Date().toLocaleTimeString('en-US', TIME_FORMAT_OPTIONS);
  }, []);

  const [currentTime, setCurrentTime] = useState<string>(getFormattedTime());

  useEffect(() => {
    setCurrentTime(getFormattedTime());

    const intervalId = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, REFRESH_INTERVAL);

    return () => {
      clearInterval(intervalId);
    };
  }, [getFormattedTime]);

  return currentTime;
};
