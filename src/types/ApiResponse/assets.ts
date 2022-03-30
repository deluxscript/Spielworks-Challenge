import { Collection } from "./collections"
import { NFTs } from "./nfts"
import { Schema } from "./schema"
import { Template } from "./template"

export interface Assets {
   contract: string
   asset_id: string
   owner: string
   is_transferable: boolean
   is_burnable: boolean
   collection: Collection
   schema: Schema
   template: Template
   mutable_data: {} | null
   immutable_data: {} | null
   template_mint: string
   backed_tokens: []
   burned_by_account: string | null
   burned_at_block: string | null
   burned_at_time: string | null
   updated_at_block: string
   updated_at_time: string
   transferred_at_block: string
   transferred_at_time: string
   minted_at_block: string
   minted_at_time: string
   data: NFTs
   name: string

}