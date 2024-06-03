import Trash from "../assets/icons/Trash";

const ModalDelete = ({isModalOpen, onClose, onConfirm}) => {
  return (
    //backdrop
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors z-50
        ${isModalOpen ? "visible bg-black/20" : "invisible"}
        `}
  >
      <div className="flex justify-center bg-secondary border-t-[16px] border-primary min-w-[400px] min-h-[250px] max-sm:min-w-[350px] rounded-3xl relative">
        <Trash className="absolute w-20 fill-red-500 -top-10 bg-primary rounded-full p-4" />
        <div className="flex flex-col items-center">
          <h1 className="text-black/80 text-2xl font-semibold pt-14 text-center">
            Do you want to remove <br /> this product?
          </h1>
          <div className="w-full flex justify-between pt-14 gap-6">
            <button
              onClick={onClose}
              className="border border-primary hover:bg-white text-xl px-12 rounded-lg"
            >
              No
            </button>
            <button
              onClick={onConfirm}
              className="px-12 rounded-lg text-white text-xl bg-primary/80 hover:bg-primary"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalDelete