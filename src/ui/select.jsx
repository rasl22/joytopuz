
const select = ({ label, region, value, setState }) => {
  return (
    <div className="border border-secondGrey rounded-md text-[14px] text-lightGrey py-[7px] pl-[11px] w-[175px] flex items-center ">
      <label htmlFor={label}></label>
      <select
        id={label}
        name={label}
        onChange={(e) => setState(e.target.value)}>
        <option value={value}>{value}</option>
        <option value={value}>{value}</option>
      </select>
    </div>
  );
};

export default select;
