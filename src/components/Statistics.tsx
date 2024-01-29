const Statistics = () => {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 dt:gap-5">
      <div className="flex flex-col items-center gap-[2px] rounded-xl border border-grey-15 bg-grey-10 p-4 md:items-start md:p-3.5 dt:p-4">
        <span className="text-2xl font-bold leading-normal md:text-[30px] dt:text-[40px]">
          200+
        </span>
        <span className="text-center text-[14px] font-medium leading-normal text-grey-60 xl:text-base dt:text-lg">
          Happy Customers
        </span>
      </div>
      <div className="flex flex-col items-center gap-[2px] rounded-xl border border-grey-15 bg-grey-10 p-4 md:items-start md:p-3.5 dt:p-4">
        <span className="text-2xl font-bold leading-normal md:text-[30px] dt:text-[40px]">
          10k+
        </span>
        <span className="text-center text-[14px] font-medium leading-normal text-grey-60 xl:text-base dt:text-lg">
          Properties For Clients
        </span>
      </div>
      <div className="col-span-2 flex flex-col items-center gap-[2px] rounded-xl border border-grey-15 bg-grey-10 p-4 md:col-span-1 md:items-start md:p-3.5 dt:p-4">
        <span className="text-2xl font-bold leading-normal md:text-[30px] dt:text-[40px]">
          16+
        </span>
        <span className="text-center text-[14px] font-medium leading-normal text-grey-60 xl:text-base dt:text-lg">
          Years of Experience
        </span>
      </div>
    </div>
  );
};

export default Statistics;
