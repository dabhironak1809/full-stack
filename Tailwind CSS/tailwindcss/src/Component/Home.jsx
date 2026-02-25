import React from 'react'

export default function Home() {
  return (

    <>
      {/* exmple 1  */}
      {/* <div className='border-2 border-sky-400 h-82 rounded-xl m-4 bg-amber-200 text-pink-600 mx-56 justify-centner'>
        <div className='font-bold font-serif text-center'>
          <p className='text-blue-100'>hello</p>
          <p className='bg-blue-400 text-pink-400 '>hello</p>

          <p className='bg-gray-200 mt-4 border-2 rounded-3xl hover:bg-green-300 hover:border-blue-500' >hello</p>

          <p className='shadow-xl mt-5 bg-lime-200 rounded-2xl p-3   '>hello</p>

          <button className='bg-white border-purple-200 text-purple-700 hover:border-transparent hover:bg-purple-600 hover:text-white mt-5 px-20 rounded-2xl'>button</button>

          <p>dark</p>

          <button className='mt-2 bg-sky-500 hover:bg-sky-700 text-white px-20 rounded-2xl'>button 2</button>

        </div>
      </div> */}

      {/* grid */}

      {/* <div className='grid grid-cols-2 sm:grid-cols-3 gap-2.5'> */}
      {/* <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <button className='bg-blue-300'>1</button>
        <button className='bg-blue-300'>1</button>
        <button className='bg-blue-300'>1</button>
        <button className='bg-blue-300'>1</button>
        <button className='bg-blue-300'>1</button>
        <button className='bg-blue-300'>1</button>
        <button className='bg-blue-300'>1</button>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        <div class="bg-blue-200 p-4 sm:text-2xl">Item 1</div>
        <div class="bg-blue-200 p-4 text-center">Item 2</div>
        <div class="bg-blue-200 p-4">Item 3</div>
        <div class="bg-blue-200 p-4">Item 4</div>
        <div class="bg-blue-200 p-4">Item 4</div>
      </div> */}

      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 '>
        <button className='bg-sky-400 sm:text-base'>hello</button>
        <button className='bg-yellow-300 md:text-2xl'>hello</button>
        <button className='bg-sky-400'>hello</button>
        <button className='bg-sky-400'>hello</button>
      </div>

      {/* sm <= 640 md */}
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-5 mb-5">
        <div class="bg-red-300 p-4">1</div>
        <div class="bg-green-300 p-4">2</div>
        <div class="bg-blue-300 p-4">3</div>
        <div class="bg-yellow-300 p-4">4</div>
        <div class="bg-purple-300 p-4">5</div>
      </div>


      {/* <div className='bg-black w-auto  p-48'>
        <div className='flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-4 bg-white w-auto  '>
          <img className='mx-auto block h-24 rounded-full sm:mx-0  sm:shrink-0' src="/logo/ecommerce-websites-logo-design20.jpg"/>
          <div className='space-y-0.5 text-center sm:text-left'>
            <div className='space-y-0.5'>
              <p className='text-lg font-semibold text-black sm:text-xl'>Demo</p>
              <p className='font-medium text-gray-400'>software</p>
            </div>
            <button className='border rounded-3xl px-4 border-purple-300 text-purple-700 hover:border-transparent hover:bg-purple-300 hover:text-white active:bg-purple-900'>submit</button>
          </div>
        </div>
        <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 bg-white">
          <img class="mx-auto block h-22 rounded-full sm:mx-0 sm:shrink-0" src="/logo/ecommerce-websites-logo-design20.jpg" alt="" />
          <div class="space-y-2 text-center sm:text-left">
            <div class="space-y-0.5">
              <p class="text-lg font-semibold text-black">Erin Lindford</p>
              <p class="font-medium text-gray-500">Product Engineer</p>
            </div>
            <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ">
              Message
            </button>
          </div>
        </div>
      </div> */}

      {/* <div className='flex flex-col hover:bg-amber-300'>
        <p>hello</p>
        <p>hello</p>
      </div> */}


      {/* <ul className='bg-gray-700 w-80 rounded-r-2xl pl-4 pt-0.5 pb-0.5 '>
        <li className='flex py-4 first:pt-0 last:pt-0 mt-5'>
          <img className='h-10 w-10 rounded-full mt-1.5' src="/logo/ecommerce-websites-logo-design20.jpg" />
          <div className='ml-3 overflow-hidden'>
            <p className='text-sm font-medium text-gray-900 dark:text-white'>ronak dabhi </p>
            <p className='truncate text-sm text-gray-500 dark:text-gray-400 '>dabhironak1809@gmail.com</p>
          </div>
        </li>
      </ul> */}


      {/* <table>
        <tbody>
          <tr className='odd:bg-amber-300 even:bg-pink-400 dark:odd:bg-gray-500 dark:even:bg-gray-800'>
            <td className='px-4 py-2 border'>Jane Cooper</td>
            <td className='px-4 py-4 border'>Regional Paradigm Technician</td>
            <td className='px-2 py-3 border'>leonard.krasner@example.com</td>
          </tr>
        </tbody>
      </table> */}


      {/* -> odd and even change a color for table  */}
      {/* <table className="min-w-full border-collapse">
        <tbody>
          <tr className="odd:bg-amber-300 even:bg-pink-400  ">
            {/* ->  <tr className=" dark:odd:bg-gray-500 dark:even:bg-gray-800"> *}// comment close 

            <td className="px-4 py-2 border">Jane Cooper</td>
            <td className="px-4 py-2 border">Regional Paradigm Technician</td>
            <td className="px-4 py-2 border">leonard.krasner@example.com</td>
          </tr>
          <tr className="odd:bg-amber-300 even:bg-pink-400  ">
           
            <td className="px-4 py-2 border">Jane Cooper</td>
            <td className="px-4 py-2 border">Regional Paradigm Technician</td>
            <td className="px-4 py-2 border">leonard.krasner@example.com</td>
          </tr>
        </tbody>
      </table> */}


      {/*  form tage and that type info  */}
      {/* <input
        type="text"
        placeholder="Enter your name"
        class="mt-5 border px-3 py-2   w-full focus:border-green-500 focus:ring-4 focus:ring-pink-500 rounded-2xl"
      />

      <input type='email' className='w-full border mt-5 py-2 px-2 rounded-2xl' placeholder='enter your password ' />
      <input type='password' className='w-full border mt-5 py-2 px-2 rounded-2xl' placeholder='enter your email ' /> */}


      {/* <div className='w-50'>
        <label className='flex items-center gap-4 p-2 pb-3 border cursor-pointer   '>
          <input type='radio' className='w-4 h-4 text-blue-300 border-amber-400 focus:ring-blue-400 mt-2' />
          <span >
            google pay
          </span>
        </label>
      </div> */}



      {/* <div className="flex items-center gap-2">
        <input type="checkbox" id="todo1" className="peer w-4 h-4" />
        <label htmlFor="todo1" className="p-2 text-center cursor-pointer">
          Create a to-do list
        </label>
      </div> */}

      {/* ==== */}

      <div className='group bg-gray-600 hover:bg-sky-500' >
        <h3 className='text-gray-400 group-hover:text-white'>hello</h3>
        <p className='text-gray-400 group-hover:text-green-400'>Create a new project from a variety of starting templates</p>
      </div>

      {/* ===== */}

      <ul role="list" class="max-w-sm space-y-2 mt-5">
        <li class="group/item flex items-center justify-between rounded-lg border p-3 hover:bg-gray-50">
          <span class="text-gray-800 font-medium">
            John Doe
          </span>
          <a class="group/edit invisible flex items-center gap-1 text-sm text-blue-600 
             group-hover/item:visible" >
            <span class="group-hover/edit:text-gray-700">
              Call
            </span>
            <svg
              class="h-4 w-4 transition-transform 
               group-hover/edit:translate-x-0.5 
               group-hover/edit:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20">
              <path d="M2 3l3-1 3 6-2 1c1 2 3 4 5 5l1-2 6 3-1 3c-8 0-15-7-15-15z" />
            </svg>
          </a>
        </li>
      </ul>
      {/* = */}

      <ul className='max-w-sm hover:bg-gray-200 rounded-2xl mt-5 '>
        <li className='group/item flex items-center justify-between p-6 border rounded-2xl'>
          <span class="text-gray-800 font-medium">
            John Doe
          </span>
          <a className='group/edit invisible   group-hover/item:visible'>
            <span className='group-hover/edit:text-gray-400 flex items-center gap-1 text-sky-400'>
              Call
              <svg class="h-4 w-4 transition-transform 
               group-hover/edit:translate-x-0.5 
               group-hover/edit:text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M2 3l3-1 3 6-2 1c1 2 3 4 5 5l1-2 6 3-1 3c-8 0-15-7-15-15z" />
              </svg></span>
          </a>
        </li>
      </ul>

      {/* === */}

      {/* <form>
        <label className='block'>
          <span >Email</span>
          <input type='email' className='peer border'></input>

          <input type='email' className='peer w-full border mt-5 py-2 px-2 rounded-2xl' placeholder='enter your email id' />
          <p className='invisible peer-invalid:visible'>please provide a valif email as @ and name/number affres</p>
        </label>
      </form> */}

      {/* <label>
        <input type="email" class="peer border rounded-2xl" />
        <p class="peer-invalid:text-red-500">Email</p>
      </label> */}

      {/* = */}

      <fieldset>
        <legend>Published Status</legend>
        {/* any radio are pre check to use defaultChecked not a checked */}
        <input id="draft" className='peer/draft'
          type='radio' name="status" defaultChecked />
        <label for="draft" className='peer-checked/draft:text-sky-500'>Draft</label>

        <input id='published' className='peer/published' type='radio' name='status' />
        <label for="published" className='peer-checked/published:text-sky-500' >published</label>

        <div className='hidden peer-checked/draft:block'>Drafts are only visible to administrators.</div>
        <div className='hidden peer-checked/published:block' >Your post will be publicly visible on your site.</div>
      </fieldset>


      {/* == */}
      <form className='mb-4' >
        <label for="email"> Email</label>
        <input id='email' name='email' type='email' className='is-dirty peer border rounded-2xl' />
        <div className='peer-[.is-dirty]:peer-required::block hidden'>This field is required.</div>
      </form>

      <label  >
        <span className="text-shadow-gray-700 after:text-red-500 after:content-['*'] ">Email</span>
        <input type='email' name='email' className='border' placeholder='name@example.com' />
      </label>

      {/* =-= */}

      {/* <div className='bg-gray-700 mt-4 w-2/3'>
        <blockquote className='text-center text-2xl font-semibold text-gray-900 italic dark:text-white'>When you look
          <span className='relative inline-block before:absolute before:-inset-1 before:-skew-2 before:bg-pink-500'>
            <span className='relative text-white dark:text-gray-950'>annoyed</span>
          </span>
          all the time, people think that you're busy.
        </blockquote>
      </div> */}

      <blockquote className='mt-5 mb-10 text-center text-2xl font-semibold text-gray-600 italic w-2xl bg-lime-400'>when you look
        <span className='relative'>
          <span className='absolute -inset-1 block -skew-y-3 bg-pink-500'></span>
          <span className='relative text-white'>annoyed</span>
        </span>
        all the time, people think that you're busy.
      </blockquote>

      {/* == [search icon ] ==  */}
      <input type='text' placeholder='search for anything.. ' name='search' className='border mb-5 ml-10 rounded-2xl placeholder:text-red-500 placeholder:italic' />

      <br />

      <input type='file' className='mb-5 file:mr-4 file:rounded-full file:border-0  file:py-2 file:text-sm file:font-semibold  dark:file:bg-violet-600 dark:file:text-red-100 dark:hover:file:bg-violet-500 ' />

      <ul className='list' class='list-disc marker:text-sky-400 ml-10'>
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>

      {/* == */}

      <div className='text-gray-700'>
        <p className='selection:bg-fuchsia-300 selection:text-fuchsia-800'> So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my
          way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all
          living things but I tell you Jerry at that moment, I <em>was</em> a marine biologist.
        </p>
      </div>

      <div>
        <p className='first-letter:float-left first-letter:mr-3 first-letter:font-bold first-letter:text-7xl first-letter:text-gray-900 first-line:tracking-widest first-line:uppercase w-80 mt-5 mb-5'> Well, let me tell you something, funny boy. Y'know that little stamp, the one that says "New York Public Library"?
        </p>
      </div>

      <button type='button' className='bg-indigo-500' disa></button>


      <label className='block bg-gray-800'>
        <span className='block text-sm font-medium text-gray-700'>Social Security Number</span>
        <input className='border border-gray-200 placeholder-gray-400 contrast-more:border-gray-400 contrast-more:placeholder-gray-500' placeholder='0000000000' />

        <p className='text-gray-100 opacity-10 contrast-more:opacity-100'>We need this to steal your identity.</p>
      </label>

      <br />

      <label class="flex items-center gap-3 cursor-pointer mb-5">
        <input
          type="radio"
          name="color"
          class="appearance-none forced-colors:appearance-auto
           w-4 h-4 border border-gray-500 rounded-full
           checked:bg-cyan-500"
        />
        <p class="hidden forced-colors:block">
          Cyan
        </p>
        <div class="w-6 h-6 bg-cyan-200 forced-colors:hidden rounded"></div>
        <div class="w-6 h-6 bg-cyan-500 forced-colors:hidden rounded"></div>

      </label>

      <br />

      <fieldset aria-label='Choose a memory option ' className='w-80 bg-gray-500'>
        <div className='flex items-center justify-between'>
          <div>RAM</div>
          <a href='#'>see performance specs</a>
        </div>
        <div className='mt-4 grid grid-cols-6 gap-2 pointer-coarse:grid-cols-3 pointer-coarse:gap-4'>
          <label className='p-2 pointer-coarse:p-4'>
            <input type='radio' name='memory-option' value='4 GB' className='sr-only' />
            <span>4 GB</span>
          </label>
        </div>
      </fieldset>

      <br />

      <details class="border border-transparent open:border-black/10 open:bg-gray-100 ..." open>
        <summary class="text-sm leading-6 font-semibold text-gray-900 select-none">Why do they call it Ovaltine?</summary>
        <div class="mt-3 text-sm leading-6 text-gray-600">
          <p>The mug is round. The jar is round. They should call it Roundtine.</p>
        </div>
      </details>


      <br />
      <form>
        <legend>Notification preferences</legend>
        <fieldset>
          <input type="radio" name="field" />
          <label> Custom </label>
          <fieldset inert class="inert:opacity-50">

          </fieldset>
          <input type="radio" name="field" />
          <label> Everything </label>
        </fieldset>
      </form>


    </>

  )
}
