import { AnchorHTMLAttributes, ButtonHTMLAttributes, Fragment, InputHTMLAttributes, LinkHTMLAttributes, useEffect, useMemo, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import classNames from 'classnames'
import { MdArrowOutward } from "react-icons/md";
import { ContinentOptionT } from '../types/general';
import { defaultContinentOptions } from '../data';
import { MotionConfigProps, MotionProps, motion } from 'framer-motion';

type DropdownProps = {
    value: string | null
    onChange: (value: string) => void
    label: string
}



export const Dropdown = ({ label, value, onChange }: DropdownProps) => {
    let options = defaultContinentOptions

    useEffect(() => {
        if (value) {
            let curOptions = [...options]
            //first resetting options
            curOptions = curOptions.map(option => ({ ...option, active: false }))
            //setting the active option to active state
            curOptions[curOptions.findIndex(option => option.label === value)].active = true
            options = curOptions
        }

    }, [value])

    const activeOption = options.find(option => option.label === value)


    return (

        <Menu as="div" className="relative inline-block min-w-36 text-left self-end focus-within:!ring-blue-600" onChange={(e) => console.log(e)}>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div>
                <Menu.Button className="inline-flex mt-2 w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    {activeOption?.label}
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items onChange={e => console.log(e)} className="absolute  right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {options.map((option) => {

                            return (
                                <Menu.Item key={option.label} >
                                    {({ active }) => (
                                        <div
                                            onClick={() => onChange(option.label)}
                                            className={classNames('block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer', {
                                                'bg-gray-100 text-gray-900': option.label === value || active
                                            })}
                                        >
                                            {option.label}
                                        </div>
                                    )}
                                </Menu.Item>
                            )
                        })}


                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

type ButtonProps = MotionProps & ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: "sm" | "md" | "lg",
    title?: string,
    children?: string,
    variant?: "error" | "normal" | "info",
    withArrow?: boolean
}


export const LightButton = ({ size = 'md', title, children, variant, className = "", withArrow = false, ...props }: ButtonProps) => {
    return (
        <motion.button className={classNames(className + " text-black group drop-shadow-sm items-center gap-0.5 flex hover:drop-shadow-none transition-colors font-semibold bg-white border border-gray-300 focus:outline-none hover:bg-gray-100  rounded-md text-sm px-5 py-2.5 ", {
            "text-xs px-3 py-1 ": size === 'sm',
            "!border-red-300 !bg-red-50 hover:!bg-red-100 !text-red-600": variant === 'error',
            "!border-blue-300 !bg-blue-50 hover:!bg-blue-100  !text-blue-600 ": variant === 'info',
            "!bg-gray-300 !text-gray-400 !border-none pointer-events-none shadow-none": props.disabled
        })}
            {...props}
            initial={{
                boxShadow: "0px 0px 0px 0px #EAEAEA",
                scale: 1
            }}
            whileTap={{
                scale: 0.95
            }}
            whileFocus={{
                boxShadow: "0px 0px 0px 3px  #EAEAEA",
                transition: {
                    duration: 0.05, // Add a smooth transition for boxShadow

                }
            }}

        >
            {title || children}
            {withArrow && <MdArrowOutward size={16} className=' group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition' />}
        </motion.button>
    )
}

type LinkButtonProps = MotionProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
    size?: "sm" | "md" | "lg",
    title?: string,
    children?: string,
    variant?: "error" | "normal" | "info",
    withArrow?: boolean
}

export const LinkButton = ({ size = 'md', title, children, variant, className = "", withArrow = false, href, ...props }: LinkButtonProps) => {

    return (
        <motion.a href={href} className={classNames(className + " text-black group drop-shadow-sm items-center gap-0.5 flex hover:drop-shadow-none transition-colors font-semibold bg-white border border-gray-300 focus:outline-none hover:bg-gray-100  rounded-md text-sm px-5 py-2.5 ", {
            "text-xs px-3 py-1 ": size === 'sm',
            "!border-red-300 !bg-red-50 hover:!bg-red-100 !text-red-600": variant === 'error',
            "!border-blue-300 !bg-blue-50 hover:!bg-blue-100  !text-blue-600 ": variant === 'info',
        })}
            {...props}
            initial={{
                boxShadow: "0px 0px 0px 0px  #DAE7FE",
                scale: 1
            }}
            whileTap={{
                scale: 0.95
            }}
            whileFocus={{
                boxShadow: "0px 0px 0px 3px  #DAE7FE",
                transition: {
                    duration: 0.05, // Add a smooth transition for boxShadow

                }
            }}
        >
            {title || children}
            {withArrow && <MdArrowOutward size={16} className=' group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition' />}
        </motion.a>
    )
}

export const Spinner = () => {
    return (
        <div >
            <svg aria-hidden="true" className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span className="sr-only">Loading...</span>
        </div>
    )

}

export const LoadingOverlay = () => {
    return (
        <div className='h-screen w-screen absolute top-0 left-0 bg-gray-100/50 z-50 flex items-center justify-center '>
            <Spinner />
        </div>
    )
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string
}

export const Input = ({ label, ...props }: InputProps) => {
    return (
        <div className='w-full'>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-2">
                <input
                    {...props}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
    )
}