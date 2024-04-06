import Link from "next/link";

import { getAdmin } from "@lib/shopify";

export default async function AnnouncementBar() {
  const { contactEmail, timezone, billingAddress, hours } = await getAdmin();
  const [abbreviated, long] = hours;
  const Divider = () => <span className=" text-white font-thin">|</span>;

  return (
    <div className="hidden md:block bg-black h-8">
      <div className="container">
        <div className="flex full-size">
          <div className="flex-1" />
          <div className="flex gap-3 text-white text-[14.4px] font-semibold py-[6px] px-4 pr-0">
            <Link
              className="hover:no-underline hover:text-colors-secondary"
              href={`tel:+1 ${billingAddress?.phone}`}
            >
              +1 {billingAddress?.phone}
            </Link>
            <Divider />
            <Link
              className="hover:no-underline hover:text-colors-secondary"
              href={`mailto:${contactEmail}`}
            >
              {contactEmail}
            </Link>
            <Divider />
            <Link
              className="hover:no-underline hover:text-colors-secondary"
              href="/"
            >
              {abbreviated?.value || long?.value} {timezone}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
