import React, {useState} from 'react';
import {View, StyleSheet, Keyboard} from 'react-native';
import {Formik} from 'formik';
import Button from '../Button';
// import Search from '../../assets/images/search.svg';
import theme from '../../common/theme';

import {FormikInputValue} from '../FormikInput';
import {FORM_STATUS} from '../../common/utils/formStatus';

interface IBottomSheetForm {
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
  setShowError: React.Dispatch<React.SetStateAction<boolean>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  setTypeError: React.Dispatch<
    React.SetStateAction<
      'ERR_BAD_REQUEST' | 'ERR_NETWORK' | 'ERR_CONNECTION' | undefined
    >
  >;
}

const initialValues = {
  cameraName: '',
};

const BottomSheetForm = ({
  setSearch,
  setShowError,
  setMessage,
  setTypeError,
}: IBottomSheetForm) => {
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleFormikSubmit = async (
    values: {cameraName: string},
    actions: {
      setStatus: (arg0: string) => void;
      setSubmitting: (arg0: boolean) => void;
    },
  ) => {
    actions.setStatus(FORM_STATUS.idle);
    actions.setSubmitting(true);
    actions.setSubmitting(false);
    setSearch(true);
    Keyboard.dismiss();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => console.log('onSubmit')}>
      {({handleSubmit}) => {
        return (
          <View style={styles.form}>
            <FormikInputValue
              name="cameraName"
              placeholder={'buscar producto'}
              // Icon={Search}
              iconStyles={'red'}
              styles={{
                width: '100%',
                marginBottom: 16,
                paddingHorizontal: 24,
              }}
            />
            <View style={{width: '100%', paddingHorizontal: 24}}>
              <Button
                isDisabled={!isValid}
                children={'buscar'}
                onPress={handleSubmit}
              />
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    paddingTop: 16,
    width: '100%',
    alignItems: 'center',
  },
});

export default BottomSheetForm;
