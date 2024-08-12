const { cookies } = require("next/headers");

export function useSession() {
  // Retrieve the 'nylasSession' cookie
  const cookieStore = cookies();
  const nylasSessionCookie = cookieStore.get("nylasSession")?.value;

  // Parse the JSON data
  let userInfo = null;
  if (nylasSessionCookie) {
    try {
      userInfo = JSON.parse(nylasSessionCookie);
    } catch (error) {
      console.error("Failed to parse nylasSession cookie:", error);
    }
  }

  return userInfo;
}
