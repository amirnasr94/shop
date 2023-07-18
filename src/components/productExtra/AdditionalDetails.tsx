import {Dispatch,FC} from 'react';

interface Props{
    showAdditionalDetails:boolean,
    setShowAdditionalDetails:Dispatch<React.SetStateAction<boolean>>,
    productExtraDescription:string,
}

const AdditionalDetails:FC<Props> = ({showAdditionalDetails,setShowAdditionalDetails,productExtraDescription}) => {
  return (
    <article className='w-8/12 m-auto'>
        <div className="border-t border-gray-200 px-4 py-6">
            <h3 className="-mx-2 -my-3 flow-root">
            <button type="button" className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false" onClick={() => setShowAdditionalDetails(!showAdditionalDetails)}>
                <span className="text-xl font-bold text-gray-900">Additional details</span>
                <span className="ml-6 flex items-center">
                {showAdditionalDetails ? (
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                    </svg>
                ) : (
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>
                )}
                </span>
            </button>
            </h3>
            <div className={`pt-6 ${showAdditionalDetails ? "": "hidden"}`} id="filter-section-mobile-0">
                <div className="space-y-6">
                    <p className='p-3 font-normal'>
                    {productExtraDescription}
                    </p>
                </div>
            </div>
      </div>
    </article>
  )
}

export default AdditionalDetails