import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './index.styl';

class Checkbox extends PureComponent {
    static propTypes = {
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        indeterminate: PropTypes.bool,
        text: PropTypes.string
    };

    render() {
        const {
            className,
            children,
            disabled,
            indeterminate,
            text,
            ...props
        } = this.props;
        return (
            <label
                className={classNames(
                    className,
                    styles.controlCheckbox,
                    { [styles.disabled]: disabled }
                )}
            >
                <input
                    {...props}
                    type="checkbox"
                    disabled={disabled}
                    className={styles.inputCheckbox}
                    ref={
                        el => el && (el.indeterminate = indeterminate)
                    }
                />
                <i className={styles.controlIndicator} />
                { text }
                { children }
            </label>
        );
    }
}

export default Checkbox;
