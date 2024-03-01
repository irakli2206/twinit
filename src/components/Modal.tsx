import React from 'react'
import { LightButton } from './Elements'
import UpdateImg from '../assets/twinit-modal.png'

type GenericModalProps = {
    isOpen: boolean
    children: React.ReactNode
}

type UpdateModalProps = {
    isOpen: boolean
    title: string
    description: string
    onConfirm: () => void
    close: () => void
}

const Modal = ({ isOpen, children }: GenericModalProps) => {
    return (
        <>
            {isOpen && <div id="default-modal" tabIndex={-1} aria-hidden="true" className="bg-black/20 h-screen overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 ">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    {children}
                </div>
            </div>}


        </>
    )
}


export const UpdateModal = ({ isOpen, title, description, onConfirm, close }: UpdateModalProps) => {

    return (
        <Modal isOpen={isOpen}>
            <div className="relative bg-white rounded-lg shadow ">

                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                    <h3 className="text-xl font-semibold text-gray-900  ">
                        {title}
                    </h3>
                    <button onClick={close} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-hide="default-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>

                <div className="p-4 md:p-5 space-y-4">
                    <img src={UpdateImg} alt="" />
                    <p className="text-base leading-relaxed text-gray-500 ">
                        {description}
                    </p>

                </div>

                <div className="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b ">
                    <LightButton variant='info' onClick={onConfirm} >Got It</LightButton>
                </div>
            </div>
        </Modal>
    )
}

