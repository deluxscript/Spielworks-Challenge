import MetaHead from "../MetaHead"

interface LayoutProps {
   title: string
 }

const Layout: React.FC<LayoutProps> = ({ children, title}) => {
  return (
    <>
      <div>
         <div className="container mx-auto px-4">
            <MetaHead title={title} />
            <main className="">{children}</main>
         </div>
      </div>
    </>
  )
}

export default Layout
