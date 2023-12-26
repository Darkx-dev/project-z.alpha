import React from 'react'

export default function Tree() {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    
    <div className="timeline-start md:text-end mb-10">
      <time className="font-mono italic">Milestone 1</time>
      <div className="text-lg font-black"><span className='text-red-400'>HTML</span> and <span className='text-blue-300'>CSS</span> Basics</div>
      Gained proficiency in HTML and CSS, establishing a solid foundation for building static web pages.
    </div>
    <hr className='bg-primary'/>
  </li>
  
  <li>
    <hr className='bg-primary'/>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end mb-10">
      <time className="font-mono italic">Milestone 2</time>
      <div className="text-lg font-black"><span className='text-orange-500'>JavaScript</span> Proficiency</div>
      Advanced skills with JavaScript, enabling the creation of dynamic and interactive web content.
    </div>
    <hr className='bg-primary'/>
  </li>

  <li>
    <hr className='bg-primary'/>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-start md:text-end mb-10">
      <time className="font-mono italic">Milestone 3</time>
      <div className="text-lg font-black text-info">Frontend Frameworks</div>
      Delved into modern frontend frameworks like React and Vue, expanding capabilities for building scalable and efficient web applications.
    </div>
    <hr className='bg-primary'/>
  </li>
  
  <li>
    <hr className='bg-primary'/>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end mb-10">
      <time className="font-mono italic">Milestone 4</time>
      <div className="text-lg font-black text-green-400">Responsive Web Design</div>
      Specialized in creating responsive designs, ensuring seamless user experiences across various devices and screen sizes.
    </div>
    <hr className='bg-primary'/>
  </li>

  <li>
    <hr className='bg-primary'/>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-yellow-500"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-start md:text-end mb-10">
      <time className="font-mono italic text-yellow-200">Learning</time>
      <div className="text-lg font-black text-yellow-500">Backend Development</div>
      Acquired knowledge in backend development, utilizing technologies such as Node.js and Express to build robust server-side applications.
    </div>
    <hr className=''/>
  </li>
  
  <li>
    <hr className=''/>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end mb-10">
      <time className="font-mono italic">Milestone not reached</time>
      <div className="text-lg font-black">Full Stack Development</div>
      
    </div>
    <hr className=''/>
  </li>
</ul>



  )
}
