import React from 'react'

type Props = {
    label: string
    onClick: () => void
}

const DetachedBanner = ({ label, onClick }: Props) => {
    return (
        <div className="hidden sm:mb-8 sm:flex sm:justify-center" onClick={onClick}>
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-blue-500 ring-1 bg-blue-100/20 ring-blue-500/70 hover:ring-blue-500 hover:bg-blue-100/50 transition">
                {label}{' '}
                <a href="#" className="font-semibold text-blue-600">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
        </div>
    )
}

export default DetachedBanner