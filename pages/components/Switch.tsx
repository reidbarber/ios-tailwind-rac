import { ComponentProps, ReactNode } from "react";
import { Switch as AriaSwitch } from "react-aria-components";

export function Switch({
  children,
  ...props
}: { children?: ReactNode } & ComponentProps<typeof AriaSwitch>) {
  return (
    <AriaSwitch
      {...props}
      className="switch group inline-flex touch-none items-center pr-3"
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <span className="group-data-[selected]:bg-ios-system-green-dark group-data-[focus-visible]:ring-2 h-7 w-11 cursor-pointer rounded-full border-2 border-transparent bg-ios-system-switch-bg-dark ring-offset-2 ring-offset-zinc-900 transition duration-200">
        <span className="group-data-[selected]:ml-4 group-data-[selected]:group-data-[pressed]:ml-2 group-data-[pressed]:w-6 block h-6 w-6 origin-right rounded-full bg-ios-light-surface shadow transition-all duration-200" />
      </span>
      {children && <span>{children}</span>}
    </AriaSwitch>
  );
}
