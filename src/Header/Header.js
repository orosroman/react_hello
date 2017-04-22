import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import './Header.css';

class Header extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
        isLoading: PropTypes.bool,
        submit: PropTypes.func,
        title: PropTypes.string,
        type: PropTypes.oneOf(['news', 'photos']),
        user: PropTypes.shape({
            name: PropTypes.string,
            age: PropTypes.number
        }),
        users: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                age: PropTypes.number
            })
        )
    }

    render() {
        console.log(this.props.items);
        return (
            <div className='mini-container'>
                <h4>NavBar:</h4>
                <ul className="nav nav-pills">
                    {this.props.items.map((item, index) =>
                        <li className="nav-item nav-item-header" key={index}>
                            <a className="nav-link active" href={item.link}>{item.label}</a>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Header;