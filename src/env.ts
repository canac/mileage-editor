// Environment variables in import.meta.env.* can be a boolean or undefined in addition to string values, so convert
// them into a string value
// eslint-disable-next-line import/prefer-default-export
export function getEnvVar(name: string): string {
  const value = import.meta.env[name];
  return typeof value === 'string' ? value : '';
}
