export const generateRandom = (max: number) => Math.floor(Math.random() * max);

export const incrementNumber = (number: number, max: number) => {
  return (number + 1) % max;
};

// Format strings with %s
export const strFormat = (str: string, ...args: any) =>
  args.reduce((s: string, v: string) => s.replace('%s', v), str);
