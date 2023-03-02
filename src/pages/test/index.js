import React, { useState, useEffect } from 'react';
import { UserIcon } from '@heroicons/react/20/solid'
import axios from 'axios';
import MainTemplate from '@/templates/main'
import Pagination from '@/components/pagination'
import debounce from '@/hooks/debounce'


const ITEMS_API_URL = 'https://rickandmortyapi.com/api/character';
const DEBOUNCE_DELAY = 500;

export default function Autocomplete() {

    const [items, setItems] = useState([])
    const [info, setInfo] = useState()
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState('')
    const [page, setPage] = useState(1)

    const handleQuery = (query) => query ? `&name=${query}` : ''

    const itemsService = (url, query, method = 'GET') => {
        setLoading('loading')
        const options = { method, url: `${url}?page=${page}${handleQuery(query)}` };
        axios.request(options).then(function (response) {
            setItems(response.data.results)
            setInfo(response.data.info)

        }).catch(function (error) {
            console.error({ error });
            setItems([])
            setInfo(null)
        });
        setLoading('loaded')
    }

    const handleChange = (e) => {
        const value = e.target.value;
        if (value !== '') {
            setQuery(value)
        }
    }

    const debouncedSearch = debounce(query, DEBOUNCE_DELAY)

    useEffect(() => {
        if (loading === '') {
            itemsService(ITEMS_API_URL, debouncedSearch)
        }
    })

    useEffect(() => {
        itemsService(ITEMS_API_URL, debouncedSearch)
    }, [debouncedSearch, page])


    return (
        <MainTemplate className="wrapper">
            <div className="control">
                <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center pl-3">
                        <UserIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        className="block w-full p-3 rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Search..."
                        onChange={handleChange}
                    />
                </div>
            </div>
            {
                loading === 'loading' ? <h3>Loading...</h3> : null
            }
            {
                !items[0] ? <h3>No items found!</h3> : null
            }
            {
                (items[0]) ? (
                    <div className="bg-white">
                        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                {items.map((item) => (
                                    <div key={item.id} className="group relative">
                                        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <div>
                                                <h3 className="text-sm text-gray-700">
                                                    <a href={item.url}>
                                                        <span aria-hidden="true" className="absolute inset-0" />
                                                        {item.name}
                                                    </a>
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-500">Origin:{item.origin.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Pagination page={page} setPage={setPage} info={info} />
                    </div>
                ) : null
            }
        </MainTemplate>
    );
}
