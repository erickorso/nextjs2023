import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Pagination({ info, page, setPage, size=20 }:any) {
    const {count, pages} = info

    const handlePrev = () => {
        if(page - 10 < 1){
            setPage(1)
        }else{
            setPage(page - 10)
        }
    } 
    
    const handleNext = () => {
        if(page + 10 > pages){
            setPage(pages)
        }else{
            setPage(page + 10)
        }
    }

    const handlePage = (p:number) => {
        setPage(p)
    }

    const handleCountStart = () => 1 + ((page - 1) * size)
    const handleCountEnd = () => {
        let end = handleCountStart() + size
        if(end > count){
            return count
        }
        return end
    }

    if(info){
        return (
            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700">
                            Showing <span className="font-medium">{handleCountStart() }</span> to <span className="font-medium">{handleCountEnd()}</span> of{' '}
                            <span className="font-medium">{count}</span> results
                        </p>
                    </div>
                    <div>
                        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                            <button
                                onClick={() => handlePrev()}
                                className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                            >
                                <span className="sr-only">Previous</span>
                                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                            {
                                page === pages ?
                                    <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
                                        ...
                                    </span>:
                                    <button
                                        aria-current="page"
                                        className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20 disabled"
                                        disabled={true}
                                    >
                                        {page}
                                    </button>
                            }
                            {
                                page < pages - 1 ?
                                    <button
                                        onClick={() => handlePage(page + 1)}
                                        className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                                    >
                                        {page + 1}
                                    </button>
                                    : null
                            }
                            {
                                page + 7 < pages ?
                                    <>
                                        <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
                                            ...
                                        </span>
                                        <button
                                            onClick={() => handlePage(page + 8)}
                                            className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                                        >
                                            {page + 8}
                                        </button>
                                    </>
                                    : null
                            }
                            {
                                page + 8 < pages ?
                                        <button
                                            onClick={() => handlePage(page + 9)}
                                            className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                                        >
                                            {page + 9}
                                        </button>:
                                        
                                    <button
                                        onClick={() => handlePage(pages)}
                                        className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                                    >
                                        {pages}
                                    </button>
                            }
                            <button
                                onClick={() => handleNext()}
                                className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                            >
                                <span className="sr-only">Next</span>
                                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }else{
        return <></>
    }
}
