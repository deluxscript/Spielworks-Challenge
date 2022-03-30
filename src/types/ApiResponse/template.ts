export interface Template {
   template_id: string
   max_supply: string
   is_transferable: boolean
   is_burnable: boolean
   issued_supply: string
   immutable_data: {
      img: string
      name: string
      backimg: string
      context: string
      website: string
   }
   created_at_time: string
   created_at_block: string
}