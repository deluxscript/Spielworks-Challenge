

interface Props {
   img: string
}
const ImageComponent: React.FC<Props> = ({img}) => {
   return(
      <div className="h-275 shadow-md">
         <img src={`https://ipfs.io/ipfs/${img}`} alt="nfts" width={275} height={275} className="w-full object-scale-down"/>
      </div>
   )
}

export default ImageComponent