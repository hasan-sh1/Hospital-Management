'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import toastr from 'toastr';
import 'toastr/build/toastr.css';

export default function SuccessMsg() {
  const searchParams = useSearchParams();
  const success = searchParams.get('success');
  const error = searchParams.get('error');

  const toastrOptions = {
    closeButton: true,
    progressBar: true,
    positionClass: "toast-top-right",
    timeOut: 3000
  };

  useEffect(() => {
    if (success) {
      toastr.success(success, "Successfully!", toastrOptions);
    }
    if (error) {
      toastr.error(error, "Error!", toastrOptions);
    }
  }, [success, error]);

  return null;
}
 