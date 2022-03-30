import { useState } from 'react';
import { useForm } from "react-hook-form"
import { formTitle, subFormText } from '../../config/constants';
import Collections from '../../template/Collections';

interface Values {
   accountName: string
}

const FormBuilder: React.FC = () => {

   const [name, setName] = useState<Values>()
   const { register, handleSubmit, formState } = useForm<Values>()
   const { isSubmitting } = formState
   const onSubmit = (accountName: Values) => {
      return new Promise(resolve => {
         setTimeout(resolve, 1000)
         setName(accountName)
      });
   }
   const accountName = name?.accountName
   
   return (
      <div className='py-4 my-4 text-center'>
         <form 
            onSubmit={handleSubmit(onSubmit)}
         >
            <div>
               <p className='text-lg font-bold'>{formTitle}</p>
               <p className='text-sm pb-4 italic'>{subFormText}</p>
               <input
                  {...register('accountName')}
                  name='accountName' 
                  id='accountName' 
                  type='text'
                  placeholder='Insert here...'
                  className="rounded italic mt-2 p-4 h-11 md:w-1/4 w-1/2 bg-transparent opacity-30 shadow-md shadow-white outline-none placeholder:text-white"
               />
            </div>
            <button disabled={isSubmitting} type='submit' className='my-4 rounded font-bold py-2 px-10 bg-submitBtn'>
               {isSubmitting ? 'Curating Lists' : 'Submit'}
            </button>
         </form>
         {accountName && !isSubmitting && (<Collections accountName={accountName} />)}
         
      </div>
   )
}

export default FormBuilder
