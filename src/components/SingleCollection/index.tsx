import { Assets } from "../../types/ApiResponse/assets"
import Cards from "../Cards"

interface Props {
   collection: {},
   title: string
}

const SingleCollection: React.VFC<Props> = ({collection, title})=> {
   const Items:any = Object.values(collection)[1]

   return(
      <div className="my-8">
         <h2 className="text-center py-4 text-2xl font-bold">{title} collections</h2>
         <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8">
            {
               Items.map((Item : Assets) => <Cards key={Item.asset_id} Item = {Item} />)
            }
         </div>
      </div>
   )
}

export default SingleCollection