export const constantNumberToString = (constant?: number) => {
  return constant !== undefined && constant !== 0
    ? `${constant > 0 ? "+" : "-"}${constant}`
    : "";
};
