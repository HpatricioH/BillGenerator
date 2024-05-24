import { Fragment, type ReactNode } from "react"
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'

interface ModalProps {
  children?: ReactNode;
  title?: string | undefined;
  setState: (value: boolean) => void;
  state: boolean;
}

export default function Modal(props: ModalProps) {
  return (
    <Transition appear show={props.state} as={Fragment}>
      <Dialog as="div" className="relative z-[70]" onClose={props.setState}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <div className="fixed inset-0 ">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="border border-white/10  transform overflow-hidden rounded-2xl bg-dark-midnight p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium leading-6 text-white text-center"
                >
                  {props?.title}
                </DialogTitle>
                {props.children}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}