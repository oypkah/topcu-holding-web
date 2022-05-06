function changeUrl(url: string): void {
  window.history.pushState("", "", url);
}

export default changeUrl;
