export function dateValidation(date: string): boolean {
  const userDate: Date = new Date(date);
  const yesterday: Date = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  return (
    yesterday.getUTCDate() === userDate.getUTCDate() &&
    yesterday.getUTCMonth() === userDate.getUTCMonth() &&
    yesterday.getUTCFullYear() === userDate.getUTCFullYear()
  );
}
