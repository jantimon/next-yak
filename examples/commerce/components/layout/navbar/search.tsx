"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { createUrl } from "lib/utils";
import { styled } from "next-yak";
import { useRouter, useSearchParams } from "next/navigation";

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set("q", search.value);
    } else {
      newParams.delete("q");
    }

    router.push(createUrl("/search", newParams));
  }

  return (
    <Form onSubmit={onSubmit}>
      <SearchInput
        key={searchParams?.get("q")}
        type="text"
        name="search"
        placeholder="Search for products..."
        autoComplete="off"
        defaultValue={searchParams?.get("q") || ""}
      />
      <IconWrapper>
        <Icon />
      </IconWrapper>
    </Form>
  );
}

export function SearchSkeleton() {
  return (
    <Form>
      <SearchInput placeholder="Search for products..." />
      <IconWrapper>
        <Icon />
      </IconWrapper>
    </Form>
  );
}

const Form = styled.form`
  position: relative;
  width: 100%;

  @media (min-width: 1024px) {
    width: 20rem;
  }

  @media (min-width: 1280px) {
    width: 100%;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  border-radius: 0.5rem;
  border-width: 1px;
  background-color: rgb(255 255 255);
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(0 0 0);

  &::placeholder {
    color: rgb(115 115 115);
  }

  @media (prefers-color-scheme: dark) {
    border-color: rgb(38 38 38);
    background-color: transparent;
    color: rgb(255 255 255);

    &::placeholder {
      color: rgb(163 163 163);
    }
  }
`;
const IconWrapper = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  margin-right: 0.75rem;
  display: flex;
  height: 100%;
  align-items: center;
`;
const Icon = styled(MagnifyingGlassIcon)`
  height: 1rem;
`;
