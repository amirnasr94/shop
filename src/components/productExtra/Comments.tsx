import {FC} from 'react'
import avatar from "../../assets/images/avatar.svg";
import CommentForm from './CommentForm';

type IComments = {
    name:string,
    title:string,
    description:string,
    date:string
}
interface Props{
    comments:IComments[]
}

const Comments:FC<Props> = ({comments}) => {
    
  return (
    <article className='sm:w-10/12 lg:w-8/12 m-auto border-t pt-8'>
        <div className="pl-5 sm:block lg:flex">
            <div className="space-y-4 sm:w-full lg:w-1/3 pl-2 border-r">
                <h2 className="text-xl text-black font-bold">Customer Reviews</h2>
                <div className="flex space-x-4">
                    <p className="space-x-1">
                        <i className="fa fa-star text-yellow-500"></i>
                        <i className="fa fa-star text-yellow-500"></i>
                        <i className="fa fa-star text-yellow-500"></i>
                        <i className="fa fa-star text-yellow-500"></i>
                        <i className="fa fa-star text-gray-300"></i>
                    </p>
                    <p>Based on 1224 reviews</p>
                </div>
                <div className='space-y-2'>
                    <div className="flex items-center">
                        <div className="w-1/12"><p>5 <i className="fa fa-star text-yellow-500"></i></p></div>
                        <div className="w-6/12"><span className="w-11/12 h-3 relative bg-gray-200 rounded-full inline-block"><span className="w-3/5 h-3 absolute left-0 bg-yellow-500 inline-block rounded-full"></span></span></div>
                        <div className="w-1/12"><p>61%</p></div>
                    </div>
                    <div className="flex items-center">
                        <div className="w-1/12"><p>4 <i className="fa fa-star text-yellow-500"></i></p></div>
                        <div className="w-6/12"><span className="w-11/12 h-3 relative bg-gray-200 rounded-full inline-block"><span className="w-10 h-3 absolute left-0 bg-yellow-500 inline-block rounded-full"></span></span></div>
                        <div className="w-1/12"><p>11%</p></div>
                    </div>
                    <div className="flex items-center">
                        <div className="w-1/12"><p>3 <i className="fa fa-star text-yellow-500"></i></p></div>
                        <div className="w-6/12"><span className="w-11/12 h-3 relative bg-gray-200 rounded-full inline-block"><span className="w-6 h-3 absolute left-0 bg-yellow-500 inline-block rounded-full"></span></span></div>
                        <div className="w-1/12"><p>6%</p></div>
                    </div>
                    <div className="flex items-center">
                        <div className="w-1/12"><p>2 <i className="fa fa-star text-yellow-500"></i></p></div>
                        <div className="w-6/12"><span className="w-11/12 h-3 relative bg-gray-200 rounded-full inline-block"><span className="w-12 h-3 absolute left-0 bg-yellow-500 inline-block rounded-full"></span></span></div>
                        <div className="w-1/12"><p>15%</p></div>
                    </div>
                    <div className="flex items-center">
                        <div className="w-1/12"><p>1 <i className="fa fa-star text-yellow-500"></i></p></div>
                        <div className="w-6/12"><span className="w-11/12 h-3 relative bg-gray-200 rounded-full inline-block"><span className="w-7 h-3 absolute left-0 bg-yellow-500 inline-block rounded-full"></span></span></div>
                        <div className="w-1/12"><p>7%</p></div>
                    </div>
                </div>
                <CommentForm/>
            </div>
            <div className="sm:w-full lg:w-2/3">
                {comments.map((x,index) => (
                    <div key={index} className="mb-5 border-b p-2">
                        <div className="flex">
                            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white mr-2" src={avatar} alt=""/>
                            <p>
                                <h4>{x.name}</h4>
                                <span className='space-x-1'>
                                <i className="fa fa-star text-yellow-500"></i>
                                <i className="fa fa-star text-yellow-500"></i>
                                <i className="fa fa-star text-yellow-500"></i>
                                <i className="fa fa-star text-yellow-500"></i>
                                <i className="fa fa-star text-yellow-500"></i>
                                </span>
                            </p>
                        </div>
                        <div className='p-2'>
                            <p>{x.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </article>
  )
}

export default Comments