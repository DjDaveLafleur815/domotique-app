import { apiPost } from "./client";

export function login(email, password) {
  return apiPost("/auth/login", { email, password });
}
