// const axios = require('axios').default;
// const tags = require('./tags.json');
import { IInitItem } from 'type';
import { createTag } from './db';
import tags from './tags.json';

const tagsIdArray: number[] = [];

const getItemFromCategory = (id: number): IInitItem[] => {
  const axios = require("axios");

  const options = {
    method: 'GET',
    url: 'https://asos2.p.rapidapi.com/products/v2/list',
    params: {
      store: 'US',
      offset: '0',
      categoryId: id,
      limit: '100000',
      country: 'US',
      sort: 'freshness',
      currency: 'SEK',
      sizeSchema: 'US',
      lang: 'en-US'
    },
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': process.env.API_HOST
    }
  };

  axios.request(options).then(function (response: IInitItem) {
    console.log(response.data);
  }).catch(function (error: string) {
    console.error(error);
  });
}

const initDb = async () => {
  await tags.brands.map(brand => brand.children.map(child => {
    if (child.link.categoryId) {
      tagsIdArray.push(child.link.categoryId);
      createTag(child.content.title);
    }
  }));

  tagsIdArray.map(tag => getItemFromCategory(tag));


}


