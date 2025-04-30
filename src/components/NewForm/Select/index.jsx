import { Controller } from 'react-hook-form';
export function Select({ labelName, options, control, name }) {
  return (
    <>
      <label htmlFor={name}>{labelName}</label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => {
          return (
            <>
              <select onChange={field.onChange} {...field}>
                {options.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
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
