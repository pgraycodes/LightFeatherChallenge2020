import React from "react";

export default function FormHandler(FIELDS) {
  const [fields, setFields] = React.useState(FIELDS);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmittable, setIsSubmittable] = React.useState(false);

  const handleBlur = event => {
    const { name } = event.target;
    console.log("Blur", name);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Successfully submitted", fields);
      setIsSubmitting(false);
    }, 2000);
  };

  const handleChange = event => {
    const { name, value } = event.target;

    let newFields = { ...fields };
    newFields[name].value = value;
    newFields = setValidationErrors(newFields);
    setIsSubmittable(!hasErrors(newFields));
    setFields(newFields);
  };

  const hasErrors = fields => {
    return (
      Object.keys(fields)
        .map(field => fields[field].errors.length)
        .reduce((acc, errorCount) => acc + errorCount, 0) > 0
    );
  };

  const setValidationErrors = fields => {
    Object.keys(fields).forEach(field => {
      fields[field].errors = errorsForField(field);
    });

    return fields;
  };

  const errorsForField = field => {
    return fields[field].validations
      .map(validation => {
        const { isValid, message } = validation(fields[field].value);
        return isValid ? "" : message;
      })
      .filter(value => value.length > 0);
  };

  return {
    fields,
    isSubmitting,
    isSubmittable,
    handleChange,
    handleBlur,
    handleSubmit
  };
}
