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


- [x] Example of composing `NumberField` with `Select` to create a grouped fields
- [x] Implement `ComboBox` component
- [x] Implement `ComboBoxCountry` component
- [x] Implement `ComboBoxCountry` component
- [x] Implement `NumberField` component
- [x] Implement `Select` component
- [x] Implement `TextField` component
- [x] Remove deprecated `TextArea` & `FormTextArea` components

- [ ] Remove deprecated `SlotWrapper` component
- [ ] Remove deprecated `Dialog` component
- [ ] Remove deprecated `FloatingPanel` component
- [ ] Remove deprecated `Input` & `FormInput` components
- [ ] Remove deprecated `SelectButton`, `SelectSingle` & `SelectMulti` components
- [ ] Implement `DatePicker` component
- [ ] Remove deprecated `InputDate` & `FormInputDate` components

- [ ] ~Implement `NumberFieldCurrency` component~ (Not doing)

#### "Later"™️

- [ ] Fix bug where `TextField` is not focused when clicking on label
- [ ] Add functionality to toggle `ComboBox` on input click
- [ ] Virtualize `ComboBoxCountry` list
- [ ] Summarise validation errors at bottom of `Form` component
- [ ] Fix bug where type is not known when using `onSelectionChange` callback in `Select` and `MenuButton` components
- [ ] Use RAC render props type to add type-safety to recipe variants
