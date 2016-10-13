/**  * @providesModule LinearGradient  * @flow  */
import React, {Component, PropTypes} from 'react';
import {processColor, requireNativeComponent, View, Text} from 'react-native';

export default class LinearGradient extends Component {
    static propTypes = {
        start: PropTypes.arrayOf(PropTypes.number),
        end: PropTypes.arrayOf(PropTypes.number),
        colors: PropTypes.arrayOf(PropTypes.string).isRequired,
        locations: PropTypes.arrayOf(PropTypes.number), ...View.propTypes,
    };

    componentDidMount() {
        this.setGradient();
    }

    makeGradient() {
        let gradientObjs = []
        for (let i = 0; i < this.props.colors.length; i++) {
            gradientObjs += `${this.props.colors[i]} ${this.props.locations[i] * 100}%, `
        }
        return gradientObjs = gradientObjs.slice(0, -2);
    }

    setGradient() {
        this._view.setNativeProps({style: {background: `linear-gradient(to bottom, ${this.makeGradient()})`}})
    }

    render() {
        const {
            colors,
            locations,
            ...otherProps
        } = this.props;
        return (
            <View ref={component => this._view = component} {...otherProps}>{this.props.children}</View>
        );
     }
}

