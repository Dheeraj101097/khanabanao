import React from "react";

export const LoadingEffect = () => {
  return (
    /* From Uiverse.io by bundui */
    <div className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-400">
      <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-400">
        <svg
          viewBox="0 0 16 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="w-10 h-10 text-gray-200 dark:text-gray-600"
        >
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"></path>
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"></path>
        </svg>
      </div>
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
      <div className="flex items-center mt-4">
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="w-10 h-10 me-3 text-gray-200 dark:text-gray-400"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"></path>
        </svg>
        <div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32 mb-2"></div>
          <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
// coloutr #ffa489
export const LoadingEffect2 = () => {
  return (
    <>
      <div className="w-full gap-x-2 flex justify-center items-center">
        <div className="w-5 bg-[#ed9fd5] animate-pulse h-5 rounded-full "></div>
        <div className="w-5 animate-pulse h-5 bg-[#b17dd3] rounded-full "></div>
        <div className="w-5 h-5 animate-pulse ani bg-[#7662e7] rounded-full "></div>
      </div>
    </>
  );
};

export const LoadingEffect3 = () => {
  return (
    // bg-[#fff9bc]
    <>
      <div className=" bg-white cursor-none  flex flex-row p-2 border-[0.1rem] border-red-400 rounded-3xl bg-transparent scale-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="sparkle  animate-pulse "
        >
          <path
            className="path"
            strokeLinejoin="round"
            stroke-linecap="round"
            stroke="#FFF07C"
            fill="#FFE733"
            d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"
          ></path>
          <path
            className="path"
            strokeLinejoin="round"
            stroke-linecap="round"
            stroke="#F9D48B"
            fill="#F6BF51"
            d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"
          ></path>
          <path
            className="path"
            strokeLinejoin="round"
            stroke-linecap="round"
            stroke="#80FF72"
            fill="#5AFF47"
            d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z"
          ></path>
        </svg>

        <p class=" text-black animate-pulse p-3">Generating results .... </p>
      </div>
      ;
    </>
  );
};

export const LoadingEffect4 = () => {
  return (
    <>
      <div className="flex-col gap-4 w-full flex items-center justify-center">
        <div className="w-20 h-20  border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
          <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
        </div>
        <p className=" text-purple-500 animate-pulse mb-3">Generating .... </p>
      </div>
    </>
  );
};
