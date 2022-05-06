const renderRgb = (
  red: number,
  green: number,
  blue: number,
  alpha: number = 0
): string => {
  return `rgba(${red},${green},${blue},${alpha})`;
};

export default { renderRgb };
