import Link from "next/link";

import { getAdmin } from "@lib/shopify";

export default async function AnnouncementBar() {
  const { contactEmail, timezone, billingAddress, hours } = await getAdmin();
  const [abbreviated, long] = hours;
  const Divider = () => <span className=" font-thin text-white">|</span>;

  return (
    <div className="hidden h-8 bg-black md:block">
      <div className="container">
        <div className="full-size flex">
          <div className="flex-1" />
          <div className="flex gap-3 px-4 py-[6px] pr-0 text-[14.4px] font-semibold text-white">
            <Link
              className="hover:text-secondary hover:no-underline"
              href={`tel:+1 ${billingAddress?.phone}`}
            >
              +1 {billingAddress?.phone}
            </Link>
            <Divider />
            <Link
              className="hover:text-secondary hover:no-underline"
              href={`mailto:${contactEmail}`}
            >
              {contactEmail}
            </Link>
            <Divider />
            <Link className="hover:text-secondary hover:no-underline" href="/">
              {abbreviated?.value || long?.value} {timezone}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
