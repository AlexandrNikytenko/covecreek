/**
 * Checks if the given environment variables are set.  Throws an error if any of them are not set.
 * @param envVars - environment variables to check.
 * @throws Error if any of the environment variables are not set.
 * @example
 * requireEnv(["SENDGRID_API_KEY", "FROM_EMAIL"]);
 */
export function requireEnv(envVars: string[]): void {
  const missingEnvVars = envVars.filter((envVar) => !process.env[envVar]);
  if (missingEnvVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingEnvVars.join(", ")}`
    );
  }
}
