import {FlatList, StyleSheet} from 'react-native';
import RenderItem from './RenderItem';
import theme from '../common/theme';

const List = () => {
  const data = [
    {id: 1, name: 'data1'},
    {id: 2, name: 'data2'},
    {id: 3, name: 'data3'},
  ];
  return (
    <FlatList
      data={data}
      style={style.list}
      renderItem={({item}) => {
        return <RenderItem item={item} type="remove" key={'RenderItem'} />;
      }}
    />
  );
};

const style = StyleSheet.create({
  list: {
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderRadius: 8,
  },
});

export default List;
