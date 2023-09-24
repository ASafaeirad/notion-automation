import { isNullOrEmptyString } from '@fullstacksjs/toolbox';
import { startOfTomorrow } from 'date-fns';
import { $ } from 'zx';
const removeLineEnding = (x: string) => x.replace(/(\r\n|\n|\r)/gm, '');

export const Rofi = {
  text: async (name: string) => {
    const { stdout } = await $`rofi -dmenu -i -p ${name}`;
    const text = removeLineEnding(stdout);

    if (isNullOrEmptyString(text)) {
      console.error("It's required");
      process.exit(1);
    }

    return text;
  },

  optionalText: async (name: string) => {
    const { stdout } = await $`rofi -dmenu -i -p ${name}`;
    return removeLineEnding(stdout);
  },

  select: async <T>(
    name: string,
    items: string[] | readonly string[],
  ): Promise<T> => {
    const list = items.join('\n');

    const { stdout } = await $`echo ${list} | rofi -dmenu -i -p ${name}`;
    const result = removeLineEnding(stdout) as T;
    return result;
  },

  optionalSelect: async <T>(
    name: string,
    items: string[] | readonly string[],
  ): Promise<T | undefined> => {
    const list = ['No', ...items].join('\n');

    const { stdout } = await $`echo ${list} | rofi -dmenu -i -p ${name}`;
    const result = removeLineEnding(stdout) as T;
    return result === 'No' ? undefined : result;
  },

  relativeDate: async (name: string) => {
    const dates = ['Unassigned', 'Today', 'Tomorrow'] as const;
    const list = dates.join('\n');
    const { stdout } = await $`echo ${list} | rofi -dmenu -i -p ${name}`;
    const selected = removeLineEnding(stdout) as typeof dates[number];
    const map: Record<typeof dates[number], Date | undefined> = {
      Today: new Date(),
      Tomorrow: startOfTomorrow(),
      Unassigned: undefined,
    };

    return map[selected];
  },

  date: async (name: string) => {
    const { stdout } = await $`rofi -dmenu -i -p ${name}`;
    const text = removeLineEnding(stdout);
    const date = new Date(text);
    if (isNaN(date.getTime())) throw Error('Invalid date');
    return date;
  },
};
