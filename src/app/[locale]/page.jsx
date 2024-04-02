import { useTranslations } from "next-intl";

export default function Page() {
  useTranslations("Index");
  return (
    <>
      <h1>Title!!</h1>
    </>
  );
}
