import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-center px-8 py-4 gap-70 bg-amber-700">
      <div className="flex items-center justify-center px-8 py-4 gap-5" >
      {/* Logo */}
      <h1 className="text-xl font-bold">SearchJOB</h1>

      {/* Navigation */}
      <ul className="flex gap-x-6">
        <li>Home</li>
        <li>Cats</li>
        <li>Jobs</li>
        <li>Companies</li>
        <li>Candidates</li>
        <li>Pages</li>
        <li>Blogs</li>
      </ul>
    </div>
      {/* Buttons */}
      <div className="flex gap-x-4 items-center">
        <section>Login</section>
        <section className=" border-2 py-3 px-6 rounded-full"> 
            Post a Job
        </section>
      </div>

    </div>
  );
};

export default Header;
