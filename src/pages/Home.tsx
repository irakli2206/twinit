import React, { useState } from 'react'
import { HiDocumentReport } from 'react-icons/hi'
import { IconContainer } from '../components/home/IconContainer'
import { Radar } from '../components/home/Radar'
import { AiFillDollarCircle } from 'react-icons/ai'
import DetachedBanner from '../components/DetachedBanner'
import { LightButton } from '../components/Elements'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { US, GE, CN, BH, AR, CZ, DE } from 'country-flag-icons/react/3x2'
import { UpdateModal } from '../components/Modal'


const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const navigate = useNavigate()

    const handleModalClose = () => {
        setIsModalOpen(false)
    }

    return (
        <div className='h-full relative bg-blue-50/20'>
            <div className="relative isolate px-6 pt-14 lg:px-8">

                <div className="mx-auto max-w-2xl pt-24">
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -10
                        }}

                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                bounce: 0,
                                delay: 0
                            }
                        }}
                    >
                        <DetachedBanner label="Check out the new Wiki feature." onClick={() => setIsModalOpen(true)} />
                    </motion.div>
                    <div className="text-center">
                        <motion.h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
                            initial={{
                                opacity: 0,
                                x: -10
                            }}

                            animate={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    bounce: 0,
                                    delay: 0.1
                                }
                            }}
                        >
                            Best place for your country research
                        </motion.h1>
                        <motion.p className="mt-6 text-lg leading-8 text-gray-600"
                            initial={{
                                opacity: 0,
                                x: -10
                            }}

                            animate={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    bounce: 0,
                                    delay: 0.2
                                }
                            }}
                        >
                            Comprehensive site offering in-depth insights and resources for thorough country research exploration.
                        </motion.p>
                        <motion.div className="mt-10 flex items-center justify-center gap-x-6"
                            initial={{
                                opacity: 0,
                                x: -10
                            }}

                            animate={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    bounce: 0,
                                    delay: 0.3
                                }
                            }}
                        >
                            <LightButton size='lg' variant='info' onClick={() => navigate("countries")} >Get Started</LightButton>
                        </motion.div>
                    </div>
                </div>

            </div>


            <RadarDecoration />
            <UpdateModal isOpen={isModalOpen} onConfirm={handleModalClose} close={handleModalClose} title="New Update" description='You can now view even more detailed information for every country by being redirected to Wikipedia.' />

        </div>
    )
}



const RadarDecoration = () => {

    return (
        <div className="absolute bottom-0 top-auto flex h-96 w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4">
            <div className="mx-auto w-full max-w-3xl">
                <div className="flex w-full  items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
                    <IconContainer
                        text="Bahrain"
                        delay={0.2}
                        icon={<BH className=" p-2 text-blue-500  mix-blend-multiply" />} />
                    <IconContainer
                        delay={0.4}
                        text="Georgia"
                        icon={<GE className=" p-2 text-blue-500  mix-blend-multiply" />}
                    />
                    <IconContainer
                        text="Argentina"
                        delay={0.3}
                        icon={<AR className=" p-2 text-blue-500  mix-blend-multiply" />}
                    />
                </div>
            </div>
            <div className="mx-auto w-full max-w-md">
                <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
                    <IconContainer
                        text="Czechia"
                        delay={0.5}
                        icon={<CZ className="p-2 text-blue-500  mix-blend-multiply" />}
                    />
                    <IconContainer
                        text="Germany"
                        icon={
                            <DE className=" p-2 text-blue-500  mix-blend-multiply" />
                        }
                        delay={0.8}
                    />
                </div>
            </div>
            <div className="mx-auto w-full max-w-3xl">
                <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
                    <IconContainer
                        delay={0.6}
                        text="China"
                        icon={<CN className=" p-2 text-blue-500  mix-blend-multiply" />}
                    />
                    <IconContainer
                        delay={0.7}
                        text="USA"
                        icon={<US className=" p-2 text-blue-500  mix-blend-multiply" />}
                    />
                </div>
            </div>

            <Radar className="absolute -bottom-12" />
            <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
        </div>

    )
}

export default Home