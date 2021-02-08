import { toast } from 'react-toastify';

export const notifyError = (
  text,
  autoClose = 2000,
  position = toast.POSITION.TOP_CENTER
) => {
  toast.error(text, {
    position,
    autoClose,
  });
};

export const notifySuccess = (
  text,
  autoClose = 2000,
  position = toast.POSITION.TOP_CENTER
) => {
  toast.success(text, {
    position,
    autoClose,
  });
};
