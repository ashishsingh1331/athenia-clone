import React from "react";

function BookingForm(props) {
  return (
    <form>
      <div className="mb-6">
        
        <input
          type="text"
          id="text"
          className=" text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 text-dark-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="YOUR NAME"
          required
        />
      </div>
      <div className="mb-6">
        
        <input
          type="tel"
          id="tel"
          className=" text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 text-dark-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="YOUR CONTACT NUMBER"
          required
        />
      </div>

      <button
        type="submit"
        className={['text-white','w-full', 'duration-150', 'ease','text-sm','transition-bg','uppercase','tracking-widest', 'bg-dark-gray','font-semibold','py-3','lg:py-5','px-4','lg:px-5','rounded-none','focus:outline-none','focus-visible:ring-2','focus-visible:ring-white','focus-visible:ring-offset-2','focus-visible:ring-offset-gray-900','hover:bg-white','hover:text-dark-gray'].join(' ')}
      >
        Submit
      </button>
    </form>
  );
}

export default BookingForm;
