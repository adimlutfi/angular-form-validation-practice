# AngularFormValidationPractice

validation sample angular 2 js sourced from angular.io :

- Template Template-Driven Forms
In the template-driven approach, you arrange [https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms_in_HTML](form elements in the component's template).

You add Angular form directives (mostly directives beginning ng...) to help Angular construct a corresponding internal control model that implements form functionality. We say that the control model is implicit in the template.

To validate user input, you add [https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation](HTML validation) attributes to the elements. Angular interprets those as well, adding validator functions to the control model.

Angular exposes information about the state of the controls including whether the user has "touched" the control or made changes and if the control values are valid.

## Template & Messages
While the layout is straightforward, there are obvious shortcomings with the way we handle validation messages:

It takes a lot of HTML to represent all possible error conditions. This gets out of hand when there are many controls and many validation rules.

We're not fond of so much JavaScript logic in HTML.

The messages are static strings, hard-coded into the template. We often require dynamic messages that we should shape in code.

We can move the logic and the messages into the component with a few changes to the template and component.

## Reactive
In the template-driven approach, you markup the template with form elements, validation attributes, and ng... directives from the Angular FormsModule. At runtime, Angular interprets the template and derives its form control model.

Reactive Forms takes a different approach. You create the form control model in code. You write the template with form elements andform... directives from the Angular ReactiveFormsModule. At runtime, Angular binds the template elements to your control model based on your instructions.

This approach requires a bit more effort. You have to write the control model and manage it.

In return, you can

add, change, and remove validation functions on the fly
manipulate the control model dynamically from within the component
test validation and control logic with isolated unit tests.
The third cookbook sample re-writes the hero form in reactive forms style.

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.22-1.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
