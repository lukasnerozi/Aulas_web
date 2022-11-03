const colors = {
  p: "#127312",
  div: "#373019",
  span: "#374673",
  section: "#273162",
  ul: "#262618",
  ol: "#945858",
  Header: "#a12831",
  nav: "#3123",
  main: "#324324",
  footer: "#1545",
  form: "#5633",
  body: "#4574",
  padrao: "#616161",
  get(tag) {
    return this[tag] ? this[tag] : this.padrao;
  },
};

document.querySelectorAll(".tag").forEach((box) => {
  const tagName = box.tagName.toLowerCase();

  box.style.borderColor = colors.get(tagName);

  if (!box.classList.contains("nolabel")) {
    const label = document.createElement("label");
    label.style.backgroundColor = colors.get(tagName);
    label.innerHTML = tagName;
    box.insertBefore(label, box.childNodes[0]);
  }
});
