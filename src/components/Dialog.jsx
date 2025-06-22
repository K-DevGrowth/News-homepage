import iconMenuClose from "../assets/images/icon-menu-close.svg";

const Dialog = ({ open, onClose, navigations }) => {
  return (
    <>
      {open && (
        <div className="fixed overflow-y-auto max-w-sm w-80 right-0 inset-y-0 bg-white p-10">
          <button
            type="button"
            onClick={() => onClose(false)}
            className="float-right cursor-pointer"
          >
            <span className="sr-only">Close button</span>
            <img src={iconMenuClose} alt="" />
          </button>
          <div className="flex flex-col mt-10 *:my-2">
            {navigations.map((item) => (
              <a href={item.href} key={item.name} className="py-1 cursor-pointer transition-all font-[600] hover:text-(--Soft-red)">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Dialog;
