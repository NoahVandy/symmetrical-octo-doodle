import { z } from 'zod';
import { env as untypedEnv } from './env.mjs';
import { envSchema } from './env-schema.mjs';

export type Env = z.infer<typeof envSchema>;
export const env = untypedEnv as Env;
