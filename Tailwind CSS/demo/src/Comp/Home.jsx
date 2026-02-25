import React from 'react'

export default function Home() {
    return (
        <>
            {/* <span class="box-decoration-slice bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white ...">
                Hello<br />World
            </span>
            <span class="box-decoration-clone bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white ...">
                Hello<br />World
            </span> */}


            {/* <div class="flex gap-1">
                <div class="size-14 grow-3 bg-amber-200">01</div>
                <div class="size-14 grow-7 bg-amber-400">02</div>
                <div class="size-14 grow-3 bg-sky-500">03</div>
            </div> */}

            <div class="flex ...">
                <div class="size-14 grow bg-sky-300">01</div>
                <div class="size-14 grow-0 bg-pink-400 ">02</div>
                <div class="size-14 grow bg-lime-400 ">03</div>
            </div>

            <div class="flex">
                <div class="w-14 flex-none bg-indigo-300">01</div>
                <div class="w-64 flex-1 bg-red-400">02</div>
                <div class="w-32 flex-1 bg-pink-500">03</div>
            </div>

            <div class="flex">
                <div class="w-14 flex-none bg-indigo-700">01</div>
                <div class="w-64 flex-initial bg-gray-500">02</div>
                <div class="w-32 flex-initial bg-green-600">03</div>
            </div>

            <div class="flex gap-5">
                <div class="w-14 flex-none bg-amber-200">01</div>
                <div class="w-64 flex-auto bg-amber-200">02</div>
                <div class="w-32 flex-auto bg-amber-200">03</div>
            </div>

            <div class="flex ...">
                <div class="size-14 flex-none bg-indigo-200">01</div>
                <div class="size-14 grow bg-indigo-600">02</div>
                <div class="size-14 flex-none bg-indigo-300">03</div>
            </div>


            <div class="flex gap-10">
                <div class="size-14 grow-3 bg-indigo-300">01</div>
                <div class="size-14 grow-7 bg-indigo-300">02</div>
                <div class="size-14 grow-3 bg-indigo-300">03</div>
            </div>


            <div class="flex justify-between mt-10">
                <div class="order-3 bg-indigo-300">01</div>
                <div class="order-1 bg-indigo-300">02</div>
                <div class="order-2 bg-indigo-300">03</div>
            </div>


            <div class="grid grid-cols-4 gap-4">
                <div className='bg-indigo-300'>01</div>
                <div className='bg-indigo-300'>02</div>
                <div className='bg-indigo-300'>03</div>
                <div className='bg-indigo-300'>04</div>
                <div>05</div>
                <div class="col-span-3 grid grid-cols-subgrid gap-4">
                    <div class="col-start-2">06</div>
                </div>
            </div>


            <div class="grid grid-cols-6 gap-4">
                <div class="col-span-4 col-start-2 bg-sky-100">01</div>
                <div class="col-start-1 col-end-3 bg-sky-400">02</div>
                <div class="col-span-2 col-end-7 bg-sky-400">03</div>
                <div class="col-start-1 col-end-7 bg-sky-400">04</div>
            </div>

            <div class="grid grid-cols-[4rem_auto_4rem] justify-stretch gap-10">
                <div className='bg-indigo-300 text-center'>01</div>
                <div className='bg-indigo-300  text-center'>02</div>
                <div className='bg-indigo-300 text-center'>03</div>
            </div>

            <div class="grid h-56 grid-cols-3 content-start text-center mt-3 gap-4 ...">
                <div className='bg-indigo-400 '>01</div>
                <div className='bg-indigo-400'>02</div>
                <div className='bg-indigo-400'>03</div>
                <div className='bg-indigo-400'>04</div>
                <div className='bg-indigo-400'>05</div>
            </div>

            <div class="grid h-56 grid-cols-3 content-stretch  gap-4 bg-lime-200">
                <div className='bg-indigo-400 text-center'>01</div>
                <div className='bg-indigo-400 text-center'>02</div>
                <div className='bg-indigo-400 text-center'>03</div>
                <div className='bg-indigo-400 text-center'>04</div>
                <div className='bg-indigo-400 text-center'>05</div>
            </div>

            <div className='mt-10'></div>

            <div class="h-16 w-36 bg-sky-400 opacity-20 ..."></div>
            <div class="-mt-8 bg-sky-300 w-30 ml-2">-mt-8</div>
            <div class="flex gap-5">
                <div class="w-1/2 bg-indigo-300 items-center text-center">w-1/2</div>
                <div class="w-1/2 bg-indigo-300 items-center text-center">w-1/2</div>
            </div>
            <div class="flex gap-5">
                <div class="w-2/5 bg-lime-400 text-center">w-2/5</div>
                <div class="w-3/5 bg-lime-400 text-center">w-3/5</div>
            </div>
            <div class="flex gap-5">
                <div class="w-1/3 bg-indigo-500 text-center">w-1/3</div>
                <div class="w-2/3 bg-indigo-500 text-center">w-2/3</div>
            </div>
            <div class="flex gap-5">
                <div class="w-1/4 bg-red-400 text-center">w-1/4</div>
                <div class="w-3/4 bg-red-400 text-center">w-3/4</div>
            </div>
            <div class="flex gap-5">
                <div class="w-1/5 bg-pink-400 text-center">w-1/5</div>
                <div class="w-4/5 bg-pink-400 text-center">w-4/5</div>
            </div>
            <div class="flex gap-5">
                <div class="w-1/6 bg-yellow-500 text-center">w-1/6</div>
                <div class="w-5/6 bg-yellow-500 text-center">w-5/6</div>
            </div>
            <div class="w-full bg-emerald-300 items-center">w-full</div>

            {/*  */}
            <div className='mt-10'></div>
            <div class="h-14 bg-linear-to-r from-cyan-500 to-blue-500 mt-1"></div>
            <div class="h-14 bg-linear-to-t from-sky-500 to-indigo-500 mt-1"></div>
            <div class="h-14 bg-linear-to-bl from-violet-500 to-fuchsia-500 mt-1"></div>
            <div class="h-14 bg-linear-65 from-purple-500 to-pink-500 mt-1"></div>


            <div class="size-18 rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700"></div>
            <div class="size-18 rounded-full bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%"></div>
            <div class="size-18 rounded-full bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%"></div>

            <div class="size-24 rounded-full bg-conic from-blue-600 to-sky-400 to-50%"></div>
            <div class="size-24 rounded-full bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600"></div>
            <div class="size-24 rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700"></div>


        </>


    )
}
