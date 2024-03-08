import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FooterSpace1() {
  return (
    <li className=" flex flex-col w-[25%]">
      <div>
        {/* 노션 */}
        <button className="container w-[80px] items-center h-full">
          <svg
            className="wordmark_wordmark__gPyj1"
            style={{ "--wordmark-height": "32px" }}
            viewBox="0 0 87 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.805 1.294l16.6-1.226c2.039-.175 2.563-.057 3.845.875l5.299 3.733c.874.642 1.165.817 1.165 1.516v20.473c0 1.283-.466 2.042-2.097 2.158L7.34 29.99c-1.224.058-1.807-.117-2.448-.934L.99 23.982c-.7-.934-.99-1.633-.99-2.45V3.334c0-1.049.466-1.924 1.805-2.04z"
              fill="#fff"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.405.068l-16.6 1.226C.466 1.41 0 2.285 0 3.334v18.198c0 .817.29 1.516.99 2.45l3.902 5.074c.641.817 1.224.992 2.448.934l19.277-1.167c1.63-.116 2.097-.875 2.097-2.158V6.192c0-.663-.262-.854-1.033-1.42a85.473 85.473 0 01-.133-.096L22.25.943c-1.282-.932-1.806-1.05-3.845-.875zM7.776 5.857c-1.574.106-1.931.13-2.825-.597L2.678 3.452c-.231-.234-.115-.526.467-.584l15.958-1.166c1.34-.117 2.038.35 2.562.758l2.737 1.983c.117.059.408.408.058.408l-16.48.992-.204.014zM5.941 26.49V9.11c0-.759.233-1.109.931-1.168L25.8 6.834c.642-.058.932.35.932 1.108v17.264c0 .759-.117 1.401-1.165 1.459l-18.113 1.05c-1.048.058-1.513-.291-1.513-1.225zm17.88-16.448c.116.525 0 1.05-.525 1.11l-.873.173v12.832c-.758.408-1.456.641-2.039.641-.932 0-1.165-.292-1.863-1.166l-5.709-8.982v8.69l1.806.409s0 1.05-1.457 1.05l-4.017.233c-.117-.234 0-.817.407-.933l1.049-.291v-11.49L9.144 12.2c-.117-.525.174-1.283.99-1.342l4.31-.29 5.94 9.098v-8.049l-1.514-.174c-.117-.643.349-1.11.931-1.167l4.02-.234z"
              fill="#000"
            ></path>
            <path
              className="wordmark_fill__RZFeq"
              d="M41.434 21.251v-7.91h.137l5.704 7.91h1.796V9.627h-1.997v7.902h-.137l-5.704-7.902H39.43V21.25h2.005zM54.715 21.429c2.635 0 4.238-1.724 4.238-4.584 0-2.852-1.611-4.584-4.238-4.584-2.618 0-4.237 1.74-4.237 4.584 0 2.86 1.595 4.584 4.237 4.584zm0-1.676c-1.393 0-2.19-1.063-2.19-2.908 0-1.837.797-2.908 2.19-2.908 1.386 0 2.183 1.071 2.183 2.908 0 1.845-.789 2.908-2.183 2.908zM60.778 10.28v2.215h-1.393v1.595h1.393v4.809c0 1.708.806 2.393 2.828 2.393.386 0 .757-.04 1.047-.097v-1.563c-.242.024-.395.04-.677.04-.837 0-1.208-.386-1.208-1.256V14.09h1.885v-1.595h-1.885v-2.216h-1.99zM65.85 21.251h1.99v-8.813h-1.99v8.813zm.991-10.27c.66 0 1.192-.533 1.192-1.201 0-.669-.531-1.209-1.192-1.209-.652 0-1.192.54-1.192 1.209 0 .668.54 1.2 1.192 1.2zM73.299 21.429c2.634 0 4.237-1.724 4.237-4.584 0-2.852-1.611-4.584-4.237-4.584-2.619 0-4.238 1.74-4.238 4.584 0 2.86 1.595 4.584 4.238 4.584zm0-1.676c-1.394 0-2.192-1.063-2.192-2.908 0-1.837.798-2.908 2.192-2.908 1.385 0 2.183 1.071 2.183 2.908 0 1.845-.79 2.908-2.183 2.908zM78.725 21.251h1.998V16.12c0-1.297.75-2.119 1.941-2.119 1.217 0 1.78.677 1.78 2.022v5.228h1.999v-5.703c0-2.103-1.072-3.287-3.037-3.287-1.314 0-2.2.604-2.619 1.587h-.137v-1.41h-1.925v8.813z"
              fill="#000"
            ></path>
          </svg>
        </button>
      </div>
      <div className="container flex flex-row items-center justify-start pt-8 pb-5">
        {/* 인스타그램 */}
        <button className="container w-auto items-center h-5 flex justify-center text-neutral-800 pr-3 hover:bg-gray-200">
          <svg
            class="shareInstagram w-5 h-4 mt-1 fill-current transition-colors duration-300"
            viewBox="0 0 18 18"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9 1.621c2.405 0 2.689.011 3.635.053.879.039 1.354.186 1.67.309.418.162.721.359 1.034.671.316.316.51.615.675 1.034.123.316.271.795.309 1.67.042.949.053 1.234.053 3.635s-.011 2.689-.053 3.635c-.039.879-.186 1.354-.309 1.67a2.802 2.802 0 01-.671 1.034c-.316.316-.615.51-1.034.675-.316.123-.795.271-1.67.309-.949.042-1.234.053-3.635.053s-2.689-.011-3.635-.053c-.879-.039-1.354-.186-1.67-.309a2.802 2.802 0 01-1.034-.671 2.815 2.815 0 01-.675-1.034c-.123-.316-.271-.795-.309-1.67-.042-.949-.053-1.234-.053-3.635s.011-2.689.053-3.635c.039-.879.186-1.354.309-1.67.162-.418.359-.721.671-1.034.316-.316.615-.51 1.034-.675.316-.123.795-.271 1.67-.309.946-.042 1.23-.053 3.635-.053zM9 0C6.557 0 6.251.011 5.291.053 4.335.095 3.677.25 3.108.471a4.389 4.389 0 00-1.596 1.041A4.404 4.404 0 00.471 3.105C.25 3.678.095 4.332.053 5.288.011 6.251 0 6.557 0 9c0 2.443.011 2.749.053 3.709.042.956.197 1.614.418 2.183a4.389 4.389 0 001.041 1.596 4.392 4.392 0 001.593 1.037c.573.221 1.227.376 2.183.418.96.042 1.266.053 3.709.053s2.749-.011 3.709-.053c.956-.042 1.614-.197 2.183-.418a4.413 4.413 0 001.593-1.037c.5-.499.809-1.002 1.037-1.593.221-.573.376-1.227.418-2.183.042-.96.053-1.266.053-3.709s-.011-2.749-.053-3.709c-.042-.956-.197-1.614-.418-2.183a4.21 4.21 0 00-1.03-1.6A4.392 4.392 0 0014.896.474c-.573-.221-1.227-.376-2.183-.418C11.75.01 11.444 0 9 0zm0 4.377A4.625 4.625 0 004.377 9 4.625 4.625 0 009 13.623 4.625 4.625 0 0013.623 9 4.625 4.625 0 009 4.377zm0 7.622A3 3 0 119 6 3 3 0 019 12zm4.806-6.726a1.079 1.079 0 100-2.158 1.079 1.079 0 000 2.158z"
            ></path>
          </svg>
        </button>
        {/* 트위터 */}
        <button className="container w-auto items-center h-5 flex justify-center text-neutral-800 pr-3">
          <svg
            class="shareTwitter w-5 h-4 mt-1"
            viewBox="0 0 22 18"
            fill="currentColor"
          >
            <path d="m22 2.12799c-.8083.36413-1.6798.60642-2.5899.71441.9321-.56211 1.6455-1.45374 1.9851-2.514271-.8716.51919-1.8393.899931-2.8648 1.103451-.8248-.883314-1.9974-1.43158-3.2951-1.43158-2.4922 0-4.5102 2.03384-4.5102 4.54257 0 .35444.0385.70057.1154 1.03423-3.75002-.19106-7.07532-1.99923-9.30088-4.750248-.38628.670098-.610352 1.453738-.610352 2.284438 0 1.57557.794552 2.96839 2.005622 3.7811-.73956-.02216-1.43514-.22983-2.045487-.56627v.05677c0 2.20275 1.554737 4.04141 3.620847 4.45671-.37803.1039-.77806.1606-1.19046.1606-.29142 0-.57185-.0304-.85091-.0817.57598 1.8041 2.24207 3.1193 4.2147 3.1581-1.54649 1.2198-3.48888 1.9466-5.60585 1.9466-.365658 0-.721694-.0221-1.07773-.065 2.0015 1.2931 4.37278 2.0421 6.92002 2.0421 8.29878 0 12.84068-6.9267 12.84068-12.9327 0-.19937-.0041-.3932-.0124-.58841.8812-.63549 1.6455-1.43712 2.2503-2.34952z"></path>
          </svg>
        </button>
        {/* Linkedin */}
        <button className="container w-auto items-center h-5 flex justify-center text-neutral-800 pr-3">
          <svg
            class="shareLinkedIn w-5 h-4 mt-1"
            viewBox="0 0 22 18"
            fill="currentColor"
          >
            <path d="m2.0769 4.15379c1.14644 0 2.07689-.93045 2.07689-2.07689 0-1.14645-.93045-2.0769-2.07689-2.0769-1.14645 0-2.0769.93045-2.0769 2.0769 0 1.14644.93045 2.07689 2.0769 2.07689zm-2.0769 13.84621v-12.46143h4.15379v12.46143zm6.92371-12.46143h3.83119v1.96336h.0554c.533-.95675 1.8373-1.96336 3.7827-1.96336 4.0444 0 4.7921 2.5172 4.7921 5.79173v6.6697h-3.9946v-5.9123c0-1.4095-.0291-3.22471-2.0769-3.22471-2.0796 0-2.3981 1.53551-2.3981 3.12231v6.0147h-3.99179z"></path>
          </svg>
        </button>
        {/* 페이스북 */}
        <button className="container w-auto items-center h-5 flex justify-center text-neutral-800 pr-3">
          <svg
            class="shareFacebook w-5 h-4 mt-1"
            viewBox="0 0 22 18"
            fill="currentColor"
          >
            <path d="M17.999 8.999c0-4.97-4.029-8.999-8.999-8.999s-8.999 4.029-8.999 8.999c0 4.492 3.291 8.215 7.593 8.89v-6.289h-2.285v-2.601h2.285v-1.983c0-2.255 1.344-3.501 3.399-3.501 0.985 0 2.015 0.176 2.015 0.176v2.215h-1.135c-1.118 0-1.467 0.694-1.467 1.405v1.688h2.496l-0.399 2.601h-2.097v6.289c4.302-0.675 7.593-4.398 7.593-8.89z"></path>
          </svg>
        </button>
        {/* 유투브 */}
        <button className="container w-auto items-center h-5 flex justify-center text-neutral-800">
          <svg
            class="shareYouTube w-5 h-4 mt-1"
            viewBox="0 0 22 18"
            fill="currentColor"
          >
            <path d="M9 2.070c-8.845 0-9 0.787-9 6.93s0.155 6.93 9 6.93 9-0.787 9-6.93-0.155-6.93-9-6.93zM11.884 9.301l-4.041 1.886c-0.354 0.164-0.644-0.020-0.644-0.41v-3.553c0-0.39 0.29-0.574 0.644-0.41l4.041 1.886c0.354 0.166 0.354 0.436 0 0.601z"></path>
          </svg>
        </button>
      </div>
      {/* 번역드롭다운 */}
      <li>
        <Menu as="div" className="relative inline-block text-left pl-[10px]">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              한국어
              <ChevronDownIcon className="-mr-1 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      영어
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      한국어
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      독일어
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      스페인어(라틴 아메리카)
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      스페인어(스페인)
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      일본어
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      포르투갈어(브라질)
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      프랑스어
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </li>
    </li>
  );
}
