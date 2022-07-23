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
    'gateway.pinata.cloud',
  );

if (env.NODE_ENV !== "production") {
  global.submarine = submarine;
}
