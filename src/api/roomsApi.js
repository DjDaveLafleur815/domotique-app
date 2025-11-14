import { apiGet, apiPost } from "./client";

export function getRoomsFromAPI() {
  return apiGet("/rooms");
}

export function toggleLightAPI(roomId, deviceId) {
  return apiPost("/toggle", { roomId, deviceId });
}
