console.log("app dot js is running!");

// conditional rendering in jsx
// if statement, ternary operators, logical and operator

// create app object title and subtitle
// use title and subtitle in template
// render template

const appInfo = {
  title: "React",
  subtitle: "this is about react from andrew mead",
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    appInfo.options.push(option);
    e.target.elements.option.value = "";
    templateRenderFunc();
  }
};

const appRoot = document.getElementById("app");

const onRemoveAll = () => {
  appInfo.options = [];
  templateRenderFunc();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * appInfo.options.length);
  const option = appInfo.options[randomNum];
  alert(option);
};

const templateRenderFunc = () => {
  const template = (
    <div>
      <h1> {appInfo.title} </h1>
      {appInfo.subtitle && <p> {appInfo.subtitle} </p>}
      <p>
        {appInfo.options.length > 0 ? "Here are your options" : "No options"}
      </p>

      <button disabled={appInfo.options.length === 0} onClick={onMakeDecision}>
        What should i do?
      </button>
      <button onClick={onRemoveAll}> Remove All </button>

      <ol>
        {appInfo.options.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button> Add option </button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

templateRenderFunc();
