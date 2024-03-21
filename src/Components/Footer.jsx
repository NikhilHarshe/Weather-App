import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./assets/picsel-Logo.png"
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <div className=' text-gray-400 bg-gray-900 body-font'>
            <footer class="mx-auto">
                <div class=" w-11/12 container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
                        <Link class="flex title-font font-medium items-center md:justify-start justify-center text-white">
                            <img src={logo} alt="Logo" className="w-14 h-14" />
                            <span className="ml-3 text-xl">PICSEL</span>
                        </Link>
                        <p class="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
                    </div>
                    <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <Link class="text-gray-400 hover:text-white">First Link</Link>
                                </li>
                                <li>
                                    <Link class="text-gray-400 hover:text-white">Second Link</Link>
                                </li>
                                <li>
                                    <Link class="text-gray-400 hover:text-white">Third Link</Link>
                                </li>
                                <li>
                                    <Link class="text-gray-400 hover:text-white">Fourth Link</Link>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <Link class="text-gray-400 hover:text-white">First Link</Link>
                                </li>
                                <li>
                                    <a class="text-gray-400 hover:text-white">Second Link</a>
                                </li>
                                <li>
                                    <Link class="text-gray-400 hover:text-white">Third Link</Link>
                                </li>
                                <li>
                                    <Link class="text-gray-400 hover:text-white">Fourth Link</Link>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav class="list-none mb-10">
                            <li>
                                    <Link class="text-gray-400 hover:text-white">First Link</Link>
                                </li>
                                <li>
                                    <a class="text-gray-400 hover:text-white">Second Link</a>
                                </li>
                                <li>
                                    <Link class="text-gray-400 hover:text-white">Third Link</Link>
                                </li>
                                <li>
                                    <Link class="text-gray-400 hover:text-white">Fourth Link</Link>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav class="list-none mb-10">
                            <li>
                                    <Link class="text-gray-400 hover:text-white">First Link</Link>
                                </li>
                                <li>
                                    <a class="text-gray-400 hover:text-white">Second Link</a>
                                </li>
                                <li>
                                    <Link class="text-gray-400 hover:text-white">Third Link</Link>
                                </li>
                                <li>
                                    <Link class="text-gray-400 hover:text-white">Fourth Link</Link>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-800 bg-opacity-75">
                    <div class=" w-11/12 container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p class="text-gray-400 text-sm text-center sm:text-left">© 2020 Tailblocks —
                            <a href="https://twitter.com/knyttneve" class="text-gray-500 ml-1" rel="noopener noreferrer" target="_blank">@knyttneve</a>
                        </p>
                        <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <Link class="text-gray-400">
                                <FaFacebookF className=' w-5 h-5' />
                            </Link>
                            <Link class="ml-3 text-gray-400">
                                <FaTwitter className=' w-5 h-5' />
                            </Link>
                            <Link class="ml-3 text-gray-400">
                                <FaInstagram className=' w-5 h-5' />
                            </Link>
                            <Link class="ml-3 text-gray-400">
                                <FaLinkedinIn className=' w-5 h-5'/>
                            </Link>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
