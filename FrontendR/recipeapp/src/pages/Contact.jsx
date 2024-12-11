import React from "react";

const Contact = () => {
  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-12 mx-auto">
          <div class="text-center">
            <p class="font-medium text-blue-500 dark:text-blue-400">
              Contact me
            </p>

            <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
              Get in touch
            </h1>

            <p class="mt-3 text-gray-500 dark:text-gray-400">
              Any changes or suggetions are heartly welcomed.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <div class="flex flex-col items-center justify-center text-center">
              <span class="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <a href="mailto:dheerajap6@gmail.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </a>
              </span>

              <h2 class="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                Email
              </h2>
              <p class="mt-2 text-gray-500 dark:text-gray-400">Mail me at </p>

              <p class="mt-2 text-blue-500 dark:text-blue-400">
                <a href="mailto:dheerajap6@gmail.com">dheerajap6@gmail.com</a>
              </p>
            </div>

            <div class="flex flex-col items-center justify-center text-center">
              <span class="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <a href="https://github.com/Dheeraj101097">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 hover:cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 1.5C6.477 1.5 2 6.043 2 11.25c0 4.322 2.865 7.986 6.839 9.287.5.09.683-.217.683-.483v-1.724c-2.783.624-3.374-1.377-3.374-1.377-.454-1.165-1.11-1.475-1.11-1.475-.91-.624.068-.612.068-.612 1.004.069 1.533 1.046 1.533 1.046.892 1.52 2.338 1.08 2.908.826.091-.639.349-1.08.635-1.33-2.22-.267-4.555-1.104-4.555-4.906 0-1.086.385-1.976 1.017-2.673-.1-.252-.44-1.268.097-2.643 0 0 .835-.27 2.735 1.02.794-.221 1.648-.333 2.497-.336.85.003 1.703.115 2.498.336 1.899-1.29 2.734-1.02 2.734-1.02.538 1.375.198 2.391.097 2.643.63.697 1.016 1.587 1.016 2.673 0 3.812-2.336 4.637-4.563 4.894.36.309.68.91.68 1.831v2.717c0 .269.18.576.688.479C19.136 19.236 22 15.572 22 11.25 22 6.043 17.523 1.5 12 1.5z"
                    />
                  </svg>
                </a>
              </span>

              <h2 class="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                GitHub
              </h2>
              <p class="mt-2 text-gray-500 dark:text-gray-400">
                Visit my github profile.
              </p>
              <p class="mt-2 text-blue-500 dark:text-blue-400">
                <a href="https://github.com/Dheeraj101097">Github </a>
              </p>
            </div>

            <div class="flex flex-col items-center justify-center text-center">
              <span class="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <a href="https://www.linkedin.com/in/dheerajpatnaik10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    class="w-6 h-6 hover:cursor-pointer"
                  >
                    <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM8.118 20H5.56V9h2.558v11zM6.838 7.725c-.814 0-1.474-.66-1.474-1.475 0-.815.66-1.475 1.474-1.475.815 0 1.475.66 1.475 1.475 0 .815-.66 1.475-1.475 1.475zM20 20h-2.556v-5.478c0-1.308-.025-2.993-1.823-2.993-1.823 0-2.103 1.424-2.103 2.894V20h-2.555V9h2.452v1.5h.035c.342-.649 1.181-1.331 2.433-1.331 2.601 0 3.082 1.712 3.082 3.939V20z" />
                  </svg>
                </a>
              </span>

              <h2 class="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                LinkedIn
              </h2>
              <p class="mt-2 text-gray-500 dark:text-gray-400">
                Visit my LinkedIn profile.
              </p>
              <p class="mt-2 text-blue-500 dark:text-blue-400">
                <a href="https://www.linkedin.com/in/dheerajpatnaik10">
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
