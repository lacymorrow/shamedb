export const generateRandom = (max: number) => Math.floor(Math.random() * max);

export const incrementNumber = (number: number, max: number) => {
  return (number + 1) % max;
};
