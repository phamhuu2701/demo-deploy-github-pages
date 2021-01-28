import React, { Component } from "react";
import { categories } from "../../data";

const COUNT = 10

const INITIAL_STATE = {
	categories: null,
	categorySelected: null,
	vocabularies: null,
	vocabularySelected: null,
};

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = JSON.parse(JSON.stringify(INITIAL_STATE));
	}
	componentDidMount() {

    // set categories
    let _categories = JSON.parse(JSON.stringify(categories))
    for (let i=0; i<_categories.length; i++){
      for (let j=0; j<_categories[i].vocabularies.length; j++) {
        let text = []
        _categories[i].vocabularies[j].text.split('=').forEach(item => item ? text.push(item.trim().toLowerCase()) : null);
        _categories[i].vocabularies[j].text = text
        _categories[i].vocabularies[j].id = Date.now()
      }
    }

    // set categorySelected
    let categorySelected = _categories[0]

    // set vocabularies
    let vocabularies = []
    for (let i=0; i<categorySelected.vocabularies.length; i++) {
      for (let j=0; j<COUNT; j++) {
        vocabularies.push(categorySelected.vocabularies[i])
      }
    }

    // set vocabularySelected
    let vocabularySelected = vocabularies[Math.floor(Math.random() * vocabularies.length)]

    this.setState({categories: _categories, categorySelected, vocabularies, vocabularySelected})
  }
	render() {
    const {categories, categorySelected, vocabularies, vocabularySelected} = this.state
    console.log('this.state :>> ', this.state);
		return <div className="Home"></div>;
	}
}

export default Home;
