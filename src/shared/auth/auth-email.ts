const AUTH_EMAIL_SUFFIX = "@auth.exaya.app";

/** Maps app username to a unique email-shaped id for Supabase Auth. */
export function usernameToAuthEmail(username: string): string {
  return `${username.trim()}${AUTH_EMAIL_SUFFIX}`;
}

/** Recovers username from the synthetic email used for Supabase. */
export function authEmailToUsername(email: string): string {
  const at = email.indexOf("@");
  if (at === -1) return email.trim();
  return email.slice(0, at).trim();
}
