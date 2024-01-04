# Boondoggle.design

(Yet another) React component library.

## Installation

```shell
npm i boondoggle
```

**Note:** You must have a valid FontAwesome Pro token exported as `FONTAWESOME_TOKEN` in order to
install.

## Documentation

There is a Storybook deployed to <https://boondoggle.design>

## Tech stack

- [Downshift](https://www.downshift-js.com/) for WAI-ARIA compliant combobox and select dropdown
    components.
- [Floating UI](https://floating-ui.com/) for positioning floating UI elements.
- [FontAwesome](https://fontawesome.com/) for SVG icons.
- [React Hook Form](https://www.react-hook-form.com/) for building forms and performing
    validation.
- [React](https://react.dev/) for declarative component-centric UI.
- [@rehookify/datepicker](https://github.com/rehookify/datepicker) for building date & time picker
    elements.
- [Tanstack Table](https://tanstack.com/table/v8) for feature-rich data tables.
- [Typescript](https://www.typescriptlang.org/) for type-safety and a better developer experience.
- [Vanilla Extract](https://vanilla-extract.style/) for type-safe, zero-runtime styling.
- [Zod](https://zod.dev/) for schema validation with static type inference.

## Roadmap

### 2024

#### January

Focused on implementing React Aria Components to reduce Javascript boilerplate and focus attention on
styling and enabling application features.

- [x] Implement `TextField` component
  - [ ] Remove deprecated `TextArea` & `FormTextArea` components
  - [ ] Remove deprecated `Input` & `FormInput` components
  - [ ] Fix bug where `TextField` is not focused when clicking on label
- [ ] Implement `ComboBox` component
  - [ ] Implement `ComboBoxCountry` component
  - [ ] Remove deprecated `SelectSingle` & `SelectMulti` components within the library
- [ ] Implement `NumberField` component
- [ ] Implement `DatePicker` component

