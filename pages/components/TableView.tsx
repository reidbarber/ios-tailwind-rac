import {
  Button,
  GridList,
  GridListProps,
  ItemProps,
  Checkbox as AriaCheckbox,
  Item
} from "react-aria-components";
import { CheckIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export function TableView<T extends object>({
  children,
  ...props
}: GridListProps<T>) {
  return <GridList disabledBehavior="selection" className="bg-ios-dark-surface-1 rounded-lg my-8 mx-auto max-w-3xl" {...props}>{children}</GridList>;
}

function Checkbox({ isSelected }: { isSelected: boolean }) {
  return (
    <AriaCheckbox className="checkbox flex items-center justify-center pr-2" slot="selection">
      {isSelected && <CheckIcon className="h-4 text-ios-system-checkbox-bg-light" />}
    </AriaCheckbox>
  );
}

function Chevron() {
  return (
    <span className="chevron h-full flex items-center justify-center pr-3">
      <ChevronRightIcon className=" h-4 text-ios-system-chevron-bg-dark" />
    </span>
  );
}

export function Detail({children, ...props}: {children: React.ReactNode} & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className="detail text-ios-system-detail-text-dark pr-2" {...props}>
      {children}
    </span>
  );
}

export function Thumbnail({children, backgroundColor, ...props}: {children: React.ReactNode, backgroundColor: string} & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={`thumbnail h-3 w-3 rounded-md text-ios-light-surface bg-${backgroundColor}`} {...props}>
      {children}
    </span>
  );
}

export function Title({children, ...props}: {children: React.ReactNode} & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={`title text-ios-light-surface`} {...props}>
      {children}
    </span>
  );
}

export function Row({ children, hasChildItems, ...props }: ItemProps) {
  let textValue = typeof children === "string" ? children : undefined;
  return (
    <Item className="my-row flex [&:first-child]:width-full [&:not(:last-child)]:border-b border-ios-system-tableview-border-dark pt-2 pb-2 pl-4" textValue={textValue} {...props}>
      {({ selectionMode, selectionBehavior, allowsDragging, isSelected }) => (
        <>
          {typeof children === "string" ? <Title>{children}</Title> : children}
          {selectionMode === "multiple" || selectionMode === 'single' && (
            <Checkbox isSelected={isSelected} />
          )}
          {hasChildItems && <Chevron />}
          {allowsDragging && <Button className="draghandle" slot="drag">≡</Button>}
        </>
      )}
    </Item>
  );
}
