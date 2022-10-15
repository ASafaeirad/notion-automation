import { format } from 'date-fns';

export const Day = (d: Date) => format(d, 'yyy-MM-dd');
