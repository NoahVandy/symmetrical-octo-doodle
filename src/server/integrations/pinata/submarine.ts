// src/server/db/client.ts
import { env } from "../../env";
import { Submarine } from "pinata-submarine";

declare global {
  var submarine: Submarine | undefined;
}

export const submarine =
  global.submarine ||
  new Submarine(
    env.PINATA_API_KEY,
    env.PINATA_GATEWAY_DOMAIN,
  );

if (env.NODE_ENV !== "production") {
  global.submarine = submarine;
}
