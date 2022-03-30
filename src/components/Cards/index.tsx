import { Assets } from "../../types/ApiResponse/assets"
import ImageComponent from "../ImageComponent"

interface Props {
   Item: Assets
}


const Cards: React.FC<Props> = ({Item}) => {

   const { data : {img}, name, template_mint } = Item

   return(
      <div className="bg-cardBg rounded-xl p-6 text-center shadow-lg md:mb-0 mb-4">
         <div className="">
            <ImageComponent img = {img} />
         </div>
         <div className="pt-4">
            <p className="text-lg font-bold">{name}</p>
            <p>#{template_mint}</p>
         </div>
      </div>
   )
}

export default Cards