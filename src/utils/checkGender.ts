export function checkGender(other: boolean, male: boolean, female: boolean): string {
  return other ? 'Other' : male ? 'Male' : female ? 'Female' : '';
}
