/* eslint-disable prettier/prettier */
// eslint-disable-next-line react/prop-types
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const UserModal = ({ modalOpen1, handleCloseClick1 }) => {
    const user = useSelector(state => state.users.singleUser)

  return (
    <>
      <div
        id="defaultModal"
        tabIndex="-1"
        aria-hidden="true"
        className={`fixed z-50 w-full p-1 overflow-x-hidden overflow-y-auto top-28 h-modal md:h-full transition-all px-7 ${modalOpen1 ? 'grid' : 'hidden'}`}>
        <div className="relative w-full h-full max-w-md md:max-w-2xl md:h-auto">
          <div className="relative bg-gray-900 border border-blue-400 rounded-lg">
            <div className="flex items-start justify-between p-2 md:p-4 border-b border-gray-500 rounded-t">
              <h3 className="text-base md:text-2xl lg:text-3xl font-normal text-white">
               Dynamic Content Display
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-toggle="defaultModal"
                onClick={handleCloseClick1}
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

            <div className="p-3 md:p-4 lg:p-6 space-y-6 bg-gray-100">
              <p className="text-sm lg:text-xl font-light leading-relaxed text-gray-800">
                Hello, my username is <span className="text-lg md:text-3xl text-blue-500">{user?.username}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserModal;
