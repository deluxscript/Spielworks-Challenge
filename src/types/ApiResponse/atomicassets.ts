import { Assets } from "./assets"

export interface AtomicAssets {
   success: boolean
   data: Assets[]
   query_time: number
}