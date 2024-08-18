import { format, setHours, setMinutes } from 'date-fns';

export const Day = (d: Date) => format(d, 'yyyy-MM-dd');

export const Time = ({
  date,
  hour,
  minute,
}: {
  date: Date;
  hour: number;
  minute: number;
}) => format(setMinutes(setHours(date, hour), minute), 'yyyy-MM-dd HH:mm:ss');
