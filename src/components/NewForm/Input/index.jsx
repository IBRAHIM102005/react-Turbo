import { Controller } from 'react-hook-form';
export function Input({ control, type, labelName, placeHolder, name }) {
  return (
    <>
      <label htmlFor={name}>{labelName}</label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => {
          return (
            <>
              <input
                type={type}
                placeholder={placeHolder}
                onChange={field.onChange}
                {...field}
              />
              {fieldState.error && (
                <p style={{ color: 'red' }}>{fieldState.error.message}</p>
              )}
            </>
          );
        }}
      />
    </>
  );
}
