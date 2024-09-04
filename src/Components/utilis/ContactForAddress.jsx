import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Field, Label, Switch } from '@headlessui/react'
import axios from 'axios'

const ContactForAddress = () => {
    const [obj, setobj] = useState({})
    console.log(obj, "objj");
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const SetValues = (e) => {
        setobj({ ...obj, [e.target.name]: e.target.value })
    }

    const Send = async (e) => {
        
        e.preventDefault(); 
        setIsLoading(true);
        try {
            const response = await axios.post("http://localhost:4000/contact-form", obj);
            console.log(response, "response");
            setIsSuccess(true);
            setobj({}); // Clear the form fields
            setTimeout(() => setIsSuccess(false), 3000); // Hide the success message after 3 seconds
        } catch (error) {
            console.error("Error sending message:", error);
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <>
            <div className="isolate bg-white w-full lg:m-auto">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    />
                </div>

                <form action="#" method="POST" className="lg:mx-auto lg:max-w-3xl w-full lg:px-7 px-0 rounded-lg">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                First name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    onChange={SetValues}
                                    id="first-name"
                                    value={obj.firstname || ''}
                                    name="firstname"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                Last name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    onChange={SetValues}
                                    id="last-name"
                                    value={obj.lastname || ''}
                                    name="lastname"
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2 mt-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    onChange={SetValues}
                                    id="email"
                                    value={obj.email || ''}
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2 mt-2">
                            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                Message
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    onChange={SetValues}
                                    id="message"
                                    value={obj.message || ''}
                                    name="message"
                                    rows={4}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                />
                            </div>
                        </div>

                    </div>
                    <div className="mt-10">
                        <button
                            onClick={Send}
                            type="submit"
                            className={`${isLoading ? 'bg-[rgb(198,33,33)]' : 'bg-[rgb(254,49,49)]'
                                } text-white sm:px-10 px-0 sm:w-max w-[100%] sm:py-3 py-3 rounded-md text-[16px] font-medium z-50 relative group overflow-hidden mb-5`}
                            disabled={isLoading}
                            style={{ cursor: isLoading ? 'wait' : 'pointer' }}
                        >
                            {isLoading ? 'Submitting...' : isSuccess ? 'Submit Successful' : 'Submit Form'}
                            <div className='h-full w-0 absolute top-0 left-0 group-hover:w-full duration-200 bg-[rgb(198,33,33)] -z-50'></div>
                        </button>
                        
                    </div>
                </form>
            </div>

        </>
    )
}

export default ContactForAddress