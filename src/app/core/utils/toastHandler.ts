import { Bounce, toast } from 'react-toastify';

interface ToastProps {
  message: string;
}

export const errorToastHandler = (props: ToastProps) => {
  toast.error(props.message, {
    position: 'top-center',
    autoClose: 8000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    theme: 'dark',
    transition: Bounce,
  })
} 

export const successToastHandler = (props: ToastProps) => {
  toast.success(props.message, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    theme: 'dark',
    transition: Bounce,
  })
} 