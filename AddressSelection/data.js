import dataSource from './dataSource.json';

const data = dataSource.data;
const provinces = [];
const cities = {};
for(let i=0; i<data.length; i++){
  provinces.push(data[i].name);
  if(data[i].children){
    cities[data[i].name] = [];
    for(let j=0; j<data[i].children.length; j++){
      cities[data[i].name].push(data[i].children[j].name);
    }
  }
}

export { provinces, cities };