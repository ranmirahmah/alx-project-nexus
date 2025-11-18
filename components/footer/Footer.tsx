import React from 'react'

const Footer = () => {
  return (
    <div className="flex items-center justify-center px-8 py-4 gap-40 bg-amber-700">
      <div>
        <section>
            <h1 className='text-xl font-bold py-4'>About Us</h1>
        </section>
            <ul>
                <li className='pb-2'>Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Nam mauris risus, lobortis a <br />
                 commodo at, varius sit amet ipsum.</li>
                <li className='pb-2'>1</li>
                <li className='pb-2'>1</li>
            </ul>
      </div> 

      <div>
        <section>
            <h1 className='text-xl font-bold py-4'>Company</h1>
        </section>
            <ul className=''>
                <li className='pb-2'>About Us</li>
                <li className='pb-2'>Careers</li>
                <li className='pb-2'>Blogs</li>
                <li className='pb-2'>FAQ’s</li>
                <li className='pb-2'>Contact</li>
            </ul>
      </div>

      <div>
        <section>
            <h1 className='text-xl font-bold py-4'>Services</h1>
        </section>
            <ul>
                <li className='pb-2'>Jobs</li>
                <li className='pb-2'>Companies</li>
                <li className='pb-2'>Candidates</li>
                <li className='pb-2'>Pricing</li>
                <li className='pb-2'>Partners</li>
            </ul>
      </div>

      <div>
        <section>
            <h1 className='text-xl font-bold py-4'>Support</h1>
        </section>
            <ul>
                <li className='pb-2'>Privacy Policy</li>
                <li className='pb-2'>Terms of Use</li>
                <li className='pb-2'>Help center</li>
                <li className='pb-2'>Updates</li>
                <li className='pb-2'>Documentation</li>
            </ul>
      </div>

      <div>
        <section>
            <h1 className='text-xl font-bold py-4'>Connect​</h1>
        </section>
            <ul>
                <li className='pb-2'></li>
                <li className='pb-2'></li>
                <li className='pb-2'></li>
                <li className='pb-2'></li>
            </ul>
      </div>
    </div>
  )
}

export default Footer;
