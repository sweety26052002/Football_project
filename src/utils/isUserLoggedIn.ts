import { getItemFromLocalStorage } from "./localSotrage";

export function isUserLoggedIn(): boolean {
  const user = getItemFromLocalStorage("user");
  return user !== null;
}
