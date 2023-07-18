import {Dispatch,FC} from 'react';

interface Props{
    showTechnicalDeatils:boolean,
    setShowTechnicalDeatils:Dispatch<React.SetStateAction<boolean>>,
    productSpecification:object[]
}

const TechnicalDetails = ({showTechnicalDeatils,setShowTechnicalDeatils,productSpecification}:Props):JSX.Element => {
  return (
    <article className='w-8/12 m-auto'>
        <div className="border-t border-gray-200 px-4 py-6">
            <h3 className="-mx-2 -my-3 flow-root">
            <button type="button" className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false" onClick={() => setShowTechnicalDeatils(!showTechnicalDeatils)}>
                <span className="text-xl font-bold text-gray-900">Technical Specifications</span>
                <span className="ml-6 flex items-center">
                {showTechnicalDeatils ? (
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
            <div className={`pt-6 ${showTechnicalDeatils ? "": "hidden"}`} id="filter-section-mobile-0">
            <div className="space-y-6">
                {productSpecification.map((item,index) => {
                const [value] = Object.entries(item)
                return (
                    <div key={index} className='px-2 flex'>
                    <div className='w-1/4 text-gray-500'>
                        <p>{value[0]}</p>
                    </div>
                    <div className='w-3/4 border-b'>
                        <p>{value[1]}</p>
                    </div>
                    </div>
                )
                })}
            </div>
            </div>
        </div>
    </article>
  )
}

export default TechnicalDetails