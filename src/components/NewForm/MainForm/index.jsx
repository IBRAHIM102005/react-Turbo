import { useForm, FormProvider } from 'react-hook-form';
import { useContext } from 'react';
import { HomeContext } from '../../../pages/Home/context';
import { Input } from '../Input';
import { Select } from '../Select';
import '../MainForm/MainForm.css';
import { Radio } from '../Radio';
import * as yup from 'yup';
import { useCallback } from 'react';
export function MainForm() {
  const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    marka: yup.string().required('Car name is required'),
    model: yup.string().required('Car model is required'),
    yanacaq: yup.string().required('Yanacaq is required'),
    type: yup.string().required('Type is required'),
    gearBox: yup.string().required('GearBox type is required'),
  });
  const { modifiedData, data, setNewData } = useContext(HomeContext);
  const useYupValidationResolver = (validationSchema) =>
    useCallback(
      async (data) => {
        try {
          const values = await validationSchema.validate(data, {
            abortEarly: false,
          });

          return {
            values,
            errors: {},
          };
        } catch (errors) {
          return {
            values: {},
            errors: errors.inner.reduce(
              (allErrors, currentError) => ({
                ...allErrors,
                [currentError.path]: {
                  type: currentError.type ?? 'validation',
                  message: currentError.message,
                },
              }),
              {},
            ),
          };
        }
      },
      [validationSchema],
    );
  const methods = useForm({
    defaultValues: {
      Name: 'salam',
    },
    resolver: useYupValidationResolver(validationSchema),
  });
  const Marka = [...new Set(modifiedData.map((car) => car.marka))];
  const Model = [...new Set(modifiedData.map((car) => car.model))];
  const fuel = [
    '',
    'Benzin',
    'Dizel',
    'Qaz',
    'Elektro',
    'Hibrid',
    'Plug-in Hibrid',
    'Hidrogen',
  ];
  const tranmission = ['', 'arxa', 'tam', 'ön'];
  const carTypes = [
    '',
    'Avtobus',
    'Dartqı',
    'Fastbek',
    'Fayton',
    'Furqon',
    'Hetçbek, 3 qapı',
    'Hetçbek, 4 qapı',
    'Hetçbek, 5 qapı',
    'Kabriolet',
    'Karvan',
    'Kompakt-Van',
    'Kupe',
    'Kvadrosikl',
    'Liftbek',
    'Limuzin',
  ];
  const gearBox = ['', 'Avtomat', 'Variator', 'Mexaniki', 'Robot', 'Reduktor'];
  const radio = ['km', 'mil'];
  const color = [
    '',
    'Ağ',
    'Qara',
    'Boz',
    'Gümüşü',
    'Qırmızı',
    'Yaşıl',
    'Göy',
    'Sarı',
    'Narıncı',
    'Bənövşəyi',
    'Çəhrayı',
    'Qəhvəyi',
    'Bej',
    'Tünd göy',
    'Zeytun yaşılı',
    'Səma mavisi',
    'Şampan',
    'Qızılı',
    'Mis',
    'Şokolad',
  ];

  const onSubmit = (data1) => {
    // console.log('Form Data:', data1);
  };

  return (
    <FormProvider {...methods}>
      <form className='form' onSubmit={methods.handleSubmit(onSubmit)}>
        <Input
          control={methods.control}
          type='text'
          labelName='Name'
          placeHolder='Adınızı yazın'
          name='name'
        />
        <Select
          control={methods.control}
          options={Marka}
          labelName='Marka: '
          name='marka'
        />
        <Select
          control={methods.control}
          labelName='Model: '
          name='model'
          options={Model}
        />
        <Select
          control={methods.control}
          labelName='Yanacaq Novu:  '
          name='yanacaq'
          options={fuel}
        />
        <Select
          control={methods.control}
          labelName='Ban növü'
          name='type'
          options={carTypes}
        />
        <Select
          control={methods.control}
          labelName='Sürətlər qutusu'
          name='gearBox'
          options={gearBox}
        />
        <Input
          control={methods.control}
          type='number'
          labelName='Yürüş'
          placeHolder=''
          name='length'
        />
        <Radio array={radio} name='kmMil' control={methods.control} />
        <Select
          control={methods.control}
          labelName='Rəng'
          name='color'
          options={color}
        />
        <button type='submit'>Göndər</button>
      </form>
    </FormProvider>
  );
}
