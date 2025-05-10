import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { Metadata } from "next";

import { SecondaryButton } from "@/components/shared/secondary-button";
export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Have questions or need assistance? Reach out to the Nextbit team today.We are here to help with all your eCommerce software and business needs.',
};
export default function Contact() {
  return (
    <div className="relative isolate ">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:pt-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-gray-900/10 lg:w-1/2" />
            <h2 className="text-4xl font-semibold tracking-tight text-prettydark:text-primary sm:text-[40px]">
              Let&apos;s Build Something Great Together.
            </h2>
            <p className="mt-6 text-lg/8 dark:text-primary-light">
              Have questions or ready to get started? Reach out to us,
              we&apos;re here to help!
            </p>
            <dl className="mt-10 space-y-4 text-base/7 dark:text-primary-light">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    aria-hidden="true"
                    className="h-7 w-6 dark:text-primary-light"
                  />
                </dt>
                <dd>
                  House 789, Level 6, Road 11, Avenue 4,
                  <br />
                  Mirpur DOHS, Dhaka, Bangladesh
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    aria-hidden="true"
                    className="h-7 w-6  dark:text-primary-light"
                  />
                </dt>
                <dd>
                  <a
                    className="dark:text-primary-light"
                    href="tel:+1 (689) 309‑5372"
                  >
                    +1 (689) 309‑5372
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    aria-hidden="true"
                    className="h-7 w-6 text-secondary-light dark:text-primary-light"
                  />
                </dt>
                <dd>
                  <a
                    className="text-secondary-light dark:text-primary-light"
                    href="mailto:hello@nextbit.io"
                  >
                    hello@nextbit.io
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          action="#"
          className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:pt-48"
          method="POST"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  className="block text-sm/6 font-semibold text-secondary-light dark:text-primary-light"
                  htmlFor="first-name"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    autoComplete="given-name"
                    className="block w-full rounded-md  border border-gray-900 px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    id="first-name"
                    name="first-name"
                    type="text"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm/6 font-semibold text-secondary-light dark:text-primary-light"
                  htmlFor="last-name"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    autoComplete="family-name"
                    className="block w-full border  border-gray-900 rounded-md px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    id="last-name"
                    name="last-name"
                    type="text"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  className="block text-sm/6 font-semibold text-secondary-light dark:text-primary-light"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    autoComplete="email"
                    className="block w-full border border-gray-900 rounded-md px-3.5 py-2 text-base text-secondary-light dark:text-primary-light placeholder:text-gray-400 focus:outline-none"
                    id="email"
                    name="email"
                    type="email"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  className="block text-sm/6 font-semibold text-secondary-light dark:text-primary-light"
                  htmlFor="phone-number"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    autoComplete="tel"
                    className="block w-full  border border-gray-900 rounded-md px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    id="phone-number"
                    name="phone-number"
                    type="tel"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  className="block text-sm/6 font-semibold text-secondary-light dark:text-primary-light"
                  htmlFor="message"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    className="block w-full  border border-gray-900 rounded-md px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    defaultValue={""}
                    id="message"
                    name="message"
                    rows={4}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-start">
              <SecondaryButton
                className="text-sm px-2 h-8 text-secondary-light dark:text-primary-light"
                showIcon={false}
              >
                Send Message
              </SecondaryButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
