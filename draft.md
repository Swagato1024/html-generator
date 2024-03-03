// read file content
// forEach comment create element. append child, add attribute.
// generate html of that element

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


const createCommentEle = () => {
  children;
  const comment = ['div', {classes: [x, y], id = ''}, children]
  const commentE = const generateHtml(comment)
}

render(template, comments) {
  const commentEl = createCommentEl();
  const commentsHtml = commentEl.generateHtml();
}

render(template, comments)