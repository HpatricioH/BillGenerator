export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        {children}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  )
}