/* eslint-disable prettier/prettier */
// eslint-disable-next-line react/prop-types
const Modal = ({ modalOpen, handleCloseClick }) => {
    
  return (
    <>
      <div
        id="defaultModal"
        tabIndex="-1"
        aria-hidden="true"
        className={`fixed z-50 w-full p-1 overflow-x-hidden overflow-y-auto top-28 h-modal md:h-full transition-all px-7 ${modalOpen ? 'grid' : 'hidden'}`}>
          {/* <div className={`inset-0 ${modalOpen ? 'absolute' : 'hidden'} bg-black`}></div> */}
        <div className="relative w-full h-full max-w-md md:max-w-2xl md:h-auto">
          <div className="relative bg-gray-900 border border-blue-400 rounded-lg">
            <div className="flex items-start justify-between p-2 md:p-4 border-b border-gray-500 rounded-t">
              <h3 className="text-base md:text-2xl lg:text-3xl font-semibold text-white">
                Global Innovation
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-toggle="defaultModal"
                onClick={handleCloseClick}
                >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-4 md:p-6 space-y-6 bg-gray-800">
              <p className="text-sm md:text-lg font-light text-gray-100">A STATISTICAL ANALYSIS OF THE GLOBAL INNOVATION</p>
            <div className="flex items-center space-x-2">
                <div className="py-1 px-4 rounded-full bg-green-400 text-xs text-white grid items-center">
                    <p>Trending</p>
                </div>
                <div className="py-1 px-4 rounded-full bg-blue-400 text-xs text-white grid items-center">
                    <p>Technology</p>
                </div>
            </div>
              <p className="text-xs md:text-base font-light leading-relaxed text-gray-100">
                With less than a month to go before the European Union enacts new consumer privacy
                laws for its citizens, companies around the world are updating their terms of
                service agreements to comply.
              </p>
              <p className="text-xs md:text-base font-light leading-relaxed text-gray-100">
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect
                on May 25 and is meant to ensure a common set of data rights in the European Union.
                It requires organizations to notify users as soon as possible of high-risk data
                breaches that could personally affect them.
              </p>
              <p className="text-xs md:text-base font-light leading-relaxed text-gray-100">
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect
                on May 25 and is meant to ensure a common set of data rights in the European Union.
                It requires organizations to notify users as soon as possible of high-risk data
                breaches that could personally affect them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
