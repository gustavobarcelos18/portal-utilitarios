import { InputHTMLAttributes, forwardRef } from 'react';

interface CampoProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Campo = forwardRef<HTMLInputElement, CampoProps>(({ label, ...props }, ref) => {
  //componente de campo que mostra um label acima do input
  //uso forwardRef para o React Hook Form poder controlar o input
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-1 font-semibold">{label}</label>
      <input
        {...props}
        ref={ref}
        className="border p-2 rounded"
      />
    </div>
  );
});

export default Campo;
