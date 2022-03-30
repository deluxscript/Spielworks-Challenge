import { useState } from "react"
import { BallTriangle } from 'react-loading-icons'
interface Props {
   img: string
}
const ImageComponent: React.VFC<Props> = ({img}) => {

   const [imageLoad, setImageLoad] = useState(false)
   const isLoaded: any = () => setImageLoad(true)

   return(
      <div className="h-275 shadow-md">
         {
            (imageLoad && !imageLoad) ?
               <div className="loadingIcon">
                  <BallTriangle />
                  <p className="pt-8">Loading ...</p>
               </div>
               :
               <img src={`https://ipfs.io/ipfs/${img}`} alt="nfts" width={275} height={275} className="w-full object-scale-down" onLoad={isLoaded}/>
         }
      </div>
   )
}

export default ImageComponent