import { useTranslations } from "next-intl";

const TranslationWrapper = ({ children, namespace }) => {
  const t = useTranslations(namespace);
  return <>{children({ t })}</>;
};

export default TranslationWrapper;
