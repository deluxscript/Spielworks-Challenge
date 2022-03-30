import FormBuilder from "../../components/FormBuilder";
import Layout from "../../components/Layout";

const WebApp: React.VFC = () => {
   const title = "This is tgeh page"

   return (
      <Layout title={title}>
         <h1 className="text-4xl text-center font-bold py-4">NFTs Collections</h1>
         <FormBuilder />
      </Layout>
   )
}

export default WebApp
