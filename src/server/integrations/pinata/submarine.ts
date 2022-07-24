// src/server/db/client.ts
import { env } from "../../env";
import { Submarine } from "pinata-submarine";

declare global {
  var submarineClient: Submarine | undefined;
}

export const submarine =
  global.submarineClient ||
  new Submarine(
    env.SUBMARINE_API_KEY,
    env.PINATA_GATEWAY_DOMAIN,
  );

if (env.NODE_ENV !== "production") {
  global.submarineClient = submarine;
}
