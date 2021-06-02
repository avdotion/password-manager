import {RuntimeContext} from '../configs/contexts';

export type Context = RuntimeContext;
export const CONTEXT = process.env.RUNTIME_CONTEXT as unknown as Context;
