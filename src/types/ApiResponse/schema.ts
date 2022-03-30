export interface SchemaData {
   name: string
   type: string
}

export interface Schema {
   schema_name: string
   format: SchemaData[]
   created_at_block: string
   created_at_btime: string
}