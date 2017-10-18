import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Select, Input, Row, Col } from 'antd';
import  { provinces, cities } from  './data';

const Option = Select.Option;
const { TextArea } = Input;

class Address extends Component {
    static defaultProps = {
      width: 500,
      onChange: (country, province, city, detail) => {
        console.log(country, province, city, detail);
      },
      countriesData: ['中国大陆', '港澳', '台湾', '其他国家'],
      provincesData: {
        '中国大陆': provinces,
        '港澳': ['香港', '澳门'],
        '台湾': ['台北市', '台南市'],
        '其他国家': ['美国', '韩国']
      },
      citiesData: {
        '中国大陆': cities,
        '港澳': {
          '香港': ['九龙'],
        },
      },
    };

    static propTypes = {
      width: PropTypes.number.isRequired,
      countriesData: PropTypes.array.isRequired,
      provincesData: PropTypes.object.isRequired,
      citiesData: PropTypes.object.isRequired,
      onChange: PropTypes.func.isRequired,
    };

	constructor(props) {
		super(props);
		this.state = {
		  'selectedCountry':{
		    'value': '请选择国家或地区',
		    'disabled': false,
          },
          'selectedProvince':{
            'value': '',
            'disabled': true,
          },
          'selectedCity':{
            'value': '',
            'disabled': true,
          },
          'detail': {
            'value': '',
          },
          'col': {
            country: 8,
            province: 8,
            city: 8,

          }
        };
	}

    componentDidUpdate = () => {
      const { value: country } = this.state.selectedCountry.value !== ('请选择国家' || '') ? this.state.selectedCountry : { value: null };
      const { value: province } = this.state.selectedProvince.value !== ('请选择省市' || '') ? this.state.selectedProvince : { value: null };
      const { value: city } = this.state.selectedCity.value !== ('请选择城市或地区' || '') ? this.state.selectedCity : { value: null };
      const { value: detail } = this.state.detail.value !== '' ? this.state.detail : { value: null };
      this.props.onChange({country, province, city, detail});
    };

	countryChange = (value) => {
      this.setState({'selectedCountry': {"value": value, 'disabled': false,}, 'selectedProvince': {value:'' , 'disabled': true,},'selectedCity': {value:'' ,'disabled': true,}, 'col': {'country': 8, 'province': 8, 'city': 8, }});
      if(this.props.provincesData[value]) {
        switch (value) {
          case '其他国家':
            this.setState({
              'selectedProvince': {value: '请选择国家', 'disabled': false}, 'selectedCity': {value: '', 'disabled': true}
            });
            break;
          case '港澳': {
            this.setState({
              'selectedProvince': {value: '请选择地区', 'disabled': false}, 'selectedCity': {value: '', 'disabled': true}
            });
            break;
          }
          case '台湾': {
            this.setState({
              'selectedProvince': {value: '请选择地区', 'disabled': false}, 'selectedCity': {value: '', 'disabled': true}
            });
            break;
          }
          default:
            this.setState({
              'selectedProvince': {value: '请选择省市', 'disabled': false},
              'selectedCity': {value: '请选择城市或地区', 'disabled': true}
            });
        }
      }
    };

    provinceChange = (value) => {
      this.setState({'selectedProvince': {'value': value, 'disabled': false}, 'selectedCity': {value:'' ,'disabled': true}, 'col': {'country': 8, 'province': 8, 'city': 8, }});
      if(this.props.citiesData[this.state.selectedCountry.value] && this.props.citiesData[this.state.selectedCountry.value][value]){
        this.setState({'selectedCity': {value:'请选择城市或地区' ,'disabled': false}});
      }
      else{
        this.setState({'col': {'country': 8, 'province': 8, 'city': 0, }});
      }
    };

    cityChange = (value) => {
      this.setState({'selectedCity': {'value': value}});
    };

    detailChange = (e) => {
      this.setState({'detail': {'value': e.target.value}});
    };

	render() {
      const { countriesData, provincesData, citiesData } = this.props;
      const { col: {country: countryCol, province: provinceCol, city: cityCol} } = this.state;
      const countriesOptions = countriesData.map(country => <Option key={country}>{country}</Option>);
      const provincesOptions = (!this.state.selectedProvince.disabled ? provincesData[this.state.selectedCountry.value].map(province => <Option key={province}>{province}</Option>) : null);
      const citiesOptions = (!this.state.selectedCity.disabled ? citiesData[this.state.selectedCountry.value][this.state.selectedProvince.value].map(city => <Option key={city}>{city}</Option>) : null);
      return (
            <div style={{width: this.props.width}}>
              <Row justify="space-between" gutter={20}>
                <Col span={countryCol}>
                  <Select style={{width: '100%'}} disabled={this.state.selectedCountry.disabled} onChange={this.countryChange} value={this.state.selectedCountry.value} >
                    {countriesOptions}
                  </Select>
                </Col>
                <Col span={provinceCol}>
                  <Select style={{width: '100%'}} disabled={this.state.selectedProvince.disabled} onChange={this.provinceChange} value={this.state.selectedProvince.value} >
                    {provincesOptions}
                  </Select>
                </Col>
                <Col span={cityCol}>
                  <Select style={{width: '100%'}} disabled={this.state.selectedCity.disabled} onChange={this.cityChange} value={this.state.selectedCity.value} >
                    {citiesOptions}
                  </Select>
                </Col>
              </Row>
              <Row>
                <TextArea style={{marginTop: 20}} onChange={this.detailChange} placeholder="请输入详细地址" />
              </Row>
            </div>
        );
	}
}

ReactDOM.render(<Address />, document.getElementById('root'));// export default Address;