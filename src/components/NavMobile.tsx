interface NavMobileType {
  currentStep: number;
}

function NavMobile({ currentStep }: NavMobileType) {
  const steps = [1, 2, 3, 4];

  return (
    <>
      <nav className="w-full h-42 bg-[url('./assets/images\bg-sidebar-mobile.svg')] bg-cover bg-no-repeat flex items-start justify-center gap-4 pt-14">
        {steps.map((item) => (
          <div
            key={item}
            className={`${currentStep == item ? "bg-PrimaryBlue200 border-PrimaryBlue200 text-PrimaryBlue950" : "text-NeutralWhite border-NeutralWhite"} 
    border rounded-full h-8 w-8  flex justify-center items-center`}
          >
            {String(item)}
          </div>
        ))}
      </nav>
    </>
  );
}

export default NavMobile;
