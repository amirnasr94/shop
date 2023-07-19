const CommentForm = () => {
  return (
    <div className="border-t pt-6 pr-6">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Share your thoughts</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">If you’ve used this product, share your thoughts with other customers</p>
        <form>
          <div className="border-b border-gray-900/10 pb-6">
            <div className="mt-5 grid grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                <div className="mt-2">
                  <input type="text" name="name" id="name" autoComplete="given-name" className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                <div className="mt-2">
                  <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
              </div>
              <div className="sm:col-span-6">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Subject</label>
                <div className="mt-2">
                  <input id="subject" name="subject" type="text" autoComplete="subject" className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
              </div>
              <div className="sm:col-span-6">
                <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">Message</label>
                <div className="mt-2">
                  <textarea id="subject" name="subject" rows={8} autoComplete="subject" className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
              </div>
              <div className="sm:col-span-6">
                <div className="mt-2">
                  <button className="mt-1 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Send</button>
                </div>
              </div>
            </div>
          </div>
        </form>
    </div>
  )
}

export default CommentForm