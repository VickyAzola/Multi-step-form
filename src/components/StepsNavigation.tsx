import { useTranslation } from "react-i18next";

interface NavMobileType {
  currentStep: number;
  isMobile: boolean;
}

function StepsNavigation({ currentStep, isMobile }: NavMobileType) {
  const { t } = useTranslation();

  const steps = [
    {
      id: 1,
      step: "steps.step1.badge",
      title: "steps.step1.shortTitle",
    },
    {
      id: 2,
      step: "steps.step2.badge",
      title: "steps.step2.shortTitle",
    },
    {
      id: 3,
      step: "steps.step3.badge",
      title: "steps.step3.shortTitle",
    },
    { id: 4, step: "steps.step4.badge", title: "steps.step4.shortTitle" },
  ];

  return (
    <>
      {isMobile ? (
        <nav className="relative md:hidden w-full h-42 bg-[url('./assets/images/bg-sidebar-mobile.svg')] bg-cover bg-no-repeat flex items-start justify-center gap-4 pt-14">
          {steps.map((item) => (
            <div
              key={item.id}
              className={`${currentStep == item.id ? "bg-PrimaryBlue200 border-PrimaryBlue200 text-PrimaryBlue950" : "text-NeutralWhite border-NeutralWhite"} 
    border rounded-full h-8 w-8 flex justify-center items-center`}
            >
              {String(item.id)}
            </div>
          ))}
        </nav>
      ) : (
        <nav className="hidden md:block h-142 bg-[url('./assets/images/bg-sidebar-desktop.svg')] bg-no-repeat p-8 rounded-lg">
          {steps.map((item) => (
            <div className="flex items-center gap-4 pb-8">
              <div
                key={item.id}
                className={`${currentStep == item.id ? "bg-PrimaryBlue200 border-PrimaryBlue200 text-PrimaryBlue950" : "text-NeutralWhite border-NeutralWhite"} 
    border rounded-full h-9 w-9  flex justify-center items-center font-bold`}
              >
                {String(item.id)}
              </div>
              <div className="uppercase">
                <p className="text-sm font-light text-NeutralBlue100/50">
                  {t(item.step)}
                </p>
                <p className="text-NeutralBlue100 font-bold tracking-widest">
                  {t(item.title)}
                </p>
              </div>
            </div>
          ))}
        </nav>
      )}
    </>
  );
}

export default StepsNavigation;
