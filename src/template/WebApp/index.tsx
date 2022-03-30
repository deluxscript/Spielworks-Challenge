import FormBuilder from "../../components/FormBuilder";
import Layout from "../../components/Layout";
import { title } from "../../config/constants";

const WebApp: React.VFC = () => {

   return (
      <Layout>
         <h1 className="text-4xl text-center font-bold py-4">{title}</h1>
         <FormBuilder />
      </Layout>
   )
}

export default WebApp
