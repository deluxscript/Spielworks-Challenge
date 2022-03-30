import { Helmet } from "react-helmet";

interface HTMLHeadProps {
   title?: string
   description: string
 }

const MetaHead: React.FC<HTMLHeadProps> = ({title, description}) => {

   return (
      <Helmet>
         <title>{title}</title>
         <meta name="description" content={description} />
         <meta name="robots" content="index, follow" />
      </Helmet>
   )
}

export default MetaHead
