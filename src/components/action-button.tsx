import {HTMLAttributes} from "react";

type ActionButtonProps = Omit<HTMLAttributes<HTMLButtonElement>, "className"> & {
  label: string
}

export function ActionButton({label, ...props}: ActionButtonProps) {
  return (
    <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#175CD3] to-[#003687] shadow-[0px_0px_12px_#175CD3] cursor-pointer text-white" {...props}>
      <div className="absolute inset-0 rounded-lg">
        <div className="absolute inset-0 border rounded-lg border-white/20 mask-[linear-gradient(to_bottom,black,transparent)]"/>
        <div className="absolute inset-0 border rounded-lg border-white/40 mask-[linear-gradient(to_top,black,transparent)]"/>
        <div className="absolute inset-0 rounded-lg shadow-[0_0_10px_rgb(23,92,211,0.7)_inset]"/>
      </div>
      <span>{label}</span>
    </button>
  )
}
