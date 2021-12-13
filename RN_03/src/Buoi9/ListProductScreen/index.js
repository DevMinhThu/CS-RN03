import axios from 'axios';
import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BackgroundView, IconButton} from './components';
import {fontIcon} from './components/IconButton';

export default class ListProductScreen extends Component {
  state = {
    listCategory: [],
    listProduct: [],
  };

  componentDidMount() {
    // axios({
    //   url: 'http://svcy3.myclass.vn/api/Product/getAllCategory',
    //   method: 'GET',
    // })
    //   .then(result => {
    //     console.log('getAllCategory', result.data.content);
    //     this.setState({listCategory: result.data.content});
    //   })
    //   .catch(error => console.log(error));
    // axios({
    //   url: 'http://svcy3.myclass.vn/api/Product',
    //   method: 'GET',
    // })
    //   .then(result => console.log('Product', result.data.content))
    //   .catch(error => error);

    // === call multiple api ===
    const getAllCategory = axios({
      url: 'http://svcy3.myclass.vn/api/Product/getAllCategory',
      method: 'GET',
    });
    const getAllProduct = axios({
      url: 'http://svcy3.myclass.vn/api/Product',
      method: 'GET',
    });
    Promise.all([getAllCategory, getAllProduct])
      .then(([resultCategory, resultProduct]) => {
        const listCategory = resultCategory.data.content;
        const listProduct = resultProduct.data.content;
        this.setState({listCategory, listProduct});
      })
      .catch(error => console.log(error));
  }

  renderListProduct = ({item, index}) => {
    const isRightItem = index % 2 !== 0;

    return <View style={[styles.cardProduct, isRightItem && {height: 300}]} />;
  };

  render() {
    const {listCategory, listProduct} = this.state;
    // console.log(listCategory);
    return (
      <BackgroundView>
        <View style={styles.container}>
          <View style={styles.header}>
            <IconButton name="close" size={30} color="#fff" />
            <IconButton
              name="sliders"
              size={30}
              color="#fff"
              font={fontIcon.fontAwesome}
            />
          </View>
          <FlatList
            style={styles.category}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={listCategory}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.categoryButton}>
                <Text style={styles.categoryTitle}>{item.category}</Text>
              </TouchableOpacity>
            )}
          />
          <FlatList
            // style={{}}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            data={listProduct}
            renderItem={this.renderListProduct}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </BackgroundView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    height: 50,
    // backgroundColor: '#bfb',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  category: {
    // height: 50,
    // backgroundColor: '#bfb',
    flexGrow: 0,
    marginBottom: 10,
  },
  categoryButton: {
    paddingVertical: 1,
    marginRight: 20,
    // backgroundColor: 'red',
    paddingBottom: 10,
  },
  categoryTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  cardProduct: {
    width: '45%',
    height: 250,
    backgroundColor: '#fff',
    marginBottom: 30,
    borderRadius: 10,
    // marginRight: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});
