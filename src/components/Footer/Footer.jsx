import React from 'react'
import { Link } from 'react-router-dom'
import { BsGlobe, BsFillPatchCheckFill } from 'react-icons/bs'
import { LiaFlagUsaSolid } from 'react-icons/lia'
import { PiCaretUpDownFill } from 'react-icons/pi'

const Footer = () => {

    const data = {
        "Get to Know Us": ["Careers", "Blog", "About Amazon", "Investor Relations", "Amazon Devices", "Amazon Science"],
        "Make Money with Us" : ["Sell products on Amazon", "Sell on Amazon Business", "Sell apps on Amazon", "Become an Affiliate", "Advertise Your Products", "Self-Publish with Us", "Host an Amazon Hub", "› See More Make Money with Us"],
        "Amazon Payment Products" : ["Amazon Business Card", "Shop with Points", "Reload Your Balance", "Amazon Currency Converter"],
        "Let Us Help You" : ["Amazon and COVID-19", "Your Account", "Your Orders", "Shipping Rates & Policies", "Returns & Replacements", "Manage Your Content and Devices", "Amazon Assistant", "Help"]
    }

    const jsx = []

    for(let key in data){
        jsx.push(
            <ul className='flex flex-col gap-[0.6rem] lg:gap-[0.8rem] lg:w-[13rem]' key={key}>
                <h4 className='font-semibold text-[0.85rem] lg:text-[0.93rem]'>{key}</h4>
                {data[key].map((item) => <Link to="#" className='text-[0.7rem] lg:text-[0.8rem] hover:underline' key={item}>{item}</Link>)}
            </ul>
        )
    }

  return (
    <footer className='text-white'>
        <button className='bg-[#37475a] w-full p-[1rem] text-[0.75rem] font-medium hover:bg-gray-600' onClick={() => window.scrollTo(0,0)}>Back to Top</button>
        <div className='bg-[#232f3e] divide-y-[1px] divide-gray-600'>
            <div className='px-[2rem] lg:px-[9rem] py-[3rem] w-full container'>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-[3rem] lg:gap-[8rem]'>
                    {jsx}
                </div>
            </div>
            <div className='justify-center flex flex-col lg:flex-row items-center py-[2rem] gap-[2rem] lg:gap-[3rem]'>
                <a href="/"><img src="/logo.png" alt="" className="w-[4rem] lg:w-[5rem]"/></a>
                <ul className='flex gap-[0.4rem] flex-wrap'>
                    <button className='px-[0.3rem] lg:px-[0.5rem] py-[0.2rem] lg:py-[0.3rem] pr-[1.5rem] lg:pr-[2.3rem] border border-gray-400 rounded-sm flex items-center gap-[0.4rem] text-[0.8rem] relative'>
                        <BsGlobe/>
                        <span className='text-[0.76rem]'>English</span>
                        <PiCaretUpDownFill className='absolute right-[0.4rem] text-gray-500'/>
                    </button>
                    <button className='px-[0.3rem] lg:px-[0.5rem] py-[0.2rem] lg:py-[0.3rem] pr-[1rem] lg:pr-[1.3rem] border border-gray-400 rounded-sm flex items-center gap-[0.4rem] text-[0.8rem] relative'>
                        $ <span className='text-[0.76rem]'>USD - U.S. Dollar</span>
                    </button>
                    <button className='px-[0.3rem] lg:px-[0.5rem] py-[0.2rem] lg:py-[0.3rem] pr-[1rem] lg:pr-[1.3rem] border border-gray-400 rounded-sm flex items-center gap-[0.4rem] text-[0.8rem] relative'>
                        <LiaFlagUsaSolid/>
                        <span className='text-[0.76rem]'>United States</span>
                    </button>
                </ul>
            </div>
        </div>
        <div className='bg-[#131a22] text-center text-[0.7rem] py-[2rem] flex flex-col gap-[1.5rem] lg:gap-[0.2rem]'>
            <ul className='flex flex-col lg:flex-row items-center gap-[0.3rem] lg:gap-[1rem] justify-center'>
                <Link to="#" className='hover:underline'>Conditions of Use</Link>
                <Link to="#" className='hover:underline'>Privacy Notice</Link>
                <span className='flex gap-[0.8rem]'>
                    <Link to="#" className='hover:underline'>Your Ads Privacy Choices</Link>
                    <BsFillPatchCheckFill className='text-blue-500 text-[1rem]'/>
                </span>
            </ul>
            <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
        </div>
    </footer>
  )
}

export default Footer
