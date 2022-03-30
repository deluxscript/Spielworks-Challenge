export interface Collection {
   collection_name: string
   name: string
   img: string
   author: string
   allow_notify: string
   authorized_accounts: string[]
   notify_accounts: [] | null
   market_fee: 0
   created_at_block: string
   created_at_time: string
}