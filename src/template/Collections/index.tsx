import { useEffect, useState } from 'react';
import SingleCollection from '../../components/SingleCollection';
import API from '../../config/api';
import { Assets } from '../../types/ApiResponse/assets';
import { AtomicAssets } from '../../types/ApiResponse/atomicassets';

interface NameProp {
   accountName?: string
}

const Collections: React.FC<NameProp> = ({accountName}) => {

   const [NftData, setNftData] = useState<Assets[]>([]);
   
   useEffect(() => {
      const getCollections = async () => {
         const response = await API.get<AtomicAssets>(`/atomicassets/v1/assets?owner=${accountName}&page=1&limit=100&order=desc&sort=asset_id`)
         const { data: {data} } = response
         setNftData(data)
       }
       getCollections()
       .catch(console.error);
   }, [accountName])

   const groupedCollection = NftData.reduce((obj: any, item) => {
      const res = obj[item.collection.collection_name] || []
      return {...obj, [item.collection.collection_name]: [...res, item]}
   }, {})

   return (
      <div>
         <h1 className='text-3xl pt-4 font-bold '>Results</h1>
         {(groupedCollection && Object.keys(groupedCollection).length === 0) ? <p>There are no collections for this account</p> :
         (Object.entries(groupedCollection).map((collection) => (
            <SingleCollection key={collection[0]} title = {collection[0]} collection = {collection} />
         )))}
         
      </div>
   )
}

export default Collections