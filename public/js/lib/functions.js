export default function randomId() {
  return Math.random().toString(36).substring(7);
}

export function deleteElements(element) {
  if (!element) return;
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
}
