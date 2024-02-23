import { useState } from "react"

export default function BreakPoints() {
    const [show, setShow] = useState(true)
    return (
        <div className='fixed z-10 pointer-events-auto'>
            {show && (
                <>
                    <div className='fixed left-[640px] top-0 bottom-0 w-[2px] bg-zinc-500' />
                    <div className='fixed left-[768px] top-0 bottom-0 w-[2px] bg-zinc-600' />
                    <div className='fixed left-[1024px] top-0 bottom-0 w-[2px] bg-zinc-700' />
                    <div className='fixed left-[1280px] top-0 bottom-0 w-[2px] bg-zinc-800' />
                    <div className='fixed left-[1536px] top-0 bottom-0 w-[2px] bg-zinc-900' />
                </>
            )}
            <button
                className={`fixed z-50 flex justify-center items-center top-10 left-10 w-16 h-16 rounded-full bg-zinc-800 text-zinc-100 text-lg sm:after:content-['sm'] md:after:content-['md'] lg:after:content-['lg'] xl:after:content-['xl'] 2xl:after:content-['2xl']`}
                onClick={() => setShow(!show)}
            />
        </div>
    )
}