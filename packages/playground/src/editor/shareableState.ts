import {
  compressToEncodedURIComponent,
  decompressFromEncodedURIComponent,
} from "lz-string";

export function updateWindowLocation(code: string) {
  const result = compressToEncodedURIComponent(code);
  window.history.replaceState({}, "", `?code=${result}`);
}

export function saveToClipboard() {
  window.navigator.clipboard.writeText(location.href.toString());
  // todo: show a toast
}

export const readStateFromURL = () => {
  const params = new URLSearchParams(location.search);
  const code = params.get("code");
  if (code) {
    return decompressFromEncodedURIComponent(code);
  }
};
