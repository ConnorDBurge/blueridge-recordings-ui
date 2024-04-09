import { TruckIcon, BoxIcon, ReturnIcon, PhoneIcon } from "@/components/icons";
import { getMenu } from "@/lib/shopify";
import Link from "next/link";

export default async function Footer() {
  const primaryMenu = await getMenu("primary-menu");
  const footerMenu = await getMenu("footer");

  return (
    <>
      <div className="bg-primary">
        <div className="flex gap-12 py-4 md:container md:py-6">
          <Link
            href="/"
            className="group/cta flex items-center justify-center gap-6"
          >
            <TruckIcon
              width="65px"
              height="65px"
              className="transition-300 group-hover/cta:stroke-secondary"
            />
            <div className="flex flex-col">
              <span className="transition-300 font-semibold text-white group-hover/cta:text-secondary">
                Free Shipping
              </span>
              <span className="transition-300 text-sm text-gray-200 group-hover/cta:text-secondary">
                Enjoy free shipping on all orders
              </span>
            </div>
          </Link>
          <Link
            href="/"
            className="group/cta flex items-center justify-center gap-6"
          >
            <BoxIcon
              width="70px"
              height="70px"
              className="transition-300 group-hover/cta:fill-secondary"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-white group-hover/cta:text-secondary">
                Ready to Ship
              </span>
              <span className="text-sm text-gray-200 group-hover/cta:text-secondary">
                All orders process within 1-2 days, on their way to you
              </span>
            </div>
          </Link>
          <Link
            href="/"
            className="group/cta flex items-center justify-center gap-6"
          >
            <ReturnIcon
              width="60px"
              height="60px"
              className="transition-300 group-hover/cta:stroke-secondary"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-white group-hover/cta:text-secondary">
                Hassle Free Returns
              </span>
              <span className="text-sm text-gray-200 group-hover/cta:text-secondary">
                Free returns on all orders within 30 days
              </span>
            </div>
          </Link>
          <Link
            href="/"
            className="group/cta flex items-center justify-center gap-6"
          >
            <PhoneIcon
              width="60px"
              height="60px"
              className="transition-300 group-hover/cta:fill-secondary"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-white group-hover/cta:text-secondary">
                Customer Service
              </span>
              <span className="text-sm text-gray-200 group-hover/cta:text-secondary">
                Need help? Call us at 1-800-555-5555
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
