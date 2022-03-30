import { metaDescription, title } from "../../config/constants"
import MetaHead from "../MetaHead"


const Layout: React.FC = ({ children}) => {
  return (
    <>
      <div>
         <div className="container mx-auto px-4">
            <MetaHead title={title} description = {metaDescription} />
            <main className="">{children}</main>
         </div>
      </div>
    </>
  )
}

export default Layout
