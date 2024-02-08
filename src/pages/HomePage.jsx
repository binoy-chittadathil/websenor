import React from 'react'

function HomePage() {
  return (
    <div>
        <div className='bg-blue-950 relative text-white top-20 homepageContainer pt-5 px-3 lg:px-28'>
        <div className='grid grid-cols-4 gap-4 md:flex items-center justify-between'>
            <img className='w-32' src="/images/s1.webp" alt="" />
            <img className='w-20' src="/images/s2.webp" alt="" />
            <img className='w-20' src="/images/s3.webp" alt="" />
            <img className='w-20' src="/images/s4.webp" alt="" />
            <img className='w-20' src="/images/s5.webp" alt="" />
            <img className='w-20' src="/images/s6.webp" alt="" />
            <img className='w-20' src="/images/s7.webp" alt="" />
            <img className='w-20' src="/images/s8.webp" alt="" />
        </div>
        <div className='grid sm:grid-cols-[1fr_2fr] lg:grid-cols-2 mt-8 pb-28'>
            <div className='grid gap-6'>
                <div>
                    <h2 className='text-2xl text-blue-300 hidden sm:block'>
                    Our Development <br />
                    and Digital Marketing Services
                    </h2>
                </div>
                <div className='text-4xl font-bold grid gap-3'>
                    <h1>AI & ML Development .</h1>
                    <h1>Product Engineering.</h1>
                    <h1>Enterprise Mobility.</h1>
                    <h1>Website Development.</h1>
                    <h1>Digital Transformation.</h1>
                    <h1>Dedicated Teams.</h1>
                </div>
                <div>
                    <button className='bg-blue-800 py-4 px-20 rounded font-semibold text-lg'>GET A QUOTE</button>
                </div>
            </div>
            <div>
                <img src="/images/comments.webp" alt="" />
            </div>
        </div>
    </div>
    {/*2nd step of homePage*/}
    <div className='relative top-28 pb-12 border-b border-blue-200 px-5'>
        <div className='p-10 flex items-center justify-center'>
            <h1 className='text-3xl font-semibold text-center'>Some of the brands who trust us.</h1>
        </div>
        <div className='grid grid-cols-3 md:grid-cols-5 items-center gap-y-12'>
            <img className='' src="/images/brand1.webp" alt="" />
            <img className='w-52' src="/images/brand2.webp" />
            <img className='w-52' src="/images/brand3.webp" />
            <img className='w-52' src="/images/brand4.webp" />
            <img className='' src="/images/brand5.webp" />
            <img className='w-1/2' src="/images/brand6.webp" />
            <img className='w-1/2' src="/images/brand7.webp" />
            <img className='w-1/2' src="/images/brand8.webp" />
            <img className='w-1/2' src="/images/brand9.webp" />
            <img className='w-1/2' src="/images/brand10.webp" />
        </div>
        <div></div>
    </div>
    {/*3rd step of homePage*/}
    <div className='mt-20 py-20 text-center'>
        <h1 className='text-5xl font-semibold '>WebSenor is ranked <span className='text-blue-900'>#1</span> on Clutch</h1>
        <h1 className='text-5xl font-semibold leading-normal'>and GoodFirms</h1>
        <p className='text-xl leading-10 font-montserrat px-2 text-slate-600 lg:px-64 mt-8'>We design and develop scalable, high-performing digital solutions to address the business concerns of our clients. Our services concentrate on Web application development, cloud computing, IoT, augmented reality and virtual reality, blockchain, artificial intelligence and machine learning, predictive analytics and big data solutions, as well as a number of other hot and upcoming technologies.</p>
    </div>
    {/*4th step of homePage*/}
    <div className='bg-zinc-100 py-32'>
        <div className='text-center text-5xl font-semibold pb-20'>
            <h1>Our Software & Web Development</h1>
            <h1>Services</h1>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 px-24 gap-8'>
            <div className='bg-white text-center py-12 px-5'>
                <div className='flex justify-center'>
                <img className='w-16' src="/images/card1.webp" alt="" />
                </div>
                <div className='text-2xl py-5'>
                <h2>Hire Dedicated</h2>
                <h2>Developers</h2>
                </div>
                <p className='font-montserrat text-slate-600 text-lg'>You can start working with our professionals directly by hiring them on remote.</p>
                <button className='bg-blue-800 py-2 px-3 rounded text-xl text-white border-2 border-black mt-6'>Learn More</button>
            </div>
            <div className='bg-white text-center py-12 px-5'>
                <div className='flex justify-center'>
                <img className='w-16' src="/images/card2.webp" alt="" />
                </div>
                <div className='text-2xl py-5'>
                <h2>Web Development</h2>
                </div>
                <p className='font-montserrat text-slate-600 text-lg'>WebSenor team have built over 2000+ web applications over the last decade.</p>
                <button className='bg-blue-800 py-2 px-3 rounded text-xl text-white border-2 border-black mt-20'>Learn More</button>
            </div>
            <div className='bg-white text-center py-12 px-5'>
                <div className='flex justify-center'>
                <img className='w-16' src="/images/card3.webp" alt="" />
                </div>
                <div className='text-2xl py-5'>
                <h2>Mobile App</h2>
                <h2>Development</h2>
                </div>
                <p className='font-montserrat text-slate-600 text-lg'>WebSenor is leading name in mobile app development companies in India.</p>
                <button className='bg-blue-800 py-2 px-3 rounded text-xl text-white border-2 border-black mt-12'>Learn More</button>
            </div>
            <div className='bg-white text-center py-12 px-5'>
                <div className='flex justify-center'>
                <img className='w-16' src="/images/card4.webp" alt="" />
                </div>
                <div className='text-2xl py-5'>
                <h2>Software Development</h2>
                </div>
                <p className='font-montserrat text-slate-600 text-lg'>Our developers have huge knowledge and expertise of all type of complex projects</p>
                <button className='bg-blue-800 py-2 px-3 rounded text-xl text-white border-2 border-black mt-6'>Learn More</button>
            </div>
            <div className='bg-white text-center py-12 px-5'>
                <div className='flex justify-center'>
                <img className='w-16' src="/images/card5.webp" alt="" />
                </div>
                <div className='text-2xl py-5'>
                <h2>UI & UX Design</h2>
                </div>
                <p className='font-montserrat text-slate-600 text-lg'>We offers the best graphic design services according to customers requirements.</p>
                <button className='bg-blue-800 py-2 px-3 rounded text-xl text-white border-2 border-black mt-6'>Learn More</button>
            </div>
            <div className='bg-white text-center py-12 px-5'>
                <div className='flex justify-center'>
                <img className='w-16' src="/images/card6.webp" alt="" />
                </div>
                <div className='text-2xl py-5'>
                <h2>DevOps & Cloud</h2>
                </div>
                <p className='font-montserrat text-slate-600 text-lg'>DevOps consultation, end-to-end testing are all part of our DevOps services.</p>
                <button className='bg-blue-800 py-2 px-3 rounded text-xl text-white border-2 border-black mt-12'>Learn More</button>
            </div>
            <div className='bg-white text-center py-12 px-5'>
                <div className='flex justify-center'>
                <img className='w-16' src="/images/card7.webp" alt="" />
                </div>
                <div className='text-2xl py-5'>
                <h2>Digital Marketing</h2>
                </div>
                <p className='font-montserrat text-slate-600 text-lg'>Our top marketing experts with 10+ years of experience deliver the success.</p>
                <button className='bg-blue-800 py-2 px-3 rounded text-xl text-white border-2 border-black mt-12'>Learn More</button>
            </div>
            <div className='bg-white text-center py-12 px-5'>
                <div className='flex justify-center'>
                <img className='w-16' src="/images/card8.webp" alt="" />
                </div>
                <div className='text-2xl py-5'>
                <h2>Quality Assurance</h2>
                </div>
                <p className='font-montserrat text-slate-600 text-lg'>Our qualified QA experts make use of the most recent software testing approaches and tools.</p>
                <button className='bg-blue-800 py-2 px-3 rounded text-xl text-white border-2 border-black mt-6'>Learn More</button>
            </div>
            <div className='bg-white text-center py-12 px-5'>
                <div className='flex justify-center'>
                <img className='w-16' src="/images/card9.webp" alt="" />
                </div>
                <div className='text-2xl py-5'>
                <h2>AI & ML Development</h2>
                </div>
                <p className='font-montserrat text-slate-600 text-lg'>Unlocking the power of AI and ML, we create smart, data-driven solutions</p>
                <button className='bg-blue-800 py-2 px-3 rounded text-xl text-white border-2 border-black mt-12'>Learn More</button>
            </div>
        </div>
        <div className='flex justify-center mt-8'>
        <button className='bg-blue-800 py-4 px-16 rounded text-xl text-white'>VIEW ALL SERVICES</button>
        </div>
    </div>
    </div>
  )
}

export default HomePage