import { toast } from 'react-toastify';

const notify = () => {
  toast.error('Wrong credentials!', {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
  });
};

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

export default notify;
