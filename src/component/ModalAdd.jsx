import Message from "../assets/icons/Message";

const ModalAdd = ({ showModal }) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors z-50 bg-black/30
        ${showModal ? "visible" : "invisible"}
    `}
    >
      <div className="flex flex-col items-center max-[15vh] min-w-[25vh] rounded-2xl bg-primary/90 p-2">
        <Message className="w-20 h-20 fill-secondary" />
        <div className="text-secondary pt-2 font-fontF">Added to cart</div>
      </div>
    </div>
  );
};

export default ModalAdd