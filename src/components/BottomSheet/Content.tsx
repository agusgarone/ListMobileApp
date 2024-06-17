import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import BottomSheetForm from './Form';
import Button from '../Button';
import List from '../List';
interface IBottomSheet {
  onDismiss: () => void;
  setAnimation: React.Dispatch<React.SetStateAction<boolean>>;
  animation: boolean;
}

const Content = ({onDismiss}: IBottomSheet) => {
  const [search, setSearch] = useState(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [typeError, setTypeError] = useState<
    'ERR_BAD_REQUEST' | 'ERR_NETWORK' | 'ERR_CONNECTION' | undefined
  >(undefined);

  return (
    <>
      <View style={styles.centeredView}>
        <BottomSheetForm
          key={'form-bottom-sheet'}
          setSearch={setSearch}
          setShowError={setShowError}
          setMessage={setMessage}
          setTypeError={setTypeError}
        />
        <View style={styles.containerResult}>
          <View style={styles.containerList}>
            <List />
          </View>
          <View style={styles.containerButton}>
            <Button>{'Agregar'}</Button>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    height: '100%',
    display: 'flex',
  },
  containerResult: {
    flex: 6,
    width: '100%',
    paddingHorizontal: 24,
    display: 'flex',
    maxHeight: 450,
  },
  containerList: {
    flex: 2,
    width: '100%',
    display: 'flex',
  },
  containerButton: {
    flex: 1,
    width: '100%',
    display: 'flex',
    paddingTop: 12,
  },
});

export default Content;
