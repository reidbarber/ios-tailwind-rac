import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import {Input, Label, SearchField as AriaSearchField, SearchFieldProps as AriaSearchFieldProps} from 'react-aria-components';

interface SearchFieldProps extends AriaSearchFieldProps {
  label?: string;
  placeholder? : string;
}

export function SearchField(
  { label, placeholder = 'Search', ...props }: SearchFieldProps
) {
  return (
    <AriaSearchField className="rounded-lg bg-transparent max-w-3xl" {...props}>
      {label && <Label>{label}</Label> }
      {/* <MagnifyingGlassIcon width="10" style={{marginTop: -10}} /> */}
      <Input className="bg-ios-dark-surface-1 py-1 px-2 w-full rounded-lg" placeholder={placeholder} />
    </AriaSearchField>
  );
}
