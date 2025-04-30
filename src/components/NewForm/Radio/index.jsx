import { Controller } from 'react-hook-form';

export function Radio({ array, name, labelName, control }) {
  return (
    <>
      <label htmlFor={name}>{labelName}</label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            {array.map((element, index) => (
              <label key={index}>
                <input
                  type='radio'
                  name={field.name}
                  value={element}
                  checked={field.value === element}
                  onChange={field.onChange}
                />
                {element}
              </label>
            ))}
            {fieldState.error && (
              <p style={{ color: 'red' }}>{fieldState.error.message}</p>
            )}
          </>
        )}
      />
    </>
  );
}
