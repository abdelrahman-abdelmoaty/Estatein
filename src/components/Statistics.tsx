const Statistics = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 dt:gap-5">
      <div className="gap-[2px] flex flex-col items-center md:items-start bg-grey-10 rounded-xl border border-grey-15 p-4 md:p-3.5 dt:p-4">
        <span className="font-bold text-2xl md:text-[30px] dt:text-[40px] leading-normal">200+</span>
        <span className="font-medium text-grey-60 text-[14px] xl:text-base dt:text-lg leading-normal text-center">Happy Customers</span>
      </div>
      <div className="gap-[2px] flex flex-col items-center md:items-start bg-grey-10 rounded-xl border border-grey-15 p-4 md:p-3.5 dt:p-4">
        <span className="font-bold text-2xl md:text-[30px] dt:text-[40px] leading-normal">10k+</span>
        <span className="font-medium text-grey-60 text-[14px] xl:text-base dt:text-lg leading-normal text-center">Properties For Clients</span>
      </div>
      <div className="col-span-2 md:col-span-1 gap-[2px] flex flex-col items-center md:items-start bg-grey-10 rounded-xl border border-grey-15 p-4 md:p-3.5 dt:p-4">
        <span className="font-bold text-2xl md:text-[30px] dt:text-[40px] leading-normal">16+</span>
        <span className="font-medium text-grey-60 text-[14px] xl:text-base dt:text-lg leading-normal text-center">Years of Experience</span>
      </div>
    </div>
  );
};

export default Statistics;
