class Element {
  #tag;
  #classes;
  #children;

  constructor(tag) {
    this.#tag = tag;
    this.#classes = [];
    this.#children = [];
  }

  append(child) {
    this.#children.push(child);
  }

  addClass(className) {
    this.#classes.push(className);
  }

  getClasses() {
    if (this.#classes.length === 0) return "";

    return `class = ${this.#classes.join(" ")}`;
  }

  toHtml() {
    return `< ${this.#tag} ${this.getClasses()}>${this.#children
       .map((child) => {
         if (typeof child === "string") return child;

         return child.toHtml();
       })
       .join("\n")}
     </${this.#tag}>`;
  }
}

const generateHTML = ([tagName, attributes, children = ""]) => {
  const { classes, id } = attributes;

  const element = document.createElement(tagName);
  if (classes && classes.length > 0) element.classList.add(...classes);
  if (id && id !== "") element.setAttribute("id", id);

  if (!Array.isArray(children)) {
    element.innerText = children;

    return element;
  }

  element.append(generateHTML(children));
  return element;
};

//read file content
// const render

const main = () => {
  const body = document.querySelector("#page");

  const element = generateHTML([
    "div",
    { classes: ["blue", "green"], id: "head1" },
    ["div", { classes: ["a", "b"], id: "head2" }, ["p", {}]],
  ]);

  body.append(element);
};

window.onload = main;
